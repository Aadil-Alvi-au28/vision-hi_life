import React from 'react'
import '../styles/AboutUs.css'
import Vision2 from '../assets/vision2.jpg'

function AboutUs() {
    return (
        <div className="about">

            <div
                className="aboutLeft"
                style={{ backgroundImage: `url(${Vision2})` }}

            ></div>

            <section className="sectionRight">
                <div className="aboutRight">

                    <h3 className='h3About'> ABOUT US</h3>

                    <p>
                        We are Saudi based Cosmetic and Beauty products manufacturing company situated in Riyadh since 2010.
                    </p>
                    <p> We have state of the Art GMP (Good Manufacturing Process) production Unit (approved by SFDA) in AL Kharaj Industrial area (MODON).
                    </p><p>
                        We believe to win Consumers (End Users) trust on our products by Presenting best Quality products at very affordable price.
                    </p><p>
                        We used only best Quality Raw materials from all over the world.
                    </p><p>
                        We always try to mantain very high quality (standards) at very affordable price.
                    </p><p>
                        We have wide range of Products for daily House hold uses. Like Ptrolium Jelly (Skin moisturiser), Hand wash, Hairgel, Hand-Senitizer,etc .

                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
