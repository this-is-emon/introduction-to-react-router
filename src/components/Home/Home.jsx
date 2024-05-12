import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      {/* <h1>This is HOME!</h1> */}
      <h1>This is {"<h1>"} inside HOME</h1>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Home;
