import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './GalleryCarousel.css';

function Cards() {
  return (
    <div className='cards'>
      <br/>
            <ul className='cards_items'>            
            <CardItem
            src={require('../images/gymbuddy1.png')}
            src2={require('../images/gymbuddy2.png')}
            src3={require('../images/gymbuddy3.png')}
            src4={require('../images/gymbuddy4.png')}
            src5={require('../images/gymbuddy5.png')}
            src6={require('../images/gymbuddy6.png')}
            titletext= "GYMBUDDY"
            describe="Gymbuddy automatically pairs gym users to help overcome gym axiety.
            I coded the initial website of GymBuddy, when it was focused on university
            students. Users are greeted with interactive buttons, animated numbers, and an
            image carousel."
            //"In which Percy Jackson is thrust into the world of
            //Greek Mythology and learns that the gods and monsters of old still walk the world of men."
            // infotext2= "Destiny may be a beautiful thing, but for Percy, it's a terrifying force to be reckoned with."
            // infotext3= "After all, she wasn't supposed to be born, and a hero's destiny is always tragic."
            links={[{ label: 'GitHub', url: 'https://github.com/jocelynwyu/gymbuddy' }]}

            skills={['React', 'JavaScript', 'HTML', 'CSS', 'Firebase']}
            />
            {/* <CardItem
              src={require('./images/gymbuddy1.png')}
              titletext= "SECRETS"
              au= "NUMBER 8 AU!"
              quote="❝ IT WAS IN THAT MOMENT THAT PERCY REALIZED SHE WAS HOPELESSLY IN LOVE WITH FIVE HARGREEVES. ❞"
              infotext1="In which Percy Hargreeves returns to her childhood home for her father's memorial, but finds more than what she bargained for."
              infotext2= "An impending apocalypse, a race against time, her conflicting feelings for a certain time-traveller, and secrets."
              infotext3= "So many secrets."
              infotext4="What could go wrong?"
              infotext5="Well... everything."
              endgame = "[Five Hargreeves x fem!oc]"
            /> */}
          
          <br></br>
          {/* <div>
          <CardItem
              src={require('./images/gymbuddy1.png')}
              titletext= "FALLING"
              au= "REINCARCATION AU!"
              quote="❝ AIRERAUMONIS FOUND THAT SHE LOVED IT WHEN GLORFINDEL SMILED. ❞"
              infotext1="In which two elves once of Gondolin and now of Rivendell find themselves a part of a Fellowship that will determine the fate of Middle-Earth."
              infotext2= "Time is ticking, Sauron is rising, war is coming, and... Gondor is falling."
              infotext3= "The war has begun."
              infotext4="And may the best side win."
              endgame = "[Glorfindel x fem!oc]">
                
              </CardItem>
           
          </div> */}
          </ul>
          {/* <h1><br/><br/>Coming Soon...</h1>
            <ul className='cards__items'>
            <div className='rows'>
            <CardItem
              src={require('./images/justice.png')}
              titletext= "JUSTICE"
              au= "JON'S TWIN AU!"
            //   quote="❝ YOU'RE NOT GETTING AWAY FROM ME. NEVER AGAIN. ❞"
              infotext1="In which Rosaline Snow and Jaime Lannister decide that if the world is going to be cruel anyway, they might as well have fun."
              infotext2= "There is no justice in the game of thrones."
              infotext3= "When you play it, you win or you die."
              endgame = "[Jaime Lannister x fem!oc]"
            />
            <CardItem
              src={require('./images/angelic.png')}
              titletext= "ANGELIC"
              au= "TIME-TRAVELING AU!"
            //   quote="❝ IT WAS IN THAT MOMENT THAT PERCY REALIZED SHE WAS HOPELESSLY IN LOVE WITH FIVE HARGREEVES. ❞"
              infotext1="In which Helena Morgenstern, not-quite last of her name anymore, plays with fire and discovers that even angels can be burned."
              infotext2= "Her father's experiments have left her the most powerful shadowhunter in the nineteenth-century. Too bad she's got memory gaps from this era.​"
              infotext3= "But perhaps there's more to her than she thought."
              infotext4="After all, she's too angelic, even for a shadowhunter."
              endgame = "[Will Herondale x fem!oc]"
            />
          </div>          
          </ul>
          <br/>
          <br/> */}
          
    </div>
    
    
  );
}

export default Cards;