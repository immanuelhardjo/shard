import React from 'react';
import './about.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const index = () => {
    return (
        <div>
            <div className = 'about-description'>
                I am an aspiring innovator. Currently looking for work in IT Consulting and Management Consulting.
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date="Sept'20 - Mar'21"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Project Manager/IoT Application Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">CAD-IT Consultants</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct'20"
                    contentStyle={{ background: 'black', color: 'black' }}
                    iconStyle={{ background: 'black', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Bandung</h4>
                    <p>
                    Majoring in electrical engineering.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    contentStyle={{ background: 'black', color: 'black' }}
                    iconStyle={{ background: 'black', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Product Analyst Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ruangguru</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    contentStyle={{ background: 'black', color: 'black' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Quality Control Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ruangguru</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    contentStyle={{ background: 'black', color: 'black' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                    Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    contentStyle={{ background: 'black', color: 'black' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    contentStyle={{ background: 'black', color: 'black' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default index
