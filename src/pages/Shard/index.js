import React from 'react'
import './home.css';
import logo from '../../assets/img/logo.svg';
import Particles from 'react-particles-js';
import { Route } from 'react-router';

const index = () => {
    return (
        <div className ='container'>
            <div className='background'>
                <Particles width="100%" height="100vh" params={{
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
                <img className = 'home-logo' src={logo} alt="Logo"/>
                <div className = 'home-description'>
                    <b>Hi there, I'm Hardjo.</b>
                    <br/>I am an Electrical Engineering graduate from Institut Teknologi Bandung (ITB), experienced as IoT Project Manager at CAD-IT Consultants and product analyst at Ruangguru.
                    <br/><b>“ Offering creative IT solutions to solve business problems is what I do best. ”</b>
                    <br/>
                    <Route render={({ history}) => (
                        <button className = 'cta-button' onClick={() => { history.push('/shard/about') }}
                        >
                        Get to know me!
                        </button>
                    )} />
                </div>
            </div>
        </div>
    )
}

export default index
