
import { Link } from "react-router-dom";


import toast from "react-hot-toast";
import useAxiosCommon from "../../../hooks/axiosCommon";


const Register = () => {
    const axiosCommon=useAxiosCommon()
    const handleRegister=async(e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const pin = e.target.pin.value;
        const mobile_number = e.target.mobile_number.value;
        const email = e.target.email.value;
        const role = e.target.role.value;
        const status='pending'
      if(pin.length<5){
        return toast.error("pin must be in5")
      }
      if(pin.length>5){
        return toast.error("pin  can't be more than  5 ")
      }
      if(mobile_number.length<10){
        return toast.error("mobile number in 11 digits ")
      }


      const userInfo={name,pin,mobile_number,email,role,status}
        try {
            const res= await  axiosCommon.post('/createUser',userInfo)
            // console.log(res.data);
            if(res.data.insertedId){
             toast.success('user created')
             e.target.reset()
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
 
         <section className="bg-blue-50 dark:bg-gray-900 my-10 ">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md"onSubmit={handleRegister}>
            {/* <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}

            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl ">Register</h1>
            <div className="relative flex items-center mt-8">
                               <input type="text"name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name"/>
            </div>
            <div className="relative flex items-center mt-8">
                

                <input type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
            </div>
            <div className="relative flex items-center mt-8">
                

                <input type="number" name="mobile_number" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mobile Number"/>
            </div>
            <div className="relative flex items-center mt-4">
               
                <input type="password"name="pin"  maxLength={5} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Pin"/>
            </div>
            <div className="flex items-center  mt-4 px-4 gap-4">
                        <p className="text-gray-600">Role</p>
                      
                        <select className="text-teal-500" name="role" id="">
                            <option value="user">User</option>
                            <option value="agent">Agent</option>
                        </select>
                    </div>
            <div className="mt-6">
                <button 
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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