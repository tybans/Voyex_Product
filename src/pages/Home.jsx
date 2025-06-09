import { useContext, Suspense, lazy, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";

const ProductCard = lazy(() => import("../components/ProductCard"));

const Home = () => {
  
  const { products, category, sortOrder } = useContext(ProductContext);

  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of products per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = sorted.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sorted.length / itemsPerPage);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Filter />
        <Sort />
      </div>
      <Suspense fallback={<p>Loading products...</p>}>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Suspense>
    </div>
  );
};

export default Home;
