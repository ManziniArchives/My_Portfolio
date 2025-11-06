"use client"

import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { sendEmail, EmailData } from '@/utils/emailService'
import Button from '@/components/ui/Button'
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
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
    >
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                getFieldError('name')
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="John Doe"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />
          </div>
          {getFieldError('name') && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {getFieldError('name')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                getFieldError('email')
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="john@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />
          </div>
          {getFieldError('email') && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {getFieldError('email')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <FaCommentDots className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="message"
              name="message"
              rows={6}
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none ${
                getFieldError('message')
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="Your message here..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />
          </div>
          {getFieldError('message') && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {getFieldError('message')}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {formik.values.message.length}/2000 characters
          </p>
        </div>

        {/* Submit Status */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg flex items-center space-x-3 ${
              submitStatus.type === 'success'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}
          >
            {submitStatus.type === 'success' ? (
              <FaCheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : (
              <FaExclamationCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <span className="text-sm">{submitStatus.message}</span>
          </motion.div>
        )}

        <Button
          type="submit"
          variant="primary"
          disabled={formik.isSubmitting}
          className="w-full flex items-center justify-center"
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

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          You can also reach me directly at{' '}
          <a
            href="mailto:manziniarchives@gmail.com"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            manziniarchives@gmail.com
          </a>
        </p>
      </div>
    </motion.div>
  )
}