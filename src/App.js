import logo from "./logo.svg";
import "./App.css";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col pb-32">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
