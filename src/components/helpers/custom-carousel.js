import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CustomCarousel(props) {

    const { desktopItems, carouselItems, swipeable, draggable, showDots, arrows, infinite, autoPlay, autoPlaySpeedInSec } = props

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: desktopItems,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const renderCarouselItems = (items) => {
        const content = items.map((item, index) => {

            const { oneProduct } = item
            return (
                <div key={index}>
                    {oneProduct}
                </div>
            )
        })
        return content
    }

    return (
        <Carousel
            swipeable={swipeable}
            draggable={draggable}
            showDots={showDots}
            arrows={arrows}
            infinite={infinite}
            autoPlay={autoPlay}
            responsive={responsive}
            autoPlaySpeed={autoPlaySpeedInSec * 1000}
        >
            {renderCarouselItems(carouselItems)}
        </Carousel>

    )
}
export default CustomCarousel;