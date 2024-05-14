import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import Users from "./components/Users/Users";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: `users`,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users />,
      },
      {
        path: `/user/:userId`,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />,
      },
      {
        path: `/posts`,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts />,
      },
      {
        path: `/post/:postId`,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetail></PostDetail>,
      },
    ],
  },
  {
    path: "header",
    element: <Header></Header>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
