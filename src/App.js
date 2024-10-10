import "./App.css";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "utils/ScrollToTop";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-250">
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
