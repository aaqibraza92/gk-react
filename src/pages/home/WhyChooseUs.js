import React from 'react'
import { Container } from 'reactstrap'

const WhyChooseUs = () => {
  return (
  <section className='pt100 pb100' style={{ backgroundImage: `url(${require('../../assets/img/home/ver_bg.jpg')})` }}>
    <Container>
        <h2 className='colorWhite fs58 fw600 text-center'>
        why choose us?
        </h2>
    </Container>
  </section>
  )
}

export default WhyChooseUs