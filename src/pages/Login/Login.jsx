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
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { BiArrowToRight } from "react-icons/bi";

const Login = () => {
  const { LoginUser } = useAuth();

  //navigate Location
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  console.log(from);

  //!handle Login

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //
    LoginUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="flex flex-col justify-center min-h-screen bg-white border-2 ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <div className="mb-3 ">
                <Link to="/" className="flex items-center gap-3">
                  <span>Back To Home</span>
                  <BiArrowToRight />
                </Link>
              </div>
              <h2 className="text-3xl font-bold leading-tight text-black uppercase sm:text-4xl">
                Sign in to Celebration
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Don’t have an account?
                <Link
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                  to="/registration"
                >
                  Create a Free Account
                </Link>
              </p>

              <form onSubmit={handleLogin} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Enter email to get started"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        Password
                      </label>

                      <a
                        href="#"
                        title=""
                        className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id=""
                        placeholder="Enter your password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Log in
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
        </div>
      </section>
    </div>
  );
};

export default Login;
