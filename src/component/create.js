import {  useState } from "react";

const Create = (props) => {
    // const [user,setUser]=useState([]);
    const [user, setUser] = useState("");
    // there are three sanario --> 1 props--parent to child  2 callback--child to parent call 3 sibling --> both are combined together.
    // then proced
    // const data="https://jsonplaceholder.typicode.com/users";
    // useEffect(()=>{
    //   fetch(data).then((res)=>res.json()).then((res)=>
    //     setUser(res)
    // )
    // },[]);

    // const handleRemove=(id)=>{
    // console.log(id)
    //  user.splice(id,1)
    //  setUser(user=>[...user])
    // }
    // todo application---> create read update and delete functionality to work.
    // in this case there are three sanario. 1 props--props data pass through parent to child  2 callback--> callback method 
    // a callback method -- sometimes one function is wait and another is function called 

    // 3 sibling--> combined both
    const handleChange = (e)=>{
        setUser(e.target.value);
       
    }
    const handleAdd=()=>{
        props.callbackChange(user)
        setUser("")
    }

    return (
        <>
            {/* <ul>
            {user.map((ele,id)=>{
                return(
                    <li key={ele.id}>{ele.username}
                    <button onClick={handleRemove.bind(this,id)}>Del</button></li>
                )
            })}
        </ul> */}
            <div>
                <input type="text" onChange={handleChange}></input>
                <button  style={{color:"red",backgroundColor:"AppWorkspace"}}onClick={handleAdd}>Add</button>
            </div>

        </>
    )
}
export default Create;