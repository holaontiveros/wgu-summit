import "./App.css";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-250">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
