import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SingleView from "./SingleView";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/single/:id" element={<SingleView></SingleView>}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
