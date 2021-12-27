import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./App.css";
import image1 from './assets/image/index-ban1.jpg'
import image2 from './assets/image/index-ban2.jpg'
import image3 from './assets/image/index-ban3.jpg'
import image4 from './assets/image/index-ban4.jpg'
import image5 from './assets/image/index-ban5.jpg'

function App() {
    var modify, translate, scale, zIndex;
    const onProgress = (swiper) => {
      for(var i=0; i<swiper.slides.length; i++) {
        var slide = swiper.slides[i]
        var slideProgress = swiper.slides[i].progress;
        modify = 1;
        if (Math.abs(slideProgress) > 1) {
          modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
        }
        translate = slideProgress * modify * 350 + 'px';
        scale = 1 - Math.abs(slideProgress) / 5;
        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        slide.style.transform = 'translateX(' + translate + ') scale(' + scale + ')'
        slide.style.zIndex = zIndex
        slide.style.opacity = 1
        if (Math.abs(slideProgress) > 3) {
            slide.style.opacity = 0;
        }
      }
    }

    const onSetTransition = (swiper, transition) => {
      for (var i = 0; i < swiper.slides.length; i++) {
        var slide = swiper.slides[i]
        slide.style.transition = `${transition}ms`;
    }
    }

    return (
      <div id="certify">
        <Swiper
            watchSlidesProgress
            slidesPerView={"auto"}
            onProgress={(swiper) => onProgress(swiper)}
            onSetTransition={(swiper, transition) => onSetTransition(swiper, transition)}
            centeredSlides={true}
            autoplay
            loop
            loopedSlides={5}
        >
            <SwiperSlide style={{backgroundImage: `url(${image1})`}}><a href="live.html">live</a></SwiperSlide>
            <SwiperSlide style={{backgroundImage: `url(${image2})`}}><a href="casino.html">casino</a></SwiperSlide>
            <SwiperSlide style={{backgroundImage: `url(${image3})`}}><a href="sports.html">sports</a></SwiperSlide>
            <SwiperSlide style={{backgroundImage: `url(${image4})`}}><a href="lottery.html">lottery</a></SwiperSlide>
            <SwiperSlide style={{backgroundImage: `url(${image5})`}}><a href="chess.html">chess</a></SwiperSlide>
        </Swiper>
      </div>
        
    );
}

export default App;
