
const List=(props)=>{
    return(
        <>
        {props.userList.map((ele,id)=>{
            return(
                <div key="id">{ele}</div>
            )
        })}
        </>
    )
}
export default List;