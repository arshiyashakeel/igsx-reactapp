import React from 'react'
import background from '../components/background.jpg'

function Background() {
  return (
    <div className='containerbackground'>
        <img src={background} alt="background" />
        <div className='hero-parent'>
        <div className='hero'>
            <div className='hero-left'>
                <h1>IGSX</h1>
                <h4>Hollywood Stock Exchange</h4>
                <p>IPO of the day: Doctor Strange in the Multiverse of Madness</p>
            </div>
            <div className='hero-right'>
                <button >TRADE NOW</button>
                 <ul>
                    <li>10.20H$</li>
                    <li className='bg-li'><img src='../components/icon.png'/>10.23 (%10.23)</li>
                    
                 </ul>
            </div>
        </div>
        </div>       
    </div>
  )
}

export default Background

