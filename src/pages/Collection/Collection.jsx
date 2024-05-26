import useProducts from "../../Hooks/useProducts";
import ProductCategory from "../../Shared/ProductCategory/ProductCategory";
const Collection = () => {
  const [products] = useProducts();
  const chairs = products.filter((item) => item.category === "chair");
  const Plant = products.filter((item) => item.category === "Plant");
  const Lamp = products.filter((item) => item.category === "Lamp");
  const Table = products.filter((item) => item.category === "Table");
  const Backet = products.filter((item) => item.category === "Backet");
  return (
    <div>
      <ProductCategory
        text={"Fancy Chair"}
        items={chairs}
        imageUrl={
          "https://i.pinimg.com/564x/51/01/f6/5101f61d25888f32172fd6b04f22e10b.jpg"
        }
      ></ProductCategory>
      <ProductCategory
        text={"Fancy Chair"}
        items={Plant}
        imageUrl={
          "https://i.pinimg.com/564x/51/01/f6/5101f61d25888f32172fd6b04f22e10b.jpg"
        }
      ></ProductCategory>
      <ProductCategory
        text={"Fancy Chair"}
        items={Lamp}
        imageUrl={
          "https://i.pinimg.com/564x/51/01/f6/5101f61d25888f32172fd6b04f22e10b.jpg"
        }
      ></ProductCategory>
      <ProductCategory
        text={"Fancy Chair"}
        items={Table}
        imageUrl={
          "https://i.pinimg.com/564x/51/01/f6/5101f61d25888f32172fd6b04f22e10b.jpg"
        }
      ></ProductCategory>
      <ProductCategory
        text={"Fancy Chair"}
        items={Backet}
        imageUrl={
          "https://i.pinimg.com/564x/51/01/f6/5101f61d25888f32172fd6b04f22e10b.jpg"
        }
      ></ProductCategory>
    </div>
  );
};

export default Collection;
