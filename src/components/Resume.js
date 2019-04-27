import React, { Component } from 'react';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Resume extends Component {
    render () {
        return (
            <div>
            
            <Timeline lineColor={'#E2E1E3'}>
  
  

 <TimelineItem
    key="001"
    dateText="8/2012 – 8/2012"
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
    dateText="8/2012 – 8/2012"
    dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
  >
    <h2 style={{ color: '#8ED649' }}>Student Research Associate</h2>
    <h4>Smithsonian National Museum of Natural History</h4>
        <p>
        Conducted paleontological research on Cretaceous polyglyphanodontian lizards
        alongside NMNH Senior Scientists in the Department of Paleobiology.
        </p>
  </TimelineItem>

    <TimelineItem
    key="001"
    dateText="8/2012 – 8/2012"
    dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
    >
    <h2 style={{ color: '#8ED649' }}>Master of Science Degree in Evolutionary Biology</h2>
    <h4>The George Washginton University</h4>

    </TimelineItem>


    <TimelineItem
    key="001"
    dateText="8/2012 – 8/2012"
    dateInnerStyle={{ background: '#F0DB5B', color: '#000' }}
    >
    <h2 style={{ color: '#8ED649' }}>Master of Science Degree in Evolutionary Biology</h2>
    <h4>The George Washginton University</h4>
        <p>
        Conducted paleontological research on Cretaceous polyglyphanodontian lizards
        alongside NMNH Senior Scientists in the Department of Paleobiology.
        </p>
    <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
    </p>
    <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
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
  </TimelineItem>


  <TimelineItem
    key="003"
    dateComponent={(
      <div
        style={{
          display: 'block',
          float: 'left',
          padding: '10px',
          background: 'rgb(150, 150, 150)',
          color: '#fff',
        }}
      >
        11/2008 – 04/2009
      </div>
    )}
  >
    <h2>Title, Company</h2>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="08/2008 – 11/2008"
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h2>Title, Company</h2>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
</Timeline>
            
            
            </div>
        )
    }
}

export default Resume