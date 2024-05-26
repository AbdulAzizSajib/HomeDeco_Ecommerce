import { MdDelete } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import { FaHeart } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          console.log(res);
          refetch();
        });
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="text-xl font-semibold">
          Your Total Cart Item: {cart.length}
        </h2>
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          {cart.map((products) => (
            <li
              key={products._id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border- sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={products.image}
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {products.name}
                      </h3>
                      <p className="text-sm dark:text-gray-600">Classic</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">{products.price}$</p>
                      <p className="text-sm line-through dark:text-gray-400">
                        75.50€
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      onClick={() => handleDelete(products._id)}
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <MdDelete className="text-xl"></MdDelete>
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <FaHeart></FaHeart>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">{totalPrice} Taka</span>
          </p>
          <p className="text-sm dark:text-gray-600">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-default-600"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-default-600 dark:text-gray-50 dark:border-default-600"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
