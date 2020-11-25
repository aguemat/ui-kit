import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from './styled'

const Button = (props) => {
  const { type, themeStyle, className, ...resProps } = props
  return (
    <ButtonStyled
      {...resProps}
      themeStyle={themeStyle || 'default'}
      type={type}
      className={className}
    >
      {props.children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button']),
  themeStyle: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
