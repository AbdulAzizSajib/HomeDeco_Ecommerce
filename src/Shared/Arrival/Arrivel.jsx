import { BiCart } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import useAuth from "./../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const Arrivel = ({ item }) => {
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { image, price, name, rating } = item;
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      //todo: send cart
      const cartItem = {
        productId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };
      axiosSecure.post("/cart", cartItem).then((res) => {
        console.log(res.data);
        refetch();
        Swal.fire({
          icon: "success",
          title: `${item.name} Added to Cart`,
        });
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Can you login now ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="relative flex flex-col w-full max-w-xs mx-auto overflow-hidden bg-white border border-gray-100 rounded-lg shadow-md">
      <a className="relative flex h-full overflow-hidden rounded-xl" href="#">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt="product image"
        />
        <span className="absolute top-0 left-0 px-2 m-2 text-sm font-medium text-center text-white bg-[#0A5D5D] rounded-md">
          39% OFF
        </span>
      </a>
      <div className="px-5 pb-5 mt-4">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
        </a>
        <div className="flex items-center justify-between mt-2 mb-5">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm line-through text-slate-900">$299</span>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </p>
        </div>

        <Link
          onClick={() => handleAddToCart(item)}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <BiCart className="text-lg me-3"></BiCart>
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default Arrivel;
