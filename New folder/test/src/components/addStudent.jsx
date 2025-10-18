const AddStudent = (add = (f)=>f) => {
    return ( <>
        <label>Name: </label>
        <input type="text" name="name" id="name" /><br /><br />
        <input type="button" value="Submit" onClick={add}/>
    </> );
}
 
export default AddStudent;