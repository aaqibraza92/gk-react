import React from 'react'

const Testimonial = () => {
    return (
        <section className='testimonial d-flex h-100'>
            <div className='wrapper_what_people w-100 position-absolute'>
                <Container>
                    <Row>
                        <Col lg={3} md={3} xl={3}>
                            <h4 className='colorWhite fs20 fw500'>
                                What <br />
                                Peaople <br />
                                Say
                            </h4>

                        </Col>
                        <Col lg={9} md={9} xl={9}>
                        </Col>
                    </Row>
                </Container>
            </div>

        </section>
    )
}

export default Testimonial