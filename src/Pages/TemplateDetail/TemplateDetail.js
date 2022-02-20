import React, { Component } from 'react'
import './TemplateDetail.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Dialog } from "@material-ui/core";
import Slider from "react-slick";
import images from './images.js'

class TemplateDetail extends Component {

    render() {
        const { open, onClose } = this.props
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazeLoad: true,
            pauseOnFocus: false,
            arrows: true,
        }
        return (
            <Dialog open={open} onClose={onClose} fullWidth={false} maxWidth={false} >
                <div className='template-detail-container'>
                    <div className='close'><div className='close-button'>
                        <img src='images/dialogClose.svg' alt='close' onClick={onClose} />
                    </div></div>
                    <div className='template-detail-area'>
                        <div className='template-detail'>
                            <Slider {...settings}>
                                {images.map((item) => (
                                    <div key={item.id}>
                                        <img src={item.src} alt={item.alt} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className='template-use'>
                        <div className='template-use-button'>사용하기</div>
                    </div>
                </div>
            </Dialog>
        )
    }
}


export default TemplateDetail