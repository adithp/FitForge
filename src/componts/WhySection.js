import React from 'react'
import dumbell from '../static/images/crossfit.png'
import users from '../static/images/multiple-users-silhouette.png'
import first from '../static/images/1.jpeg'
import second from '../static/images/2.jpeg'
import third from '../static/images/3.jpeg'
import calender from '../static/images/calendar.png'
function WhySection() {
    return (
        <section className='why'>
            <div className="top">
                <h2>Why Choose FitForge ?</h2>
                <p>
                    FitForge stands out with its commitment to personalized fitness journeys, expert trainers, and a vibrant community. We offer a diverse range of classes and state-of-the-art equipment to cater to all fitness levels and goals.</p>
            </div>
            <div className="boxes">
                <div className="box">
                    {/* <img src="" alt="" /> */}
                    <img style={{ rotate: '180%' }} src={dumbell} alt="Logo" />
                    <h4>Personalized Training</h4>
                    <p>Tailored fitnes plans to meet your individual goals and needs</p>
                </div>
                <div className="box">
                    <img src={users} alt="" />
                    <h4>Expert Trainers</h4>
                    <p>Tailored fitnes plans to meet your individual goals and needs</p>
                </div>
                <div className="box">
                    <img src={calender} alt="" />
                    <h4>Diverse Classes</h4>
                    <p>Tailored fitnes plans to meet your individual goals and needs</p>
                </div>
            </div>

            <section className="trainers">
                <h2>Meet Our Trainer</h2>
                <div className="boxes">
                    <div className="person">
                        <div className="imgCon"><img src={first} alt="" /></div>

                        <h6>Ethan Carter</h6>
                        <p>Certified Strength and Conditioning Specialist</p>
                    </div>
                    <div className="person">
                        <div className="imgCon">
                            <img src={second} alt="" />
                        </div>

                        <h6>Olivia Bennett
                        </h6>
                        <p>Specialist in functional fitness and rehabilitation</p>
                    </div>
                    <div className="person">
                        <div className="imgCon"><img src={third} alt="" /></div>

                        <h6>Noah Thompson
                        </h6>
                        <p>Expert in high-intensity interval training.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default WhySection
