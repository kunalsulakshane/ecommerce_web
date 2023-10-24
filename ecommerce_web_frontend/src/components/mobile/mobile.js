import React from "react";
import "./mobile.css";
import img1 from '../assets/mobile1.webp';
import img2 from '../assets/mobile5.webp';
import img3 from '../assets/mobile3.webp';
import img4 from '../assets/mobile4.webp';

const Mobile = () => {

    return (
        <div className="mobile">
            <h1 className="name" >Mobile</h1>
            <div>

                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src={img1} alt="Cinque Terre" width="600" height="400"></img>
                        
                        </a>
                        <div className="price">7999 Rs</div>
                        <div className="button">Add Card</div>
                    </div>
                </div>


                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_forest.jpg">
                            <img src={img2} alt="Forest" width="600" height="400"></img>
                        </a>
                        <div className="price">5999 Rs</div>
                        <div className="button">Add Card</div>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_lights.jpg">
                            <img src={img3} alt="Northern Lights" width="600" height="400"></img>
                        </a>
                        <div className="price">6000 Rs</div>
                        <div className="button">Add Card</div>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                            <img src={img4} alt="Mountains" width="600" height="400"></img>
                        </a>
                        <div className="price"> 5000 Rs</div>
                        <div className="button">Add Card</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile

    