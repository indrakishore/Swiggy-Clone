import React, { lazy, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => {
  import("./components/Instamart");
});
// upon on demand loading -> upon render -> suspend loading

const AppLayout = () => {
  return (
    <div>
      <Header />
      {/* <About /> if path is /About then render About component 
      <Body /> if path is  */}
      <div className="appContainer">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <AppLayout />,
  //   errorElement: <Error />,
  // },
  // Have to chaange the routing configuration for nested components
  //Make about i will have to change abut page the children of the app layout. It
  // should come inside layout(between the header and footer) not outside layout

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
// Need to render RouterProvider

root.render(<RouterProvider router={appRouter} />);
