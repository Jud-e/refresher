import Book from "./book";

const Library = ({book, onDelete=f=>f,change=f=>f}) => {
    return book.length <= 0? <p>Currently there are no books</p>:( 
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
                    book.map(book => <Book key={book._id} {...book} onDelete={onDelete} change={change}/>)
                }
            </table>
        </>
     );
}
 
export default Library;