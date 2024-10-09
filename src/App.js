import logo from "./logo.svg";
import "./App.css";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-primary-250 flex min-h-screen flex-col pb-32">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
