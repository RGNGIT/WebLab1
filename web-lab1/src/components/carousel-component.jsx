import CarouselNextButton from "./carousel-next-button";
import CarouselPrevButton from "./carousel-prev-button";

export default function Carousel(props) {
  return <div className="carousel-container">
    <div className="carousel"></div>
    <CarouselNextButton icon=">"/>
    <CarouselPrevButton icon="<"/>
  </div>
}