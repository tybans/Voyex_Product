import Home from "./pages/Home";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar";
import { div } from "framer-motion/client";

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
      <ProductProvider>
        <Navbar />
        <Home />
      </ProductProvider>
    </div>
  );
}

export default App;
