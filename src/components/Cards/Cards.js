import React, { Component } from "react";
import CardsUi from "./CardsUi";
import img1 from '../assests/287677588_561545558716720_962843881644276446_n.jpg'
import img2 from '../assests/photo_2022-08-09_19-54-13.jpg'
import img3 from  '../assests/the hacker image.jpeg'

class Cards extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-4">
                <CardsUi imgsrc = {img1} title = "World Taekwondo"/>
                </div>
                <div className="col-md-4">
                <CardsUi imgsrc = {img2} title = "Hard Working Principle"/>
                </div>
                <div className="col-md-4">
                    <CardsUi imgsrc = {img3} title = "Hacking Learning Tutorials"/>
                </div>
                
            </div>
        );
    }
}
 
export default Cards;