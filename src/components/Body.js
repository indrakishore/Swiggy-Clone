import { useState } from "react";
import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restrauntList);
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />{" "}
        <button
          className="seach-btn"
          onClick={() => {
            // Need to filter the data
            const data = filterData(searchInput, restrauntList);
            // update the state - restaurant
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div
        style={{ backgroundColor: "lightsmoke" }}
        className="restaurant-list"
      >
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
