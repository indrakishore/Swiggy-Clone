import { useState, useEffect } from "react";
import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  // should i call api from here?
  fetch("");
  // create variable in normal js
  // const searchTxt = "KFC";
  // seacrhtxt is a local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const [restaurants, setRestaurants] = useState(restrauntList);
  const [searchInput, setSearchInput] = useState(""); //to create state variable comes from react
  // const [searchClcik, setSearchClick] = useState("false");
  //console.log(restaurants); //6 list bcz it's rendering on each keypress

  useEffect(() => {
    console.log("call this when dependencies are updated");
    // call API
    getRestaurants();
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1>Seems like you are offline, please check your internet connection</h1>
    );
  }
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6995525&lng=77.0373762&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    // Todo: Optional Chaining
    // populate all restaurants
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }
  // Conditional rendering
  // if restaurants is empty => load shimer UI
  // if restaurants has data  => load actual data UI

  // Early return || Not render component
  if (!allRestaurants) return null;

  // if (filteredRestaurants.length === 0) {
  //   return <h1>No Restaurant match your Filter!</h1>;
  // }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          // onChange={(e) => console.log(e.target.value)}
          onChange={(e) => {
            // e.target.value -> whatever you write in input
            setSearchInput(e.target.value);
          }}
        />{" "}
        <button
          className="seach-btn"
          onClick={() => {
            // Need to filter the data
            const data = filterData(searchInput, allRestaurants);
            // update the state - restaurant
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div
        style={{ backgroundColor: "lightsmoke" }}
        className="restaurant-list"
      >
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
              style={{ textDecoration: "none" }}
            >
              <RestrauntCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
