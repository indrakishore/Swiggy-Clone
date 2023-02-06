import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import { Shimmer } from "../components/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";   


const RestaurantMenu = () => {
  // const params = useParams();
  //   const { id } = params;
  //   Another way to destructure
  const { resId } = useParams();
  //custome made hooks
  const restaurant = useRestaurant(resId);

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant.menu?.items || {}).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
