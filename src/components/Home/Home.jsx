import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();

  console.log(location);
  return (
    <div>
      <h1>This is {"<h1>"} inside HOME</h1>
      <Header />
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
      {/* <Outlet></Outlet> */}
      <Footer />
    </div>
  );
};

export default Home;
