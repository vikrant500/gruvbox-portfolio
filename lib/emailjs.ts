import emailjs from '@emailjs/browser';

// Immediate debug logging of raw environment variables
console.log('Raw ENV variables:', {
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
});

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// Validate environment variables
if (!serviceId || !templateId || !publicKey) {
  throw new Error(
    `Missing EmailJS environment variables:
    Service ID: ${serviceId ? '✓' : '✗'}
    Template ID: ${templateId ? '✓' : '✗'}
    Public Key: ${publicKey ? '✓' : '✗'}`
  );
}

// Initialize EmailJS
try {
  emailjs.init(publicKey);
  console.log('EmailJS initialized successfully');
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
  throw error;
}

export const sendEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  // Validate required data
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
    throw new Error('Missing required form data');
  }

  try {
    const templateParams = {
      subject: formData.subject || `Message from ${formData.firstName} ${formData.lastName}`,
      name: `${formData.firstName} ${formData.lastName}`,
      Message: formData.message,
      email: formData.email,
    };

    console.log('Attempting to send email with:', {
      serviceId,
      templateId,
      templateParams,
    });

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );

    console.log('EmailJS Response:', response);
    return { success: true, data: response };
  } catch (error: any) {
    // Build a richer, serializable error object for logging
    const errorDetails: any = {
      type: typeof error,
      message: error?.message ?? String(error) ?? 'Unknown error',
      name: error?.name,
      stack: error?.stack,
      status: error?.status ?? error?.statusCode ?? error?.status_code,
      serviceId,
      templateId,
      hasPublicKey: !!publicKey,
    };

    try {
      // emailjs may reject with an XHR/Response-like object that has non-enumerable fields.
      // Try to extract common useful fields safely.
      if (error?.text) {
        // sometimes error.text is a string
        errorDetails.text = error.text;
      } else if (error?.response) {
        // response might be a Fetch Response or similar
        const resp = error.response as any;
        if (typeof resp.text === 'function') {
          // await response body text
          errorDetails.responseText = await resp.text();
        } else if (resp.responseText) {
          errorDetails.responseText = resp.responseText;
        }
        if (resp.status) errorDetails.status = errorDetails.status ?? resp.status;
      } else if (error?.xhr) {
        const xhr = error.xhr as any;
        errorDetails.xhr = {
          status: xhr.status,
          response: xhr.response || xhr.responseText,
        };
        errorDetails.status = errorDetails.status ?? xhr.status;
      }
    } catch (extractErr) {
      // Non-fatal: include extraction failure information
      errorDetails.extractError = String(extractErr);
    }

    // Log the structured details so it's visible in the browser console and server logs
    console.error('EmailJS error details:', errorDetails);

    // Throw a concise error upwards with the main info
    throw new Error(
      `EmailJS error: ${errorDetails.message}
      Status: ${errorDetails.status ?? 'No status'}
      Service ID: ${serviceId}
      Template ID: ${templateId}`
    );
  }
}; 