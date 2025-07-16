import React from "react";
import ReactDOM from "react-dom/client";
// import to start implementing routes after installing react-router-dom(npm install react-router-dom@6 =>version 6)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

// create a router object 
const router = createBrowserRouter(routes);
// render the RouterProvider which provides the router created by createBrowserRouter to our application so it can use React-Router's client side routing
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);