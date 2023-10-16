import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const AboutUs = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg={6} md={6} xl={6}>
                        <p>
                            about us
                        </p>
                        <h4>
                            Exclusive communities
                        </h4>
                        <h3>
                            For Holistic
                        </h3>
                        <h2>
                            Livings
                        </h2>
                        <p>

                        </p>
                    </Col>
                    <Col lg={6} md={6} xl={6}>
                        {/* <img src={require('../../assets/img/home/')} className='img-fluid' alt="" /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs