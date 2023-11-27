import React, { useRef, useState } from 'react'
import { Carousel } from "react-scroll-slider";
import { ActiveItem } from "react-scroll-slider";
import { Container } from 'reactstrap';

const ScrollComp = () => {


    return (
        <section>
            <Container fluid>
                <Carousel>
                    <ActiveItem>
                        <div className='h-100 w-100'>
                            <img src="https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className='w-100' alt="" />
                        </div>
                   
                    </ActiveItem>

                    <ActiveItem>
                        <div className='h-100 w-100'>
                            <img src="https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80" className='w-100' alt="" />
                        </div>
                   
                    </ActiveItem>

                    <ActiveItem>
                        <div className='h-100 w-100'>
                            <img src="https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className='w-100' alt="" />
                        </div>
                   
                    </ActiveItem>


              
                </Carousel>
            </Container>
        </section>

    )
}

export default ScrollComp