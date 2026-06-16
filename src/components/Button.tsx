import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'font-display tracking-wider uppercase rounded-lg transition-colors inline-flex items-center justify-center'

  const variantStyles = {
    primary: 'bg-coastal-teal text-white hover:bg-deep-ocean',
    secondary: 'bg-warm-sand text-deep-ocean hover:bg-driftwood',
    outline: 'border-2 border-coastal-teal text-coastal-teal hover:bg-coastal-teal hover:text-white',
  }

  const sizeStyles = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  )
}
