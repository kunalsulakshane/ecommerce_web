import React from "react";
import "./shoes.css";
import img1 from '../assets/nike 1.1.webp';
import img2 from '../assets/nike 2.1.webp';
import img3 from '../assets/nike 3.1.webp';
import img4 from '../assets/nike 4.1.webp';

const Shoes = () => {

    return (
        <div className="shoes">
            <h1 className="name" >shoes</h1>
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

export default Shoes

    