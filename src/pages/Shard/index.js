import React from 'react'
import './home.css';
import logo from '../../assets/img/logo.svg';
import Particles from 'react-particles-js';

const index = () => {
    return (
        <div className ='container'>
            <div className='background'>
                <Particles height="100%" width="100%" params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}/>
            </div>
            <div className = 'home-container'>                
                <div className = 'home-logo'>
                    <img src={logo} alt="Logo" height="87" width="100"/>
                    <div className = 'home-logo-text'>Shard</div>
                </div>

                <div className = 'home-description'>
                    <b>Hi there, I'm Hardjo.</b>
                    <br/>I am an Electrical Engineering graduate from Institut Teknologi Bandung (ITB), experienced as ex-IoT Project Manager at CAD-IT Consultants and ex-product analyst at Ruangguru.
                    <br/><b>“ Offering creative IT solutions to solve business problems is what I do best. ”</b>
                    <br/><button className = 'cta-button'>Get to know me!</button>
                </div>
            </div>
        </div>
    )
}

export default index
