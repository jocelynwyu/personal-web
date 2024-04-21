import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    <div className='overall-footer'>
    
      <section class='social-media-footer'>
          <div class='footer-logo'>
           
          </div>
          <div class='social-icons'>
          <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/jxcelynyu/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Linkedin'
          >
              <i className='fab fa-linkedin' />
          </a>
          <a
          class='social-icon-link github'
          href='https://github.com/jocelynwyu'
          target='_blank'
          aria-label='Github'
          >
          <i class='fab fa-github' />
          </a>
          </div>
          <p class='website-rights'> © Jocelyn Yu 2024</p>
      </section>
    </div>
    </div>
  );
}

export default Footer;