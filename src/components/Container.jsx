import React from 'react'

const Container = ( {children , className}) => {
  return (
    <div  className= {`max-w-[80rem] mx-auto  px-5 md:px-15 ${className ||""}`}  >
        {children}
    </div>
  )
}

export default Container