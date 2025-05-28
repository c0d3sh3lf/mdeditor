import React from 'react'
import './Header.css'

interface HeaderProps {
  title: string
  logoUrl: string
}

const Header: React.FC<HeaderProps> = ({ title, logoUrl }) => {
  return (
    <div className='header'>
      <img src={logoUrl} className='logo' alt='logo' />
      <div className='titleText'>{title}</div>
    </div>
  )
}

export default Header
