import React from 'react'
import MuiButton from '@mui/material/Button'

const Button = ({ style, onClick, children, className, form, type, key, htmlFor, variant, color, size }) => {

  return (
    <MuiButton
      style={style}
      onClick={onClick}
      className={className}
      form={form}
      type={type}
      key={key}
      htmlFor={htmlFor}
      variant={variant ? variant : 'contained'}
      color={color ? color : 'primary'}
      size={size ? size : 'medium'}
    >
      {children}
    </MuiButton>
  )
}

export default Button