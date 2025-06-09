import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-50 object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.title}</h3>
        <p className="text-gray-600 text-sm dark:text-gray-300">{product.category}</p>
        <p className="text-indigo-400 font-bold mt-2">₹{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
