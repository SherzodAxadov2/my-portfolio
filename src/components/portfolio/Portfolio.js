import React, { useContext, useEffect } from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/icons/Rectangle 39.png'
import Portfolio2 from '../../assets/icons/Rectangle 45.png'
import Portfolio3 from '../../assets/icons/Rectangle 48.png'
import {BiTimeFive} from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { TitleContext } from '../../App'



const Portfolio = () => {

    const setTitleShow = useContext(TitleContext)

    useEffect(() => {
        setTitleShow(true)
    })

    return (
        <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card border-0">
                            <img src={Portfolio1}  alt="..." />
                            <div className='color'></div>
                            <div className="card-body">
                               <div className='card-title'>
                                <span className='text' style={{fontSize: '12px',background: 'none', color:'#FDFDFD' }}>Portfolio</span>
                                <span style={{background: 'none', color:'#FDFDFD',  paddingLeft: '120px',opacity: '0.6',}}>
                                    <BiTimeFive style={{background: 'none'}}/>18:06 
                                    <AiOutlineCalendar style={{background: 'none'}}/>
                                    12.04.2022</span>  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card border-0">
                            <img src={Portfolio2}  alt="..." />
                            <div className='color'></div>
                            <div className="card-body">
                               <div className='card-title'>
                                <span className='text' style={{fontSize: '12px',background: 'none', color:'#FDFDFD' }}>Portfolio</span>
                                <span style={{background: 'none', color:'#FDFDFD',  paddingLeft: '120px',opacity: '0.6',}}>
                                    <BiTimeFive style={{background: 'none'}}/> 18:06 
                                    <AiOutlineCalendar style={{background: 'none'}}/>
                                     12.04.2022</span>  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card border-0">
                            <img src={Portfolio3}  alt="..." />
                            <div className='color'></div>
                            <div className="card-body">
                               <div className='card-title'>
                                <span className='text' style={{fontSize: '12px',background: 'none', color:'#FDFDFD' }}>Portfolio</span>
                                <span style={{background: 'none', color:'#FDFDFD',  paddingLeft: '120px',opacity: '0.6',}}>
                                    <BiTimeFive style={{background: 'none'}}/>18:06 
                                    <AiOutlineCalendar style={{background: 'none'}}/>
                                    12.04.2022</span>  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card border-0">
                            <img src={Portfolio1}  alt="..." />
                            <div className='color'></div>
                            <div className="card-body">
                               <div className='card-title'>
                                <span className='text' style={{fontSize: '12px',background: 'none', color:'#FDFDFD' }}>Portfolio</span>
                                <span style={{background: 'none', color:'#FDFDFD',  paddingLeft: '120px',opacity: '0.6',}}>
                                    <BiTimeFive style={{background: 'none'}}/>18:06 
                                    <AiOutlineCalendar style={{background: 'none'}}/>
                                    12.04.2022</span>  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card border-0">
                            <img src={Portfolio2}  alt="..." />
                            <div className='color'></div>
                            <div className="card-body">
                               <div className='card-title'>
                                <span className='text' style={{fontSize: '12px',background: 'none', color:'#FDFDFD' }}>Portfolio</span>
                                <span style={{background: 'none', color:'#FDFDFD',  paddingLeft: '120px',opacity: '0.6',}}>
                                    <BiTimeFive style={{background: 'none'}}/> 18:06 
                                    <AiOutlineCalendar style={{background: 'none'}}/>
                                     12.04.2022</span>  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card border-0">
                            <img src={Portfolio3}  alt="..." />
                            <div className='color'></div>
                            <div className="card-body">
                               <div className='card-title'>
                                <span className='text' style={{fontSize: '12px',background: 'none', color:'#FDFDFD' }}>Portfolio</span>
                                <span style={{background: 'none', color:'#FDFDFD',  paddingLeft: '120px',opacity: '0.6',}}>
                                    <BiTimeFive style={{background: 'none'}}/>18:06 
                                    <AiOutlineCalendar style={{background: 'none'}}/>
                                    12.04.2022</span>  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
    )
}

export default Portfolio
