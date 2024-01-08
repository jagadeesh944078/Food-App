import RestaurantCard, { withPrmotedLabel } from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import FoodCarousel from "./FoodCarousel";
import ItemCarousel from "./ItemCarousel";
import RestaurantCarousel from "./RestaurantCarousel";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filterRestaurents, setFilterREstaurents] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [itemCarousel, setItemCarousel] = useState([]);
  const [restaurantCarousel, setRestaurantCarousel] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(10);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  useEffect(() => {
    console.log("shashi");
    fetchData();
  }, []);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 15);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (page > 10) {
      getMoreRestaurents();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const getMoreRestaurents = async () => {
    const response = await fetch(
      `https://51.159.195.115/dapi/restaurants/list/update?__cpo=aHR0cHM6Ly93d3cuc3dpZ2d5LmNvbQ`,
      {
        method: "POST", // Use POST for fetching more restaurants
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers here
        },
        body: JSON.stringify({
          lat: 12.9715987,
          lng: 77.5945627,
          nextOffset: "COVCELQ4KID4ruup+9+KczCnEzgD", // Use the correct nextOffset value
          // Other payload parameters if needed
          seoParams: {
            apiName: "FoodHomePage",
            pageType: "FOOD_HOMEPAGE",
            seoUrl: "https://www.swiggy.com/",
          },
          widgetOffset: {
            // Include your widgetOffset values here
            NewListingView_Topical_Fullbleed: "",
            NewListingView_category_bar_chicletranking_TwoRows: "",
            NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
            collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
              String(page),
          },
        }),
      }
    );
    const json = await response.json();
    setListOfRestaurents((prev) => [
      ...prev,
      ...json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
    setFilterREstaurents((prev) => [
      ...prev,
      ...json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.943818&lng=77.619004&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurents(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterREstaurents(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards);
    setItemCarousel(json?.data?.cards[1]?.card?.card?.imageGridCards);
    setRestaurantCarousel(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPrmotedLabel(RestaurantCard);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like your in offline!!! Kindly Check Your Internet Connection
      </h1>
    );

  return listOfRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className={isDarkTheme && "bg-black"}>
      <FoodCarousel carousel={carousel} />
      <ItemCarousel itemCarousel={itemCarousel} />
      <RestaurantCarousel restaurantCarousel={restaurantCarousel} />
      <div className="mx-32">
        <input
          type="search"
          name="search"
          className="border p-2 border-black m-4 rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            const searchRestaurents = listOfRestaurents.filter((restaurants) =>
              restaurants.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilterREstaurents(searchRestaurents);
          }}
          className="bg-green-400 p-2 font-semibold rounded-md"
        >
          search
        </button>
        <button
          className="bg-green-400 m-4 font-semibold p-2 rounded-md"
          onClick={() => {
            const filterRestaurants = listOfRestaurents.filter(
              (restaurant) => restaurant.info.avgRating > 4.6
            );
            setListOfRestaurents(filterRestaurants);
          }}
        >
          Top Rated Filter
        </button>
        <input
          type="text"
          className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
        <img src="" />
      </div>
      <div className="mx-40 text-xl font-bold my-8">
        <h1>Restaurants with online food delivery in Bangalore</h1>
        <div className="grid grid-cols-4 gap-8">
          {filterRestaurents.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              state={{ data: restaurant.info }}
              key={restaurant.info.id}
            >
              {/* <RestaurantCard resData={restaurant} /> */}
              <RestaurantCardPromoted resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
