import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
const App = () => {
  useEffect(() => {
    // apiTest();
  }, []);
  const apiTest = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };
  return <div>App</div>;
};

export default App;
