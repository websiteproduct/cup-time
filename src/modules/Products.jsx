import { useEffect } from "react";
import { Product } from "./Product";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory } = useProducts();
  const category = searchParams.get("category");

  let categoryName = "";

  switch (category) {
    case "tea":
      categoryName = "Чай";
      break;
    case "coffee":
      categoryName = "Кофе";
      break;
    case "teapots":
      categoryName = "Чайники";
      break;
    case "cezves":
      categoryName = "Турки";
      break;
    case "other":
      categoryName = "Прочее";
      break;
  }

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{categoryName}</h2>

        <ul className="products__list">
          {products.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
