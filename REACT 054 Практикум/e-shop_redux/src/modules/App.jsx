import { useEffect } from "react";
import { Global } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";

import Theme from "../context/Theme";

import PageLayout from "./layout/PageLayout/PageLayout";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import Navigation from "../pages/Navigation";

import { selectIsCartExist } from "../redux/cart/cart-selector";
import { fetchCreateCart, fetchGetCart } from "../redux/cart/cart-thunks";

import globalStyles from "../shared/styles/global";

function App() {

  const isCartExist = useSelector(selectIsCartExist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCartExist) {
      dispatch(fetchGetCart())
    } else {
      dispatch(fetchCreateCart())
    }
  }, [isCartExist, dispatch]);

  return (

    <Theme>
      <Global styles={globalStyles} />
      <PageLayout>
        <Navbar />
        <Navigation />
        <Footer />
      </PageLayout>

    </Theme>

  )
};

export default App
