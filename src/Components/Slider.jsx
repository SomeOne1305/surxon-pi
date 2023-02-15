import React from 'react';
import Carousel, { CarouselItem } from './Carousel';
import { slides } from './Images';

export default function Slider() {
    // const slideWid = React.useRef(null)
    // const [width, setWidth] = React.useState(0)
    React.useEffect(() => {
        // setWidth(slideWid.current.offsetWidth)
    }, [])
        // <div className = { style.slider } ref = { slideWid } >
        //     <div className={style.slides} style={{ width: `${width * 4}px` }}>{/*style={{width:`${width * 4}px`}}*/}
        //         <div className={style.slide} style={{ width: `${width}px` }}></div>{/*style={{width:`${width}px`}}*/}
        //         <div className={style.slide} style={{ width: `${width}px` }}></div>
        //         <div className={style.slide} style={{ width: `${width}px` }}></div>
        //         <div className={style.slide} style={{ width: `${width}px` }}></div>
        //     </div>
        // /div>
        // <div className={style.buttons}>
        //     <input type="radio" name="btn" id="" />
        //     <input type="radio" name="btn" id="" />
        //     <input type="radio" name="btn" id="" />
        //     <input type="radio" name="btn" id="" />
        // </div>

    return (
        <Carousel>
        {
            slides.map((item, index) => {
                return (
                    <CarouselItem key={index * 4 + "hello"}>{item.slide}</CarouselItem>
                )
            })
        }
    </Carousel>
    )
}
