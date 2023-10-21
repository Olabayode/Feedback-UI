import React from 'react'

function Header({ text }) {
  const headerStyle={
    backgroundColor: 'blueviolet',
    color: 'gold'
  }

  return (
    <header style={headerStyle}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

export default Header