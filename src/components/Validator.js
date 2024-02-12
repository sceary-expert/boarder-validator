import { useEffect, useState } from "react";
import Navbar from "./NavBar";

export default function Validator()
{
    const initialUsers = [
        {
            "name" : "Anisur Mondal",
            "email":"random@gmail.com",
            "checked": true
        },
        {
          "name" : "Arnab Upadhay",
          "email":"deydhananjoycoc@gmail.com",
          "checked": true
      },
    ]
    const [otp, setOtp] = useState("");
    const [green, setGreen] = useState(false);
    const [message, setMessage] = useState("Enter 4 digit otp")
    const [emailResponse, setEmailResponse] = useState([]);
    // const EmailResponse = localStorage.getItem('emailResponse');
    // console.log("emailResponse ", EmailResponse);
    // setEmailResponse(EmailResponse);

    const verifyOTP = () =>{
        console.log(otp);
        if(otp.length === 4)
        {
            const index = emailResponse.findIndex(entry => entry.otp === parseInt(otp));
            if (index !== -1) {
                // Get the email corresponding to the OTP
                const email = emailResponse[index].email;
                const correspondingUser = initialUsers.find(user => user.email === email);
                if (correspondingUser) {
                    setMessage(correspondingUser.name);
                    setGreen(true);
                    console.log("Name corresponding to OTP:", correspondingUser.name);
                } else {
                    console.log("User not found for the corresponding email");
                    setMessage("OTP invalid!")
                    setGreen(false);
                }
                console.log("Email corresponding to OTP:", email);
                // setMessage(email);

                // Remove the object with the matching OTP
                const updatedEmailResponse = [...emailResponse.slice(0, index), ...emailResponse.slice(index + 1)];
                setEmailResponse(updatedEmailResponse);

                // Update localStorage
                localStorage.setItem('emailResponse', JSON.stringify(updatedEmailResponse));
            } else {
                console.log("OTP not found in emailResponse");
                setMessage("OTP invalid!")
                setGreen(false);
                
            }
        }

    }
    useEffect(() => {
        const storedEmailResponse = JSON.parse(localStorage.getItem('emailResponse'));
        if (Array.isArray(storedEmailResponse)) {
            setEmailResponse(storedEmailResponse);
        } else {
            setEmailResponse([]); // Initialize with an empty array if data is not valid
        }
        // setEmailResponse(EmailResponse);
        
    }, [setEmailResponse]);

      
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
            <div className={`w-full rounded-md border border-black-500 p-3 ${green ? 'bg-green-300' : 'bg-grey-100'}`}>
                    <h1 className="text-xl font-bold text-center ">{message}</h1>
            </div>

        </div>
    )
}