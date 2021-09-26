import { Carousel } from "react-bootstrap";

const CarouselView = ({previews}) => {

    return(
        <Carousel className='carousel-container'>
            {
                previews.map((video, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={video.thumbnail.url}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>{video.title}</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default CarouselView;