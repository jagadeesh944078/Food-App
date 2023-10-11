import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filterRestaurents, setFilterREstaurents] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(10);

  useEffect(() => {
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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",
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
    console.log(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
  };

  return listOfRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="search"
          name="search"
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
        >
          search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurants = listOfRestaurents.filter(
              (restaurant) => restaurant.info.avgRating > 4.6
            );
            setListOfRestaurents(filterRestaurants);
          }}
        >
          Top Rated Filter
        </button>
      </div>
      <div className="res-container">
        {filterRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
