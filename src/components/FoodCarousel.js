import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FoodCarousel = ({ carousel }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mx-36">
      <h1 className="font-bold text-2xl my-4">Best Offers for you</h1>
      <ul>
        <Carousel responsive={responsive}>
          {carousel.info.map((item) => (
            <li key={item.id}>
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" +
                  item.imageId
                }
                alt="header-scroll"
                width="320"
                height="300"
              />
            </li>
          ))}
        </Carousel>
      </ul>
    </div>
  );
};

export default FoodCarousel;
