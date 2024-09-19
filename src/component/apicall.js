import { useState } from "react";


const ApiCall=()=>{
    const [userList,setUserList]=useState([])
    const[user,setUser]=useState({
        email:"",
        password:""
    });
    const handlechange=(e)=>{
        setUser({
          ...user,
          [e.target.name]:[e.target.value]
        })
    }
    const handleSave=(id)=>{
      setUserList(userList=>[...userList,id])
    }
    return (
        <div className="row">
            <div className="co-4">
            <input name="email" value={user.email} onChange={handlechange }></input>
            <input name="password"value={user.password} onChange={handlechange}></input>
            <button onClick={handleSave}>Add</button>
            </div>
            <div className="col-6">
                <table>
                    <tbody>
                        {userList.map((e)=>{
                            return(
                                <tr>
                                <td>{e.email}</td> 
                            
                                </tr>
                            )
                        })}
                       
                    </tbody>
                </table>
            </div>
            
        </div>
    )


}
export default ApiCall;