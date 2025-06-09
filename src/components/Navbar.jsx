import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 text-black dark:text-white shadow px-4 py-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1
          className="text-black dark:text-white
 text-xl font-bold"
        >
          Product Showcase
        </h1>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
