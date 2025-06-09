import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Sort = () => {
  const { sortOrder, setSortOrder } = useContext(ProductContext);

  return (
    <select
      className="border p-2 rounded-lg text-sm bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="default">Sort By</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  );
};

export default Sort;
