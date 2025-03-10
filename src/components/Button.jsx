import React from 'react'

function Button({containerClass, title, leftIcon, rightIcon}) {
  return (
    <button className={`flex items-center w-fit text-black font-general cursor-pointer ${containerClass}`}>
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  )
}

export default Button