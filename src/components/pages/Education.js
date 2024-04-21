import React from 'react';
import '../../App.css'; // Assuming your CSS file is named 'App.css'
import { Button } from '../Button';
import './Education.css'; // You may need to adjust the path if your CSS file is in a different directory
import { Link } from 'react-router-dom';

function Education() {
  return (
    <section id='Education'>
      <div className='everything-container'>
        <div className='ed-title'>
          <p>Education</p>
        </div>
        <div className='experience'>
          <div className='school-container'>
            <div className='school-image'>
              <img src={require('../images/berkeley.jpg')} alt='art' />
            </div>
            <div className='school-text'>
              <div className='title-and-company'>
                <p>University of California, Berkeley</p>
              </div>
              <div className='major'>
                <p>B.A. Computer Science, History Minor</p>
              </div>
              <div className='time'>
                <p>May 2026</p>
              </div>
              <div className='school'>
                <p>Relevant Coursework</p>
                <div className='coursework-box'>
                  <p>The Foundations of Data Science</p>
                </div>
                <div className='coursework-box'>
                  <p>Principles and Techniques of Data Science</p>
                </div>
          <div className='coursework-box'>
            <p>The Structure and Interpretation of Computer Programs</p>
          </div>
          <div className='coursework-box'>
            <p>Data Structures and Programming Methodology</p>
          </div>
          <div className='coursework-box'>
            <p>Discrete Mathematics and Probability Theory</p>
          </div>
          <div className='coursework-box'>
            <p>CubStart: Introduction to Building Apps</p>
          </div>
          <div className='school'>
          <p>Activities</p>
          <div className='coursework-box'>
            <p>NextGen Consulting</p>
          </div>
          <div className='coursework-box'>
            <p>BCEC</p>
          </div>
          <div className='coursework-box'>
            <p>Berkeley Residential Life</p>
          </div>
          <div className='coursework-box'>
            <p>UC Berkeley Model United Nations</p>
          </div>
          </div>
          </div>
        </div>
        </div>
        </div>
        <br/>
        <br/>
        <div className='experience'>
        <div className='school-container'>
            <div className='school-image'>
              <img src={require('../images/lowell.jpg')} alt='art' />
            </div>
            <div className='school-text'>
          <div className='title-and-company'>
            <p>Lowell High School</p>
          </div>
          <div className='major'>
            <p>GPA: 4.30 | Dean's Honor Roll | AP Scholar With Distinction</p>
        </div>
          <div className='time'>
            <p>June 2022</p>
        </div>
        <div className='school'>
          <p>Activities and Relevant Coursework</p>
          <div className='coursework-box'>
            <p>Varsity Model United Nations</p>
          </div>
          <div className='coursework-box'>
            <p>Varsity Parlimentary Debate</p>
          </div>
          <div className='coursework-box'>
            <p>CSF Tutoring</p>
          </div>
          <div className='coursework-box'>
            <p>AP Computer Science A</p>
          </div>
          <div className='coursework-box'>
            <p>AP Principles of Computer Science</p>
          </div>
          <div className='coursework-box'>
            <p>AP Statistics</p>
          </div>
          
          <p><br/>Awards</p>
          
          <div className='coursework-box'>
            <p>Best Position Paper from Stanford University, 2020</p>
          </div>
          <div className='coursework-box'>
            <p>Honorable Commendation from UC Berkeley, 2021 & 2022</p>
          </div>
          
          <div className='coursework-box'>
            <p>Best Delegate from South Bay, 2022</p>
          </div>
          <div className='coursework-box'>
            <p>Undefeated, 2021</p>
            </div>
            </div>

        </div>
        </div>
        </div>
        <br/>
        <br/>
    </div>
    </section>
  );
}

export default Education;
