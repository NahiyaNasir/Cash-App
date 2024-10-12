import useRole from "../../../hooks/useRole";


const Overview = () => {
     const [role]=useRole()

    return (
        <div>
         <div className="h-full flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    {role && (
                        <>
                            <span className="uppercase">{role.slice(0, 1)}</span>
                            {role.slice(1)}
                        </>
                    )}{" "}
                    Overview
                </h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Name</h3>
                    {/* {role === 'user' && user ? user.name : role === 'agent' && agent ? agent.name : 'Unknown'} */}
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Email Address</h3>
                    <p className="text-gray-600">{role ==='user'|| 'agent'?.email}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Phone Number</h3>
                    {/* <p className="text-gray-600">{role ==='user'|| 'agent'?.
mobile_number}</p> */}
                </div> 
                 {/* {role.user?.balance && (
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-700">Account Balance</h3>
                        <p className="flex items-center">
                            <span className="font-semibold text-green-600">{role ==='user'|| 'agent'?.balance.toFixed(2)}</span>
                          
                        </p>
                    </div>
                )} */}
            </div>
        </div>
    
        </div>
    );
};

export default Overview;