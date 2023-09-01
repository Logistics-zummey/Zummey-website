import React, { useEffect, useRef }from 'react'
import css from './Hero.module.css'
import appStore from '../../../assets/app-store.png'
import googleStore from '../../../assets/google-store.png'
import heroBoth from '../../../assets/hero-both.png'
import payment from '../../../assets/payed.png'
import delivered from '../../../assets/delivered.png'
import star from '../../../assets/hero-star.png'
import service1 from '../../../assets/service1.png'
import service2 from '../../../assets/service2.png'
import service3 from '../../../assets/service3.png'
import trackImg from '../../../assets/track-pic.png'
// import courier1 from '../../../assets/courier1.png'
// import courier2 from '../../../assets/courier2.png'
// import courier3 from '../../../assets/courier3.png'

// This is for font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// These are imports for scroll trigger
import { gsap, Power4} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const heroLeftRef = useRef(null);
    const heroRightRef = useRef(null);
    const clipPathRef = useRef(null);
    const textRef = useRef(null);
  
    useEffect(() => {

        let tl = gsap.timeline({defaults: {ease: Power4.easeInOut, duration:2}})

        tl.fromTo(
            heroLeftRef.current,
            { 'clip-path': 'polygon(0 100%, 99% 100%, 100% 100%, 0% 100%)', opacity: 0, y: 100 },
            { 'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }
        );
    
        // Animations for hero right
        gsap.fromTo(
            heroRightRef.current,
            { opacity: 0, x: 200 },
            { opacity: 1, x: 0, ease: 'power4.inOut', duration: 1.5, delay: 0.5 } // Add a delay of 0.5 seconds
        );

        let mm = gsap.matchMedia();
        mm.add("(min-width: 640px)", () => {
            //This is the animation for main project section
            gsap.to(`.${css.service}`, {y:0, stagger:.2, opacity: 1, duration: .5,
                scrollTrigger:{
                    trigger:`.${css.service}`,
                    start: "top 90%",
                }
            })
        })

        mm.add("(max-width: 639px)", () => {
            const services = gsap.utils.toArray(`.${css.service}`);
            services.forEach(service => {
                gsap.to(service, {
                    y:0,
                    opacity: 1,
                    scrollTrigger:{
                        trigger:service,
                        start:"bottom 90%",
                    }
                })
            })
        })
      }, []);

  return (
    <div className={css.hero_container}>
        <div className={css.hero_pattern}>
            <div className={css.hero_wrapper}>
                <img src={star} alt="" className={css.hero_star} ref={heroLeftRef}/>
                <img src={star} alt="" className={css.hero_star}/>
                <img src={star} alt="" className={css.hero_star}/>
                <div className={`${css.hero_left} `} ref={heroLeftRef}>
                    <h1 style={{lineHeight: 'normal'}} >Bringing the Revolution to <span className={css.logistics_text}>Logistics</span></h1>
                    <p>Our platform connects logistic bike owners with registered clients, enabling seamless and reliable delivery services tailored to your needs.</p>
                    <div className={css.app_download}>
                        <img src={appStore} alt="" />
                        <img src={googleStore} alt="" />
                    </div>
                </div>
                <div className={`${css.hero_right} ${css.animate}`} ref={heroRightRef}>
                    <img src={payment} alt="" className={css.payment}/>
                    <img src={delivered} alt="" className={css.delivered}/>
                    <img src={heroBoth} alt="" className={css.hero_both}/>
                </div>
            </div>
        </div>

        {/* This is for the services section, I added it in the hero section because it is not reusable */}
        <div className={css.services_container}>
            <div className={css.services_wrapper}>
                <div className={css.service}>
                    <img src={service1} alt="" />
                    <div className={css.service_text}>
                        <h4>Real-Time Tracking</h4>
                        <span>With our cutting-edge technology, you can track your delivery in real-time</span>
                    </div>
                </div>
                <div className={css.service}>
                    <img src={service2} alt="" />
                    <div className={css.service_text}>
                        <h4>Real-Time Tracking</h4>
                        <span>With our cutting-edge technology, you can track your delivery in real-time</span>
                    </div>
                </div>
                <div className={css.service}>
                    <img src={service3} alt="" />
                    <div className={css.service_text}>
                        <h4>Real-Time Tracking</h4>
                        <span>With our cutting-edge technology, you can track your delivery in real-time</span>
                    </div>
                </div>
            </div>
        </div>

        {/* This is the section for tracking  */}

        <div className={css.track_container}>
            <div className={css.track_wrapper}>
                <img src={trackImg} alt="" />

                <div className={css.track_text}>
                    <span>Delivery by the hour!</span>
                    <h2><span className={css.track_circle}>Track</span> your delivery progress on the go</h2>
                    <p>Our platform connects logistic bike owners with registered clients, enabling seamless and reliable delivery services tailored to your needs. To ensure that you’re always on top of things, our platform gives you the ability to track your delivery in real-time. Know exactly where your package is, every step of the way. No more guessing or uncertainty. We're putting the power back in your hands, with Zummey, you can track the delivery progress of your package with your phone</p>
                    <button>Download App <FontAwesomeIcon icon={faArrowRight} bounce size="sm" style={{color: "#ffffff",}} /></button>
                </div>
            </div>
        </div>

        {/* <div className={css.courier_container}>
            <div className={css.courier_container}>
                <h1>Our Courier</h1>

                <div className={css.courier_pics}>
                    <img src={courier1} alt="" />
                    <img src={courier2} alt="" />
                    <img src={courier3} alt="" />
                </div>
            </div>
        </div> */}
    </div>
  )                  
}

export default Hero