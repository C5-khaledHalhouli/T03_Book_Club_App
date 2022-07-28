import { useSelector, useDispatch } from "react-redux/";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { deleteBook } from "../Redux/Reducers/book/index";
import axios from "axios";
import { deleteBookReadingList } from "../Redux/Reducers/book/index";

const AdminPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      books: state.book.books,
      token: state.login.token,
    };
  });
  const deleteClick = (bookId) => {
    dispatch(deleteBook(bookId));
    axios
      .delete(`http://localhost:5000/book/${bookId}`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
      axios.delete(`http://localhost:5000/user/readinglist/${bookId}`,{
        headers: { Authorization: `Bearer ${state.token}` }}).then((result) => {
        
        dispatch(deleteBookReadingList(bookId))
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Book Image</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Description</th>
          <th>Reader</th>
          <th>Operater</th>
        </tr>
      </thead>
      <tbody>
        {state.books &&
          state.books.map((element, index) => {
            return (
              <tr key={index+"td"}>
                <td>
                  <img
                    src={`${element.img}`}
                    alt={`img of ${element.bookName} book`}
                  />
                </td>
                <td>{element.bookName}</td>
                <td>{element.author}</td>
                <td>{element.description}</td>
                <td>{element.reader}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteClick(element._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default AdminPage;
