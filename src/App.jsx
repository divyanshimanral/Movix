import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from "./store/HomeSlice";
import Home from "../src/pages/home/Home";
import Details from "../src/pages/detail/Details";
import PageNotFound from "../src/pages/404/PageNotFound";
import Explore from "../src/pages/explore/Explore";
import SearchResult from "../src/pages/searchDetails/Search";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  // console.log(url);

  useEffect(() => {
    fetchApiConfig()
  }, []);
    const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: res.images.secure_base_url+ "original",
        poster: res.images.secure_base_url+ "original",
        profile: res.images.secure_base_url+ "original",
      }
      // don not forgot to pass the url in getApiConfiguration method
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
