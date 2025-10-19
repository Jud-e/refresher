import Book from "./book";

const Library = ({book}) => {
    return ( 
        <>
            <p>Showing {book.length} books</p>
            <table>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Number in stock</th>
                <th>Price</th>
                <th>Year</th>
                <th>Liked</th>
                <th>Action(s)</th>
                <hr />
                {
                    book.map(book => <Book key={book._id} {...book}/>)
                }
            </table>
        </>
     );
}
 
export default Library;