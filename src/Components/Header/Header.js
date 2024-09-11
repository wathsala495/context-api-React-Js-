import React from 'react'
import { ThemeContext } from '../../Providers/theme'

export default function Header() {
  const theme=React.useContext(ThemeContext)
  return (
    <div>
         <h1 style={{color:theme.foreground}}>hello</h1>
    </div>
  )
}
