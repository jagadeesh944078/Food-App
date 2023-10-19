import Carousel from "react-multi-carousel";
import RestaurantCard, { withPrmotedLabel } from "./RestaurantCard";
// import "react-multi-carousel/lib/styles.css";

const RestaurantCarousel = ({ restaurantCarousel }) => {
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

  const RestaurantCardPromoted = withPrmotedLabel(RestaurantCard);

  return (
    <div className="mx-36 font-bold my-6">
      <h1 className="font-bold my-6 text-xl">
        Top Restaurant chains in Bangalore
      </h1>
      <Carousel responsive={responsive}>
        {restaurantCarousel.map((item) => (
          <div key={item.id}>
            <RestaurantCardPromoted resData={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default RestaurantCarousel;
