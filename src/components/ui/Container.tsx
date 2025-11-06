import React from 'react'

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
}

export default function Container({
  children,
  size = 'lg',
  className = '',
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-full'
  }

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  )
}