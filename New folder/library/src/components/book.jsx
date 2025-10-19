const Book = ({_id, title, category, author, numberInStock, price, publishYear, liked}) => {
    return ( 
        <tr>
            <td>{_id}</td>
            <td>{title}</td>
            <td>{category.name}</td>
            <td>{author}</td>
            <td>{numberInStock}</td>
            <td>{price}</td>
            <td>{publishYear}</td>
            <td>{liked}</td>
            <td><button>Delete</button></td>
        </tr>
     );
}
 
export default Book;