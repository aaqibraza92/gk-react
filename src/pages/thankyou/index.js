import React from 'react'

const Thankyou = () => {
  return (
    <div className='thankyouPage  text-center d-flex align-items-center justify-content-center position-relative'   style={{ backgroundImage: `url(${require("../../assets/img/thankyou.jpg")})` }}>
      <h2 className='fs50 thankH'>
      Thank You for your request.
      </h2>
     
    </div>
  )
}

export default Thankyou