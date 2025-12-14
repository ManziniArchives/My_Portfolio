"use client"

import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { sendEmail, EmailData } from '@/utils/emailService'
import { Button } from '@/components/ui/button'
import { FaEnvelope, FaUser, FaCommentDots, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .required('Message is required'),
})

interface ContactFormProps {
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values: EmailData, { resetForm }) => {
      setSubmitStatus({ type: null, message: '' })

      const result = await sendEmail(values)

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        resetForm()
        onSuccess?.()
      } else {
        setSubmitStatus({ type: 'error', message: result.message })
      }

      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)
    },
  })

  const getFieldError = (fieldName: keyof typeof formik.values) => {
    return formik.touched[fieldName] && formik.errors[fieldName]
      ? formik.errors[fieldName]
      : ''
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-premium-gray border border-white/5 rounded-2xl p-8"
    >
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaUser className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className={`block w-full pl-11 pr-4 py-3.5 bg-black/20 border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 text-white placeholder-gray-600 transition-all ${getFieldError('name')
                ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                : 'border-white/10'
                }`}
              placeholder="John Doe"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />
          </div>
          {getFieldError('name') && (
            <p className="mt-1.5 text-sm text-red-400">
              {getFieldError('name')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaEnvelope className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className={`block w-full pl-11 pr-4 py-3.5 bg-black/20 border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 text-white placeholder-gray-600 transition-all ${getFieldError('email')
                ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                : 'border-white/10'
                }`}
              placeholder="john@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />
          </div>
          {getFieldError('email') && (
            <p className="mt-1.5 text-sm text-red-400">
              {getFieldError('email')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <div className="relative">
            <div className="absolute top-4 left-4 pointer-events-none">
              <FaCommentDots className="h-4 w-4 text-gray-500" />
            </div>
            <textarea
              id="message"
              name="message"
              rows={6}
              className={`block w-full pl-11 pr-4 py-3.5 bg-black/20 border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 text-white placeholder-gray-600 resize-none transition-all ${getFieldError('message')
                ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                : 'border-white/10'
                }`}
              placeholder="Your message here..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />
          </div>
          {getFieldError('message') && (
            <p className="mt-1.5 text-sm text-red-400">
              {getFieldError('message')}
            </p>
          )}
          <p className="mt-1.5 text-xs text-gray-500 text-right">
            {formik.values.message.length}/2000
          </p>
        </div>

        {/* Submit Status */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl flex items-center space-x-3 border ${submitStatus.type === 'success'
              ? 'bg-green-500/10 border-green-500/20 text-green-400'
              : 'bg-red-500/10 border-red-500/20 text-red-400'
              }`}
          >
            {submitStatus.type === 'success' ? (
              <FaCheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : (
              <FaExclamationCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{submitStatus.message}</span>
          </motion.div>
        )}

        <Button
          type="submit"
          variant="default"
          disabled={formik.isSubmitting}
          className="w-full flex items-center justify-center py-4 text-base"
        >
          {formik.isSubmitting ? (
            <>
              <FaSpinner className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </motion.div>
  )
}