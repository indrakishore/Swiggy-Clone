import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";
// import { useParams } from "react-router-dom";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";   

const useRestaurant = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //   fetch data from api
  function getRestaurantInfo() {
    // export url into constants
    fetch(FETCH_MENU_URL + resId)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setRestaurant(json.data);
      })
      .catch((err) => console.log(err));
  }
//   return restaurant data
  return restaurant;
};

export default useRestaurant;
