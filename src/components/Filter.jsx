import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Filter = () => {
  const { category, setCategory } = useContext(ProductContext);
  const categories = ["All", "Electronics", "Apparel", "Fitness", "Home Decor", "Accessories", "Appliances", "Furniture", "Bags", "Footwear", ];

  return (
    <select
      className="border p-2 rounded-lg text-sm bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}           className="bg-white text-black dark:bg-gray-700 dark:text-white"
>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default Filter;
