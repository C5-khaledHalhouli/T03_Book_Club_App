import axios from "axios"
import { useSelector } from "react-redux/";
import React,{useState} from "react";


const AdminPage =()=>{

    const [reader, setReader] = useState("")
    const state = useSelector((state) => {
        return {
          
          books: state.book.books,
          
        };
      });
    

    return <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Book Image</th>
        <th>Book Name</th>
        <th>Author</th>
        <th>Description</th>
        <th>Reader</th>
      </tr>
    </thead>
    <tbody>
        {
            state.books&&state.books.map((element,index)=>{

                return <tr>
                <td>{index}</td>
                <td><img src={`${element.img}` alt={`img of ${element.bookName} book`}/></td>
                <td>{element.bookName}</td>
                <td>{element.author}</td>
                <td>{element.description}</td>
                <td>{element.description}</td>


              </tr>
            })
        }}
      
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
}