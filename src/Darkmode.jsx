import React, { useEffect, useState } from 'react'
import './App.css'

const Darkmode = () => {
const [theme, setTheme] = useState('light-theme')
const toggleTheme = () => {
 if ( theme ==='dark-theme'){
  setTheme('light-theme')
 }else {
  setTheme('dark-theme')
 }
}

useEffect(() => {
  document.body.className = theme;
},[theme]);


  return (
    <>
      <header>
        <a 
        href=''
        alt='logo'
        Dark Mode In React
        />
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          
          <div className='container'>
            <div className='hero-sec data'>
              <h1>react dark mode</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Error hic harum dolores autem illum iure minus vero ab repellendus
                  velit. Soluta quas dolores quisquam atque, nemo est iusto 
                  veritatis dignissimos nostrum deleniti accusantium fugit? 
                  Perferendis corrupti dolore magnam delectus placeat! Nihil 
                  neque saepe ipsa sed incidunt praesentium quisquam 
                  reprehenderit ut!
                  </p>
                  <a href="#" className='btn' onClick={() => toggleTheme()}>toggle mode</a>
                  
            </div>
            <div className='hero-sec img'>
              <img src="" 
              alt="" 
              />

            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Darkmode
