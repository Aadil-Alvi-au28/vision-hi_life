import React from 'react'
import '../styles/Home.css'
import { Button, Carousel } from 'react-bootstrap'
import Vision from '../assets/vision.jpg'
import Vs1 from '../assets/vs1.png'
import Vs2 from '../assets/vs2.png'


function Home() {
    return (
        <div>
            <div className='home'>
                <div className='headerContainer'>
                    <Carousel variant='dark'>
                        <Carousel.Item interval={1000}>
                            <center>
                                <img src={Vs1}
                                    alt="First slide" style={{ width: '200px', alignItems: 'center' }}
                                /></center>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <center>
                                <img src={Vs2}
                                    alt="First slide" style={{ width: '200px', alignItems: 'center' }}
                                /></center>
                        </Carousel.Item>
                        <Carousel.Item>
                            <center>
                                <img src={Vs1}
                                    alt="First slide" style={{ width: '200px', alignItems: 'center' }}
                                /></center>
                        </Carousel.Item>
                    </Carousel>

                </div>

            </div>
            <div className='sections'>
                <div className='homeSection2'>
                    <h1> Vision </h1>
                    <h3>Pure Petrolium jelly</h3>
                    <hr />
                    <p>
                        We at Josef Marc believe that the ability to bake authentic high-quality artisan bakery products should be accessible to all. We are therefore committed to providing original
                        European quality products and we invest huge amounts of time and energy making sure their hopes and ambitions can properly be identified and understood required knowledge and understanding to all the passionate home & professional bakers.
                        Now you cannot only bake with ease but also enjoy the European standard product in the comfort of your home.</p>
                </div>
                <div className="homeSection3" >
                    <center>
                        <img src={Vision}
                            alt="Vision" style={{ width: '300px', height: '300px', alignItems: 'center' }}
                        /></center>

                </div>
            </div>

        </div>

    )
}

export default Home
