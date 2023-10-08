import React from 'react'
import cls from './style.module.scss'
const BlackBurtton = ({children}) => {
  return (
    <button className={cls.blackBurtton}>{children}</button>
  )
}

export default BlackBurtton
