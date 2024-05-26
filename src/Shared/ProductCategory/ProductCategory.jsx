import CoverImage from "../CoverImage/CoverImage";

const ProductCategory = ({ items, imageUrl, text }) => {
  return (
    <div>
      <CoverImage imageUrl={imageUrl} text={text}></CoverImage>
      <div className="grid grid-cols-6 gap-4">
        {items.slice(0, 12).map((item) => (
          <div key={item._id} className="relative">
            <img
              className="object-cover w-full h-full transition duration-500 ease-linear rounded-lg drop-shadow-lg hover:scale-105"
              src={item.image}
              alt=""
            />
            <div className="absolute bottom-5 left-5">
              <h2 className="mt-1 font-bold uppercase">{item.name}</h2>
              <p className="mt-1 ">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
