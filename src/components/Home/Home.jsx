import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is HOME!</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
