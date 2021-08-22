import React from 'react'
import './home.css';
import logo from '../assets/img/logo.svg';
import self_img from '../assets/img/dumbo.JPG';
import Particles from 'react-particles-js';
// import { Route } from 'react-router';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool,MdStar} from "react-icons/md";


const index = () => {
    return (
        <div className ='container'>
            <div className='background-container'>
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
            
            <div className = 'head-container'>              
                <img id = 'head-logo' src={logo} alt="Logo"/>
                <div id = 'head-description'>
                    Hi there, I'm Hardjo!<br/>
                    “ Offering creative IT solutions to solve business problems is what I do best. ”
                    {/* <Route render={({ history}) => (
                        <button className = 'cta-button' onClick={() => { history.push('/shard/about') }}>
                            Get to know me!
                        </button>
                    )} /> */}
                </div>
            </div>
            
            <div className = 'story-container'>
                <img id = 'story-img' src={self_img} alt="Story-img"/>
                <div id = 'story-description'>
                    As an aspiring inovator, I love embracing the technicalities and make it happens. I strive to create impactful experiences, and to design realistically by being comfortable with complex constraints.
                    I am always excited to meet new faces and hear new stories, so please don’t hesitate to reach out.
                </div>      
            </div>
            <hr/>

            <div className ='timeline-container'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        id="vertical-timeline-element"
                        date="Sept'20 - Mar'21"
                        contentStyle={{ background: 'white'}}
                        iconStyle={{ background: 'black'}}
                        icon={<MdWork/>}
                    >
                        <div id='timeline-element-content'>
                            <h3 className="vertical-timeline-element-title">Project Manager | IoT Application Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">CAD-IT Consultants</h4>
                            <p>
                                <ul>
                                    <li>Managed a digital transformation project in steel manufactacturing industry for multinational client</li>
                                    <li>Implemented IoT connectivity for monitoring of machinery data from PLCs and retrofit tapping, integration with Azure cloud infrastructure and end-user ThingWorx application.</li>
                                </ul>                        
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        id="vertical-timeline-element"
                        date="Aug‘16 - Oct'20"
                        contentStyle={{ background: 'white'}}
                        iconStyle={{ background: 'black'}}
                        icon={<MdSchool/>}
                    >
                        <div id='timeline-element-content'>
                            <h3 className="vertical-timeline-element-title">Bachelor of Science</h3>
                            <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Bandung</h4>
                            <p>
                                <ul>
                                    <li>Major: Electrical Engineering</li>
                                    <li>Capstone Design Project: “Nitrogen Deficiency Detection in Lettuce Hydroponic Nutrient Film Technique System”</li>
                                    <li>Organizations and Activities: 
                                        <ul>
                                            <li>Himpunan Mahasiswa Elektro (EE Student Union): Vice Minister of Human Resource Development</li>
                                            <li>Hult Prize 2019: ITB Hult Prize Campus Director</li>
                                            <li>Electrical Engineering Days 2018: Head of Publication and Documentation Department</li>
                                            <li>ITB Student Orchestra: Member of Guitar Section</li>
                                            <li>Laboratory Assistant in ‘Computer System Architecture’</li>
                                            <li>Laboratory Assistant in ‘Programming with C’</li>
                                        </ul>
                                    </li>
                                    <li>Awards: 
                                        <ul>
                                            <li>Ganesha Karsa Awardee 2020</li>
                                            <li>1st Place Winner of Astra TechXPert by PT Astra Honda Motor</li>
                                            <li>1st Place Winner of MMBC Business Case Competition by Mahasiswa Teknik Industri ITB</li>
                                            <li>[Top 10] Finalist of PARADIGM International Business Case Competition by Himpunan Mahasiswa Manajemen UNPAD</li>
                                            <li>[Top 6] Finalist of BIST League Business Case Competition by ASSIST ITB</li>
                                        </ul>
                                    </li>
                                </ul>       
                            </p>    
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        id="vertical-timeline-element"
                        date="May'19 - Aug'19"
                        contentStyle={{ background: 'white'}}
                        iconStyle={{ background: 'black'}}
                        icon={<MdWork/>}
                    >
                        <div id='timeline-element-content'>
                            <h3 className="vertical-timeline-element-title">Product Analyst Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Ruangguru</h4>
                            <p>
                                <ul>
                                    <li>Analyzed, evaluated, and gained insights on product performance through consumer surveys, data mining, and benchmarking. Proposed data-driven product development recommendations and prototypes</li>
                                    <li>Successfully implemented unified consumer surveys across all products in Ruangguru. Designed a new payment model to capture new buyer segments</li>
                                </ul>
                            </p>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        id="vertical-timeline-element"
                        date="Jun'18 - Aug'18"
                        contentStyle={{ background: 'white'}}
                        iconStyle={{ background: 'black'}}
                        icon={<MdWork/>}
                    >
                        <div id='timeline-element-content'>
                            <h3 className="vertical-timeline-element-title">Quality Control Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Ruangguru</h4>
                            <p>
                                <ul>
                                    <li>Oversaw, reported, and evaluated business operation of 2 products from Ruangguru: ruangles and ruanglesonline</li>
                                    <li>Successfully increased efficiency on handling daily business operation by implementing new business pipeline model and automating business report</li>
                                </ul>
                            </p>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: 'black'}}
                        icon={<MdStar/>}
                    />
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default index;
