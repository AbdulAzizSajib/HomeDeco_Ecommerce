import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../public/picture/LoginSlider/slider1.jfif";
import slider2 from "../../../public/picture/LoginSlider/slider2.jfif";
import slider3 from "../../../public/picture/LoginSlider/silder3.jfif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const { createUser, logoutUser } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(" New User Created", user);
        //! Post User Data on database
        const userInfo = { email: data.email, password: data.password };
        axiosPublic
          .post("/users", userInfo)
          .then((result) => {
            if (result.data.insertedId) {
              toast.success("Registration Successfully");
              reset();
            }
          })
          .catch((err) => console.log("UserInfo Collect Fail", err));
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <Helmet>
        <title>HomeDeco | Sign up</title>
      </Helmet>
      <section className="flex flex-col justify-center min-h-screen bg-white border-2">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black uppercase sm:text-4xl">
                Sign up to Celebration
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <Link
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                  to="/login"
                >
                  Login
                </Link>
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Full Name{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        {...register("name")}
                        type="text"
                        name="name"
                        id=""
                        placeholder="Enter Your Full Name"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        name="email"
                        id=""
                        placeholder="Enter email to get started"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                      {errors.email && <span>Email is required</span>}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        Password
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <input
                        {...register("password", {
                          required: true,
                          minLength: 6,
                        })}
                        type="password"
                        name="password"
                        id=""
                        placeholder="Enter your password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                      {errors.password && <span>Password is required</span>}
                      {errors.password?.type === "minLength" && (
                        <span>Password Must be at least 6 characters</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Create Free Account
                    </button>
                  </div>
                </div>
              </form>
              {/* ...SOCIAL LOGIN.... */}
              <SocialLogin></SocialLogin>
            </div>
          </div>
          {/* slider part */}
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={slider1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <ToastContainer />
        </div>
      </section>
    </div>
  );
};

export default Registration;
