"use client"

import React, { useEffect, useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

type Props = {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Before mount, render children without ThemeProvider/Toaster to avoid
  // hydration mismatches caused by theme class changes on <html>.
  if (!mounted) return <>{children}</>

  return (
    <ThemeProvider attribute="class">
      {children}
      <Toaster position="bottom-right" />
    </ThemeProvider>
  )
}
