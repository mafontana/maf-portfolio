import React, { Component } from 'react';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Resume extends Component {
    render () {
        return (
            <div>
           
            <div>
            <img id="experienceLogo" src={require("./experience.png")}></img>
            <div>
            
            </div>
            <Timeline lineColor={'#E2E1E3'}>
  
          <TimelineItem
            key="002"
            dateText="8/2018 – 2/2019"
            dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h2 style={{ color: 'white' }}>Galvanize Web Development Immersive</h2>
            <h4 style={{ color: 'orange' }}>Galvanize Platte</h4>
            <h5 style={{color: 'grey'}}>Denver, CO</h5>
            <p style={{size: 40}}>Full-time program that covers both front and back-end web development and software engineering skills.

            </p>
          </TimelineItem>

 <TimelineItem
    key="001"
    dateText="3/2016 – present"
    dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
  >
    <h2 style={{ color: '#8ED649' }}>Yoga Instructor</h2>
    <h4>Core Power Yoga</h4>
    <h5 style={{color: 'grey'}}>Denver, CO</h5>
        <p>
        Consistently receive highest ratings on performance evaluations conducted by studio managers. 
        </p>
        <p>
        Promoted 3 times throughout my employment.
        </p>
        <p>
        Currently teach at the highest level of instruction and selected to be a member of the teacher training instructional staff.
        </p>
  </TimelineItem>

  <TimelineItem
  key="001"
  dateText="4/2015 – 4/2012"
  dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
>
  <h2 style={{ color: '#8ED649' }}>Paleontologist</h2>
  <h4>Paleo Solutions, Inc.</h4>
  <h5 style={{color: 'grey'}}>Denver, CO</h5>
      <p>
      Conducted analyses of paleontological data, wrote technical reports, supervised field crews, led field surveys, monitored construction sites, and performed fossil salvages.      </p>
      <p>
      Received highest ratings by company VP on performance review in the categories of teamwork, initiative, reliability, quality of work, and flexibility.
      </p>
      <p>
      <a href="https://eplanning.blm.gov/epl-front-office/projects/lup/39877/66800/72644/Paleontological_Resource_Overview_RGFO_July_2015.pdf" targe="_blank">Co-authored the most comprehensive paleontological overview of the BLM Royal Gorge Field Office.</a>
      </p>
</TimelineItem>
            
  
  <TimelineItem
    key="001"
    dateText="8/2012 – 8/2012"
    dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
  >
    <h2 style={{ color: '#8ED649' }}>Student Research Associate</h2>
    <h4>Smithsonian National Museum of Natural History</h4>
    <h5 style={{color: 'grey'}}>Washington, DC</h5>

        <p>
        Conducted paleontological research on Cretaceous polyglyphanodontian lizards
        alongside NMNH Senior Scientists in the Department of Paleobiology.
        </p>
  </TimelineItem>


  <TimelineItem
    key="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h2 style={{ color: 'white' }}>Master of Science Degree in Evolutionary Biology</h2>
    <h4 style={{ color: '#61b8ff' }}>The George Washington University</h4>
    <h5 style={{color: 'grey'}}>Washington, DC</h5>
  </TimelineItem>


  <TimelineItem
    key="001"
    dateText="8/2012 – 8/2012"
    dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
  >
    <h2 style={{ color: '#8ED649' }}>Graduate Teaching Assistant in Biology</h2>
    <h4>The George Washington University</h4>
    <h5 style={{color: 'grey'}}>Washington, DC</h5>

        <p>
        Designed and conducted laboratory lectures, lesson plans, quizzes, examinations, projects and homework for an introductory undergraduate course in biology. 
        </p>
      <p>
      Supervised four undergraduate assistants who helped with class design, grading, and other tasks.
      </p>
  </TimelineItem>

  <TimelineItem
  key="001"
  dateText="8/2011 – 5/2012"
  dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
>
  <h2 style={{ color: '#8ED649' }}>Math Interventionist</h2>
  <h4>KIPP Spirit Houston Public Schools</h4>
  <h5 style={{color: 'grey'}}>Houston, TX</h5>

      <p>
      Taught math to small classes of struggling elementary and middle school students from underserved communities.
      </p>
</TimelineItem>

<TimelineItem
key="002"
dateText="8/2018 – 2/2019"
dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
bodyContainerStyle={{
  background: '#ddd',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
}}
>
<h2 style={{ color: 'white' }}>Bachelor of Science Degree in Evolutionary Biology</h2>
<h4 style={{ color: 'orange' }}>The University of Texas at Austin</h4>
<h5 style={{color: 'grey'}}>Austin, TX</h5>
</TimelineItem>


</Timeline>
            
            
            </div>
            </div>
        )
    }
}

export default Resume