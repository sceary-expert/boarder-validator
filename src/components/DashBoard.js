
import { useState } from "react";

export default function DashBoard()
{
    const initialUsers = [
        {
            "name" : "Anisur Mondal",
            "email":"random@gmail.com",
            "checked": true
        },
        {
            "name" : "Tushar Pandit",
            "email":"random2@gmail.com",
            "checked": true
        },
        {
            "name" : "Dhananjoy Dey",
            "email":"random3@gmail.com",
            "checked": true
        },
        {
            "name": "Dhananjoy Dey",
            "email": "random3@gmail.com",
            "checked": true
          },
          {
            "name": "Sara Johnson",
            "email": "sara.j@gmail.com",
            "checked": true
          },
          {
            "name": "John Smith",
            "email": "john.smith@gmail.com",
            "checked": true
          },
          {
            "name": "Emma Watson",
            "email": "emma.watson@gmail.com",
            "checked": true
          },
          {
            "name": "Anisur Mondal",
            "email": "random@gmail.com",
            "checked": true
          },
          {
            "name": "Tushar Pandit",
            "email": "random2@gmail.com",
            "checked": true
          },
          {
            "name": "Dhananjoy Dey",
            "email": "random3@gmail.com",
            "checked": true
          },
          {
            "name": "Sara Johnson",
            "email": "sara.j@gmail.com",
            "checked": true
          },
          {
            "name": "John Smith",
            "email": "john.smith@gmail.com",
            "checked": true
          },
          {
            "name": "Anisur Mondal",
            "email": "random@gmail.com",
            "checked": true
          },
          {
            "name": "Tushar Pandit",
            "email": "random2@gmail.com",
            "checked": true
          },
          {
            "name": "Dhananjoy Dey",
            "email": "random3@gmail.com",
            "checked": true
          },
          {
            "name": "Sara Johnson",
            "email": "sara.j@gmail.com",
            "checked": true
          },
          {
            "name": "John Smith",
            "email": "john.smith@gmail.com",
            "checked": true
          },
          {
            "name": "Emma Watson",
            "email": "emma.watson@gmail.com",
            "checked": true
          },
          {
            "name": "Alice Brown",
            "email": "alice.brown@gmail.com",
            "checked": true
          },
          {
            "name": "Bob Miller",
            "email": "bob.miller@gmail.com",
            "checked": true
          },
          {
            "name": "Grace Davis",
            "email": "grace.davis@gmail.com",
            "checked": true
          },
    ]
    // const [validUsers, setValidUsers] = useState({})
    const [users, setUsers] = useState(initialUsers);

    const handleCheckboxChange = (index) => {
        const updatedUsers = [...users];
        updatedUsers[index].checked = !updatedUsers[index].checked;
        setUsers(updatedUsers);
        console.log(users);
    };
    return (
        
        <div>
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
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Button
                    </button>
                </div>
            
        </div>
    )
}