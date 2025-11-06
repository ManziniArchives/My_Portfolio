import emailjs from '@emailjs/browser'

export interface EmailData {
  name: string
  email: string
  message: string
}

// EmailJS configuration - These should be set as environment variables
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Initialize EmailJS with public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Musawenkosi Manzini',
      to_email: 'manziniarchives@gmail.com',
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    )

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      }
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    console.error('Email service error:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again later or contact me directly at manziniarchives@gmail.com'
    }
  }
}