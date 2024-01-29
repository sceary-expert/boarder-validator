import UserCard from "./UserCard"

export default function DashBoard()
{
    const users = [
        {
            "name" : "Anisur Mondal",
            "email":"random@gmail.com"
        },
        {
            "name" : "Tushar Pandit",
            "email":"random2@gmail.com"
        },
        {
            "name" : "Dhananjoy Dey",
            "email":"random3@gmail.com"
        },
        {
            "name": "Dhananjoy Dey",
            "email": "random3@gmail.com"
          },
          {
            "name": "Sara Johnson",
            "email": "sara.j@gmail.com"
          },
          {
            "name": "John Smith",
            "email": "john.smith@gmail.com"
          },
          {
            "name": "Emma Watson",
            "email": "emma.watson@gmail.com"
          },
          {
            "name": "Anisur Mondal",
            "email": "random@gmail.com"
          },
          {
            "name": "Tushar Pandit",
            "email": "random2@gmail.com"
          },
          {
            "name": "Dhananjoy Dey",
            "email": "random3@gmail.com"
          },
          {
            "name": "Sara Johnson",
            "email": "sara.j@gmail.com"
          },
          {
            "name": "John Smith",
            "email": "john.smith@gmail.com"
          },
          {
            "name": "Anisur Mondal",
            "email": "random@gmail.com"
          },
          {
            "name": "Tushar Pandit",
            "email": "random2@gmail.com"
          },
          {
            "name": "Dhananjoy Dey",
            "email": "random3@gmail.com"
          },
          {
            "name": "Sara Johnson",
            "email": "sara.j@gmail.com"
          },
          {
            "name": "John Smith",
            "email": "john.smith@gmail.com"
          },
          {
            "name": "Emma Watson",
            "email": "emma.watson@gmail.com"
          },
          {
            "name": "Alice Brown",
            "email": "alice.brown@gmail.com"
          },
          {
            "name": "Bob Miller",
            "email": "bob.miller@gmail.com"
          },
          {
            "name": "Grace Davis",
            "email": "grace.davis@gmail.com"
          },
    ]
    // const [validUsers, setValidUsers] = useState({})
    return (
        <div>
            <div className="">
            {users.map((user, index) => (
            <UserCard UserName={user.name} key = {index} />
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