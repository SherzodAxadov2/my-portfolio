import React, { useState, useEffect, useContext } from 'react'
import './about.css'
import one from '../../assets/icons/Vector.svg'
import two from '../../assets/icons/Vector2.svg'
import heart from '../../assets/icons/heart.svg'
import three from '../../assets/icons/Vector3.svg'
import ic from '../../assets/icons/ic.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { TitleContext } from '../../App'

const About = () => {

    const setTitleShow = useContext(TitleContext)

    const [Context, SetContext] = useState('Exp')
    let Year = new Date().getFullYear()
    let Month = new Date().getMonth() + 1
    let Day = new Date().getDay()
    const educ = (
        <div className='Exp'>
            <h1>WEB DESIGNER - ENVATO</h1>
            <div>{Year}--{Month}--{Day}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
            </p>
            <hr/>
            <h1>WEB DEVELOPER - GOOGLE</h1>
            <div>{Year}--{Month}--{Day}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
            <hr/>
            <h1>COMMUNITY MANAGER - ADOBE</h1>
            <div>{Year}--{Month}--{Day}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
            <hr/>
        </div>
    )
    const expi = (
        <div className='Edu'>
            <h1>ENGINEERING DIPLOMA - OXFORD UNIVERSITY</h1>
            <div>{Year}--{Month}--{Day}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
            <hr/>
             <h1>MASTERS DEGREE - PARIS UNIVERSITY</h1>
             <div>{Year}--{Month}--{Day}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
            <hr/>
             <h1>BACHELOR DEGREE - BERLIN HIGHER INSTITUTE</h1>
             <div>{Year}--{Month}--{Day}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
            <hr/>
        </div>
    )
    const Skil = (
        <div className='Ski'>
            <div>
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>BOOTSTRAP</h1>
            <h1>JAVASCRIPT</h1>
            <h1>PHP</h1>
            <h1>JQUERY</h1>
            <h1>REACT</h1>
            <h1>ANGULAR</h1>
            <h1>VUE</h1>
            <h1>DRUPAL</h1>
            <h1>WORDPRESS</h1>
            <h1>TILDA</h1>
        </div>
        <div className='Adobe'>
         <h1>ADOBE PHOTOSHOP</h1>
         <h1>ADOBE ILUSTRATOR</h1>

        </div>

        </div>
    )


    const isEdu = Context === 'Edu' ? educ : null
    const isExp = Context === 'Exp' ? expi : null
    const isSki = Context === 'Ski' ? Skil : null

    useEffect(() => {
        setTitleShow(true)
    })

    return (
        <div className='Container'>
            <h1>Personal Info</h1>
            <p>I'm a Freelance Web Designer & Developer based in Moscow, Russia. I have serious passion for UI effects, animations <br />
                and creating intuitive, with over a decade of experience.</p>
            <div className='upper'>

                <div className='upper-left'>
                    <div className='Left-keys'>
                        <h1>First Name:</h1>
                        <h1>Last Name:</h1>
                        <h1>Date of Birth:</h1>
                        <h1>Nationality:</h1>
                        <h1>Freelance:</h1>
                    </div>
                    <div className='left-values'>
                        <h2>Javokhirbek</h2>
                        <h2>Mahmudov</h2>
                        <h2>05 june 2004</h2>
                        <h2>Uzbek</h2>
                        <h2>Avaiable</h2>
                    </div>
                </div>
                <div className='upper-right'>
                    <div className='Right-keys'>
                        <h1>Phone:</h1>
                        <h1>Adress:</h1>
                        <h1>Email:</h1>
                        <h1>Spoken Lang:</h1>
                        <h1>Skype:</h1>
                    </div>
                    <div className='Right-values'>
                        <h2>+998 94 938 03 21</h2>
                        <h2>Uzbekistan,Tashkent</h2>
                        <h2>Java@gmail.com</h2>
                        <h2>Uzbek, Russian, English</h2>
                        <h2>Javokhir.Mahmudov</h2>

                    </div>

                </div>

            </div>
            <div className='Buttons'>
                <button className='buttn'>DOWNLOAD RESUME</button>
                <Link to='/blog'className='b' style={{ borderRadius: '5px' }}>MY BLOG</Link>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />

            <div className='Bottom'>
                <div className='Left-Bottom'>
                    <div className='bttn' onClick={() => SetContext('Edu')}> <img alt='' src={one}></img><h1>EXPERIENCE</h1></div>
                    <div className='bttn' onClick={() => SetContext('Exp')}> <img alt='' src={two}></img><h1>EDUCATION</h1></div>
                    <div className='bttn' onClick={() => SetContext('Ski')}> <img alt='' src={three}></img><h1>SKILLS</h1></div>
                </div>
                <div className='Right-Bottom'>
                    <div className='Nav'></div>
                    <div className='Text-area'>

                        {isEdu}
                        {isExp}
                        {isSki}


                    </div>

                </div>


            </div>
            <hr className='hr' />
            <div className='footer'>
                <div className='bir'>
                    <img src={one} alt=''></img>
                    <div className='o'>
                        <h1>4+</h1>
                        YEARS EXPERIENCE
                    </div>
                </div>
                <div className='ikki' alt=''>
                    <img src={ic} alt=''></img>
                    <div className='o'>

                        <h1>89+</h1>
                        DONE PROJECTS
                    </div>
                </div>
                <div className='uch'>
                    <img src={heart} alt=''></img>
                    <div className='o'>
                        <h1>77+ </h1>
                        HAPPY CLIENTS

                    </div>
                </div>


            </div>
        </div>
    )
}

export default About
