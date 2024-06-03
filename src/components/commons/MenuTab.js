import React from 'react'

const MenuTab = ({ children, selected, ...props }) => {
  return (
    <button {...props} className={`flex items-center justify-center p-4 text-xl transition-all border-b-4 border-gray-400 hover:bg-blue-100 hover:text-blue-600 ${selected ? "!text-blue-900 !bg-white border-blue-900" : ""}`} >{children}</button>

  )
}

export default MenuTab