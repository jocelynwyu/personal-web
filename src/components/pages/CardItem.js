import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function CardItem(props) {
  return (
    <div className='cards__item__inner'>
      <Swiper className="mySwiper" navigation modules={[Navigation]}>
        <SwiperSlide>
          <img className='cards__item__img' src={props.src} alt='Travel Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='cards__item__img' src={props.src2} alt='Travel Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='cards__item__img' src={props.src3} alt='Travel Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='cards__item__img' src={props.src4} alt='Travel Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='cards__item__img' src={props.src5} alt='Travel Image' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='cards__item__img' src={props.src6} alt='Travel Image' />
        </SwiperSlide>
      </Swiper>
      <div className="description__text">
        <br/>
        <h3 className='book__title'>{props.titletext}</h3>
        
        <p className='proj-text'>{props.describe}</p>
        {/* <p className='cards__item__text'>{props.quote}</p>
        <p className='cards__item__text'>{props.infotext1}</p>
        <p className='cards__item__text'>{props.infotext2}</p>
        <p className='cards__item__text'>{props.infotext3}</p>
        <p className='cards__item__text'>{props.infotext4}</p>
        <p className='cards__item__text'>{props.infotext5}</p>
        <p className='cards__item__text'>{props.endgame}</p> */}
        <a
          className='proj-github'
          href={props.links[0].url} // Assuming there's only one link for GitHub
          target='_blank'
          aria-label='Github'
        >
          <i className='fab fa-github' />
        </a>
        <div className='skills-wrap'>
          {props.skills &&
            props.skills.map((skill, index) => (
              <p key={index} className='skills-box'>{skill}</p>
            ))}
        </div>

        {/* GitHub link icon */}
        
      </div>
    </div>
  );
}

export default CardItem;
