import React, { Component } from "react";
import "./SliderStyle.css";
import img1 from './images/g-1.jpg'
import img2 from './images/g-2.jpg'
import img3 from './images/g-3.jpg'
import img4 from './images/g-4.jpg'
import img5 from './images/g-5.jpg'


export class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            isAutoSliding: false,
        };

        this.images = [img1, img2, img3, img4,img5];
    };

    nextSlide = () => {
        const { currentIndex } = this.state;
        const newIndex = (currentIndex + 1) % this.images.length;
        this.setState({ currentIndex: newIndex });
    };

    prevSlide = () => {
        const { currentIndex } = this.state;
        const newIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
        this.setState({ currentIndex: newIndex });
    };

    startAutoSlide = () => {
        this.setState({ isAutoSliding: true }, () => {
            this.autoSlideInterval = setInterval(this.nextSlide, 2000);
        });
    };

    stopAutoSlide = () => {
        this.setState({ isAutoSliding: false }, () => {
            clearInterval(this.autoSlideInterval);
        });
    };

    render() {
        const { currentIndex } = this.state;
        return (
            <div className="container">
                <div className="slide-container">
                    <img src={this.images[currentIndex]} alt="slide" className="slide" />
                    <div className="slide-buttons">
                        <button onClick={this.prevSlide}>Previous</button>
                        <button onClick={this.nextSlide}>Next</button>
                        <button onClick={this.startAutoSlide}>Auto Slide</button>
                        <button onClick={this.stopAutoSlide}>Stop</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;
