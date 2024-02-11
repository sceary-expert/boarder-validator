import { useState } from "react";
import Navbar from "./NavBar";

export default function Validator()
{
    var [otp, setOtp] = useState("");
    const verifyOTP = () =>{
        console.log(otp);

    }
    return(
        <div>
            <Navbar/>
           <div className="flex items-center justify-center p-10">
            <input
                onChange={(e) => setOtp(e.target.value)}
                className=" w-1/2  flex h-10  rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                placeholder="Enter otp"
            />
            </div>
            <div className="flex items-center justify-center">
                <button onClick={verifyOTP} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Verify
                </button>
            </div>

        </div>
    )
}