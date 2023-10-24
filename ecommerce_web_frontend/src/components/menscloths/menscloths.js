import React from "react";
import "./menscloths.css";
import img1 from '../assets/t-shirts1.avif';
import img2 from '../assets/t-shirts2.avif';
import img3 from '../assets/t-shirts3.avif';
import img4 from '../assets/t-shirs4.jpg';

const Menscloths = () => {

    return (
        <div className="shoes">
            <h1 className="name" >shoes</h1>
            <div>

                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src={img1} alt="Cinque Terre" width="600" height="400"></img>
                        
                        </a>
                        <div className="price">999 Rs</div>
                        <div className="button">Add Card</div>
                    </div>
                </div>


                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_forest.jpg">
                            <img src={img2} alt="Forest" width="600" height="400"></img>
                        </a>
                        <div className="price">599 Rs</div>
                        <div className="button">Add Card</div>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_lights.jpg">
                            <img src={img3} alt="Northern Lights" width="600" height="400"></img>
                        </a>
                        <div className="price">1299 Rs</div>
                        <div className="button">Add Card</div>
                    </div>
                </div>

                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                            <img src={img4} alt="Mountains" width="600" height="400"></img>
                        </a>
                        <div className="price"> 800 Rs</div>
                        <div className="button">Add Card</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menscloths

    