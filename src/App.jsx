import {Outlet} from "react-router-dom"
import "./App.css";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet/>
      <Footer />
    </div>)
}
export default App