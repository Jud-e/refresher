import "./book.css";
import { FaHeart } from "react-icons/fa";

const Book = ({_id, title, category, author, numberInStock, price, publishYear, liked, onDelete=f=>f, change=f=>f}) => {
    return ( 
        <tr>
            <td>{_id}</td>
            <td>{title}</td>
            <td>{category.name}</td>
            <td>{author}</td>
            <td>{numberInStock}</td>
            <td>{price}</td>
            <td>{publishYear.substring(0, 4)}</td>
            <td><FaHeart color={liked?"red":"grey"} onClick={()=>change(_id)}/></td>
            <td><button onClick={()=>onDelete(_id)}>Delete</button></td>
        </tr>
     );
}
 
export default Book;