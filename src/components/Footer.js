import React, { Component } from 'react'

class Footer extends Component { 
    render() {
      return (
        <div className="footer"> 
            <h1>Say hi!</h1>
            <h2>Want to work together or simply connect? Shoot me an e-mail.</h2>
            <div className="footerIcons">
                <a href="mailto: meredith.fontana@gmail.com" target="_blank"><div className="icon"><i className="fa fa-envelope fa-5x"></i></div></a>
                <a href="https://github.com/mafontana" target="_blank"><div className="icon"><i className="fa fa-github fa-5x"></i></div></a>
                <a href="https://www.linkedin.com/in/meredithafontana" target="_blank"><div className="icon"><i className="fa fa-linkedin fa-5x"></i></div></a>
                <a href="https://www.linkedin.com/in/meredithafontana" target="_blank"><div className="icon"><i className="fa fa-instagram fa-5x"></i></div></a>
            </div>
            <div>
                Made from scratch in React.
            </div>
        </div>
      )
    }
  }
  
  export default Footer
        