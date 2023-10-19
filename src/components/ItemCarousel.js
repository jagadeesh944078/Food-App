import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ItemCarousel = ({ itemCarousel }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
    <div className="mx-36 font-bold my-4">
      <h1 className="text-xl my-6">Jagadeesh Whats on your mind</h1>
      <ul>
        <Carousel responsive={responsive}>
          {itemCarousel.info.map((item) => (
            <li key={item.id} className="w-44">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                  item.imageId
                }
                alt="image"
                width="120"
              />
            </li>
          ))}
        </Carousel>
      </ul>
    </div>
  );
};

export default ItemCarousel;
