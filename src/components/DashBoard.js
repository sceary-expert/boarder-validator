
// require('dotenv').config();
import { useState } from "react";
import NavBar from "./NavBar";

export default function DashBoard()
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
  const [loading, setLoading] = useState(false);
    // const initialUsers = [
    //     {
    //         "name" : "Anisur Mondal",
    //         "email":"random@gmail.com",
    //         "checked": true
    //     },
    //     {
    //         "name" : "Tushar Pandit",
    //         "email":"random2@gmail.com",
    //         "checked": true
    //     },
    //     {
    //         "name" : "Dhananjoy Dey",
    //         "email":"random3@gmail.com",
    //         "checked": true
    //     },
    //     {
    //         "name": "Dhananjoy Dey",
    //         "email": "random3@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Sara Johnson",
    //         "email": "sara.j@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "John Smith",
    //         "email": "john.smith@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Emma Watson",
    //         "email": "emma.watson@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Anisur Mondal",
    //         "email": "random@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Tushar Pandit",
    //         "email": "random2@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Dhananjoy Dey",
    //         "email": "random3@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Sara Johnson",
    //         "email": "sara.j@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "John Smith",
    //         "email": "john.smith@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Anisur Mondal",
    //         "email": "random@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Tushar Pandit",
    //         "email": "random2@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Dhananjoy Dey",
    //         "email": "random3@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Sara Johnson",
    //         "email": "sara.j@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "John Smith",
    //         "email": "john.smith@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Emma Watson",
    //         "email": "emma.watson@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Alice Brown",
    //         "email": "alice.brown@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Bob Miller",
    //         "email": "bob.miller@gmail.com",
    //         "checked": true
    //       },
    //       {
    //         "name": "Grace Davis",
    //         "email": "grace.davis@gmail.com",
    //         "checked": true
    //       },
    // ]
    const apiUrl = process.env.REACT_APP_API_URL;
    // const [validUsers, setValidUsers] = useState({})
    const [users, setUsers] = useState(initialUsers);

    const handleCheckboxChange = (index) => {
        const updatedUsers = [...users];
        updatedUsers[index].checked = !updatedUsers[index].checked;
        setUsers(updatedUsers);
        console.log(users);
    };
    const SendEmails = async () => {
      
      // console.log("url ",apiUrl);
      // const apiUrl = 'https://boarder-validation.onrender.com';
      
  
      try {
        setLoading(true);
        const emailIdsArray = users
          .filter((user) => user.checked)
          .map((user) => user.email);
  
        console.log("otps will be sent to ", emailIdsArray);
  
        const response = await fetch(`${apiUrl}/send-otp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emails: emailIdsArray,
          }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log("success", responseData);

        // Store response data in local storage
        localStorage.setItem("emailResponse", JSON.stringify(responseData));
        // const responseData = await response.json();
        console.log("success", responseData);
      } catch (error) {
        console.error("Error during API call:", error);
      }
      finally{
        setLoading(false);
      }
    };
  
  
    return (
        
        <div>
          <NavBar/>
            <div className="">
            {users.map((user, index) => (            
                <button  key={index} className={`w-full rounded-md border border-black-500 p-2 `}  onClick={() => handleCheckboxChange(index)}>
                    <div  className={`w-full rounded-md border border-black-500 p-3 ${user.checked ? 'bg-green-300' : 'bg-grey-100'}` }>
                    
                    <h1 className="text-xl font-bold text-center ">{user.name}</h1>
                    {/* <input type="checkbox" id="myCheckbox" className="form-checkbox h-5 w-5" defaultChecked ={user.checked} /> */}
                    </div>        
                </button>
            
            ))}
                </div>
                <div className="flex items-center justify-center p-4">
                  <button onClick={SendEmails} disabled={loading} className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${loading ? 'cursor-not-allowed opacity-50' : ''}`}>
                      send
                  </button>
                </div>
            
        </div>
    )
}