import { Link, useNavigate } from "react-router-dom";
import useAxiosCommon from "../../../hooks/axiosCommon";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon();
  const handleLogin = async (e) => {
    e.preventDefault();

    const pin = e.target.pin.value;

    const email = e.target.email.value;

    const loginInfo = { email, pin };
    try {
      const res = await axiosCommon.post(`/login/${email}`, loginInfo);
      // console.log(res.data);
    

      if (res.data.status === "pending") {
        const { data } = await axios.post(
          `http://localhost:8000/jwt`,
          loginInfo
        );
        // console.log(data);
        if (data.token) {
       
          localStorage.setItem("access-token", data.token);
      
         toast.success("Logged in successfully!!");
         navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" my-16">
      <section className="bg-blue-50 dark:bg-gray-900 my-10 ">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form className="w-full max-w-md" onSubmit={handleLogin}>
            {/* <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl ">
              Welcome Back !!!
            </h1>

            <div className="relative flex items-center mt-8">
              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <input
                type="password"
                name="pin"
                maxLength={5}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Pin"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full  px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Login
              </button>

              <div className="mt-6 text-center ">
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  have an account yet ? <Link to="/register">sign up</Link>
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
