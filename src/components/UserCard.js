export default function UserCard(props)
{
    return(
        <div className="flex justify-between m-1  rounded-md text-center border border-black-500 p-2" >
            <h1 className="text-xl font-bold">{props.UserName}</h1>
            <input type="checkbox" id="myCheckbox" className="form-checkbox h-5 w-5" defaultChecked/>
        </div>
    )
}