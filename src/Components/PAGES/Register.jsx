import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
 
         <section className="bg-blue-50 dark:bg-gray-900 my-10 ">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
            {/* <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}

            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl ">Register</h1>
            <div className="relative flex items-center mt-8">
                               <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name"/>
            </div>
            <div className="relative flex items-center mt-8">
                

                <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
            </div>
            <div className="relative flex items-center mt-8">
                

                <input type="number" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mobile Number"/>
            </div>
            <div className="relative flex items-center mt-4">
               
                <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Pin"/>
            </div>

            <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Register
                </button>

              

     
                <div className="mt-6 text-center ">
                    <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                       Already have an account yet? <Link to='/login'>sign in</Link>
                    </a>
                </div>
            </div>
        </form>
    </div>
</section>
        </div>
    );
};

export default Register;