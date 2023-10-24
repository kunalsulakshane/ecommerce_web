import React from "react"
import "./homepage.css"




const Homepage = ({ updateUser }) => {
    return (



        <section className="section">

            <nav></nav>
            <h1 className="head"> HELLOOOO DHADI</h1>


            <div className="homepage">

                <h1>Hello Homepage</h1>
                <div className="choice">
                    <button className="btn1"> <a href="shoes"> Shoes</a></button>
                    <button className="btn2"> <a href="menscloths"> Menscloths</a></button>
                    <button className="btn3"> <a href="mobile"> Mobile</a></button>
                </div>
                <div className="button1" ><button> <a href="Mycard"> Mycard</a></button></div>
                <div className="button" onClick={() => updateUser({})} >Logout</div>

            </div>
        </section>

    )
}

export default Homepage