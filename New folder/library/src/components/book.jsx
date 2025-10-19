import "./book.css";
import { FaHeart } from "react-icons/fa";

const Book = ({_id, title, category, author, numberInStock, price, publishYear, liked}) => {
    return ( 
        <tr>
            <td>{_id}</td>
            <td>{title}</td>
            <td>{category.name}</td>
            <td>{author}</td>
            <td>{numberInStock}</td>
            <td>{price}</td>
            <td>{publishYear.substring(0, 4)}</td>
            <td><FaHeart/></td>
            <td><button>Delete</button></td>
        </tr>
     );
}
 
export default Book;