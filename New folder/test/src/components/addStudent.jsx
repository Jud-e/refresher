const AddStudent = (add = (f)=>f) => {
    const [name, setName] = useState("");

    const handleSubmit = () => {
    if (!name.trim()) return;
    add(name);
    setName(""); // clear input
  };
    return ( <>
        <label>Name: </label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/><br /><br />
        <input type="button" value="Submit" onClick={handleSubmit}/>
    </> );
}
 
export default AddStudent;