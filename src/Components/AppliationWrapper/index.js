import React, { useContext } from 'react'
import {ThemeContext} from './../../Providers/theme/index'

const Index = (props) => {
  const  theme=useContext(ThemeContext)
  return (
    <div>
      <header className='App-header' style={{backgroundColor:theme.background}}>
        {props.children}
      </header>
    </div>
  )
}

export default Index
