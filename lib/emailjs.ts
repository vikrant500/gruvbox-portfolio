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
  message: string;
}) => {
  // Validate required data
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
    throw new Error('Missing required form data');
  }

  try {
    const templateParams = {
      subject: `Message from ${formData.firstName} ${formData.lastName}`,
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
    console.error('EmailJS error details:', {
      error,
      message: error?.message,
      text: error?.text,
      status: error?.status,
      serviceId,
      templateId,
      hasPublicKey: !!publicKey,
      stack: error?.stack
    });
    
    // Throw a more detailed error
    throw new Error(
      `EmailJS error: ${error?.message || error?.text || 'Unknown error'}
      Status: ${error?.status || 'No status'}
      Service ID: ${serviceId}
      Template ID: ${templateId}`
    );
  }
}; 