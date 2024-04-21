import React from 'react';
import '../../App';
import './Experience.css';

function Experience() {
  return (
    <section id='Experience'>
      <div className='everything-container'>
        <div className='ed-title'>
          <p><br/>Experience</p>
        </div>
        <div className='experience'>
          <div className='experience-container'>
            <div className='experience-image'>
              <img src={require('../images/amazon.png')} alt='art' />
            </div>
            <div className='experience-text'>
              <div className='title-and-company'>
                <p>Incoming Software Development Engineering Intern @ Amazon</p>
              </div>
              <div className='time'>
                <p>May 2024 — Present</p>
              </div>
              <div className='time'>
                <p>San Francisco, California</p>
              </div>
              <ul className='experience-description'>
                {/* <li>what i did</li>
                <li>what i did</li>
                <li>what i did</li>
                <li>what i did</li> */}
                <br/>
              </ul>
            </div>
          </div>

          <div className='experience-container'>
            <div className='experience-image'>
              <img src={require('../images/ucbmun.png')} alt='art' />
            </div>
            <div className='experience-text'>
              <div className='title-and-company'>
                <p>Director of Technology — BearMUN @ UC Berkeley Model United Nations</p>
              </div>
              <div className='time'>
                <p>February 2024 — Present</p>
              </div>
              <ul className='experience-description'>
                {/* <li>what i did</li>
                <li>what i did</li>
                <li>what i did</li>
                <li>what i did</li> */}
                <br/>
              </ul>
            </div>
          </div>

          <div className='experience-container'>
            <div className='experience-image'>
              <img src={require('../images/gymbuddy.png')} alt='art' />
            </div>
            <div className='experience-text'>
              <div className='title-and-company'>
                <p>Software Engineering Intern @ GymBuddy</p>
              </div>
              <div className='time'>
                <p>August 2023 — May 2024</p>
              </div>
              <ul className='experience-description'>
              <li>Improved project delivery times by 60%+ by closely collaboration with designers and Founders.</li>
                <li>Reduced website load time by 30% and created visually appealing, dynamic web pages.</li>
                <li>Modernized the website with new technologies, resulting in a 40% improvement in website technology.</li>
                <li>Enhanced site responsiveness with a 25% reduction in page load times, increasing user satisfaction.</li>
                <br/>
              </ul>
            </div>
          </div>

          <div className='experience-container'>
            <div className='experience-image'>
              <img src={require('../images/bcec.png')} alt='art' />
            </div>
            <div className='experience-text'>
              <div className='title-and-company'>
                <p> Business Analyst @ Business Careers in Entertainment Club — Adobe</p>
              </div>
              <div className='time'>
                <p>January 2023 — May 2023</p>
              </div>
              <ul className='experience-description'>
                <li>Collaborated with 8 analysts to market Adobe’s LinkedIn badges to UC Berkeley students and faculty.
</li>
                <li>Created 2 surveys with 200+ responses on students’ interest and previous experiences with Adobe CC.
</li>
                <li>Marketed to 100+ students on campus using incentives and creating Adobe course accounts.
</li>
                <li>Designed and presented 4 slides with 10+ pages of research increasing awareness of Adobe’s courses.
</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
