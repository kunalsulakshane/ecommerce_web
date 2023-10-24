import React from "react"
import "./mycard.css"

const Mycard = () => {
    return (
        <div>
            <div className="boxmycard1">
                <h1>My Card</h1>
                <button className="btnc1"> <a href="homepage"> Homepage</a></button>
                <button className="btnc2"> <a href="login"> Logout</a></button>
            </div>
            <div className="boxmycard2">
                product
            </div>
        </div>


    )
}
export default Mycard;