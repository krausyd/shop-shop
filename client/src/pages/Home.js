import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  const [currentCategory] = useState("");

  return (
    <div className="container">
      <CategoryMenu />
      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;
