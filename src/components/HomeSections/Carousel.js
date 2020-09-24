import React from 'react'
import '../../styles/Carousel.css'
import $ from 'jquery'
import './CarouselJQuery'


export default function Carousel() {

    $('#cascade-slider').cascadeSlider({
        itemclass: 'cascade-slider_item',
        arrowclass: 'cascade-slider_arrow'
      });

    return (
        <div className="cascade-slider_container" id="cascade-slider">
            <div className="cascade-slider_slides">
                <div className="cascade-slider_item">
                    <h3>Cat 1</h3>
                    <img src="http://cat-wallpaper.ambientcat.com/wallpapers-720-720/Maine-Coon-Silver-kitten-Fabulous-breeds-of-cats-with-big-paws-177.jpg" alt=""></img>
                </div>
                <div className="cascade-slider_item">
                    <h3>Cat 2</h3>
                    <img src="http://cat-background.ambientcat.com/Backgrounds-720-720/Understanding-Feline-Language-Tricolor-kitten-81.jpg" alt=""></img>
                </div>
                <div className="cascade-slider_item">
                    <h3>Cat 3</h3>
                    <img src="https://s-media-cache-ak0.pinimg.com/736x/43/e9/4f/43e94f99ba26cef2bd8d4596049a7e9f.jpg" alt=""></img>
                </div>
                <div className="cascade-slider_item">
                    <h3>Cat 4</h3>
                    <img src="http://cat-wallpaper.ambientcat.com/wallpapers-720-720/Maine-Coon-Silver-kitten-Fabulous-breeds-of-cats-with-big-paws-177.jpg" alt=""></img>
                </div>
                <div className="cascade-slider_item">
                    <h3>Cat 5</h3>
                    <img src="http://r.ddmcdn.com/s_f/o_1/cx_653/cy_429/cw_1296/ch_1296/w_720/APL/uploads/2012/05/cat-toy-article.jpg" alt=""></img>
                </div>
                
            </div>

            <ol className="cascade-slider_nav">
                <li className="cascade-slider_dot cur"></li>
                <li className="cascade-slider_dot"></li>
                <li className="cascade-slider_dot"></li>
                <li className="cascade-slider_dot"></li>
                <li className="cascade-slider_dot"></li>
                <li className="cascade-slider_dot"></li>
            </ol>

            <span className="cascade-slider_arrow cascade-slider_arrow-left" data-action="prev">Prev</span>
            <span className="cascade-slider_arrow cascade-slider_arrow-right" data-action="next">Next</span>
        </div>
    )
}