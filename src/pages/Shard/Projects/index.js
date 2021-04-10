import React, { Component } from 'react'
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

export class index extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    {/* <img src="assets/1.jpeg" /> */}
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    {/* <img src="assets/2.jpeg" /> */}
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    {/* <img src="assets/3.jpeg" /> */}
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    {/* <img src="assets/4.jpeg" /> */}
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    {/* <img src="assets/5.jpeg" /> */}
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    {/* <img src="assets/6.jpeg" /> */}
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
};

export default index
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));