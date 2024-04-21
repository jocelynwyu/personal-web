import React from 'react';
import '../../App';
import { Button } from '../Button';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id='Home'>

    <div className='everything-container'>
      <div className='intro'>
        <div className='home-text'>
          <div className='name'>
            <p>Hi, I'm Jocelyn!</p>
          </div>
          <div className='blurb'>
            <p>I like building useful things.</p>
          </div>
          <div className='about'>
            <p><br/> I'm studying computer science at UC Berkeley.</p>
            <p> <br/>At Berkeley, I'm currently the Director of Technology for BearMUN, an
            annual conference hosted by UC Berkeley Model United Nations. </p>
            <p> <br/> I've previously interned as a software
            engineer at GymBuddy, a startup aiming to reduce gym anxiety, and am an
            incoming software development engineer intern at Amazon.
            </p>
          </div>
        </div>
        <div className='home-image'>
          <img src={require('../images/butterfly.png')} alt='art' />
        </div>
      </div>
      <div className='home-text'>
          <div className='about'>
            <p><br/> You can contact me at jocelynyu@berkeley.edu!</p>
            <p> <br/>You can also check out my GitHub and LinkedIn. </p>
            <p> <br/> I've previously interned as a software
            engineer at GymBuddy, a startup aiming to reduce gym anxiety, and am an
            incoming software development engineer intern at Amazon.
            </p>
          </div>
        </div>
        {/* <div className='title'>
            <p><br/>Experience</p>
          </div>
          <div className='experience'>
          <div className='title-and-company'>
            <p>Software Development Engineering Intern @ Amazon</p>
          </div>
          <div className='time'>
            <p>May 2024 — Present</p>
        </div>
        <ul className='description'>
        <li>what i did</li>
         </ul>
         
        </div>
        <div className='experience'>
          <div className='title-and-company'>
            <p>Director of Technology — BearMUN @ UC Berkeley Model United Nations</p>
          </div>
          <div className='time'>
            <p>January 2024 — Present</p>
        </div>
        <ul className='description'>
        <li>what i did</li>
         </ul>
         
        </div><div className='experience'>
          <div className='title-and-company'>
            <p>Software Engineering Intern @ GymBuddy</p>
          </div>
          <div className='time'>
            <p>August 2023 — May 2024</p>
        </div>
        <ul className='description'>
        <li>what i did</li>
         </ul>
         <div className='experience'>
          <div className='title-and-company'>
            <p> Business Analyst @ Business Careers in Entertainment Club</p>
          </div>
          <div className='time'>
            <p>January 2023 — May 2023</p>
        </div>
        <ul className='description'>
        <li>what i did</li>
         </ul>
         
        </div>
         
        </div>

        <div className='title'>
            <p><br/>Projects and Leadership</p>
          </div>
          <div className='experience'>
          <div className='title-and-company'>
            <p>UI/UX Intern @ CHOMP</p>
          </div>
          <div className='time'>
            <p>May 2023 — August 2023</p>
        </div>
        <ul className='description'>
        <li>what i did</li>
         </ul>
         
        </div>
        <div className='experience'>
          <div className='title-and-company'>
            <p>Blue Residential Assistant @ Berkeley Residential Life</p>
          </div>
          <div className='time'>
            <p>August 2023 — Present</p>
        </div>
        <ul className='description'>
        <li>what i did</li>
         </ul>
        
         
        </div>


        <div className='title'>
            <p><br/>Education</p>
          </div>
          <div className='experience'>
          <div className='title-and-company'>
            <p>University of California, Berkeley</p>
          </div>
          <div className='major'>
            <p>B.S. Computer Science, History Minor</p>
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
            <p>Directed Group Studies for Advanced Undergraduates: Introduction to Building Apps</p>
          </div>
          <div className='school'>
          <p>Activities</p>
          <div className='coursework-box'>
            <p>NextGen Consulting</p>
          </div>
          <div className='coursework-box'>
            <p>Business Careers in Entertainment Club</p>
          </div>
          <div className='coursework-box'>
            <p>UC Berkeley Model United Nations</p>
          </div>
          </div>
          </div>
        </div>
        <div className='experience'>
          <div className='title-and-company'>
            <p>Lowell High School</p>
          </div>
          <div className='major'>
            <p>GPA: 4.30 | SAT: 1460 | Dean's Honor Roll | AP Scholar With Distinction</p>
        </div>
          <div className='time'>
            <p>June 2022</p>
        </div>
        <div className='school'>
          <p>Activities</p>
          <div className='coursework-box'>
            <p>Varsity Model United Nations</p>
          </div>
          <div className='coursework-box'>
            <p>Varsity Parlimentary Debate</p>
          </div>
          <div className='coursework-box'>
            <p>CSF Tutoring</p>
          </div>
          <p><br/>Awards</p>
          <div className='club'>
            <p>
              Model United Nations
            </p>
          <div className='coursework-box'>
            <p>Best Position Paper from Stanford University, 2020</p>
          </div>
          <div className='coursework-box'>
            <p>Honorable Commendation from UC Berkeley, 2021 & 2022</p>
          </div>
          <div className='coursework-box'>
            <p>Honorable Commendation from Sequoia High, 2022</p>
          </div>
          <div className='coursework-box'>
            <p>Best Delegate from South Bay, 2022</p>
          </div>
        </div>
        <div className='club'>
            <p>
              Parliamentary Debate
            </p>
          <div className='coursework-box'>
            <p>Winning Record, 2020</p>
          </div>
          <div className='coursework-box'>
            <p>Winning Record, 2021</p>
          </div>
          <div className='coursework-box'>
            <p>Undefeated, 2021</p>
          </div>
        </div>
        </div>
        
         
        </div> */}
    </div>
    </section>
  );
}

export default Home;
