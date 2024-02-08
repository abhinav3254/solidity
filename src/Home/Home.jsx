import React from 'react'
import ResumeImage from '../images/resume.svg'
import './Home.scss'

function Home() {
    return (
        <div className='Home'>
            <div className="home-left">
                <img className='home-image-one' src={ResumeImage} alt="" />
            </div>
            <div className="home-right">
                <h2>CAREER-FORGE</h2>
                <p>let us build resume for you!</p>
                <button type="button" class="btn btn-primary">start building</button>
            </div>
        </div>
    )
}

export default Home