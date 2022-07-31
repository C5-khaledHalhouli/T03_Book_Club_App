import { getAllComment,addCommentAction } from "../Redux/Reducers/comment/index"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import React,{useState} from "react";


const RoomPage = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const [comment, setComment] = useState("")
  const state = useSelector((state) => {
    return {
      rooms: state.room.rooms,
      comments: state.comment.comments,
      token:state.login.token,
      userName:state.login.userName
    };
  });
  useEffect(()=>{
      axios
        .get(`http://localhost:5000/comment/${bookId}`)
        .then((result) => {
            console.log(result);
          dispatch(getAllComment(result.data));
        })
        .catch((err) => {
          console.log(err);
        });

  },[])
  const addcommentClick =()=>{
    axios
        .post(`http://localhost:5000/comment`,{
            book:bookId,comment:comment
        },{
            headers: { Authorization: `Bearer ${state.token}` }})
        .then((result) => {
            console.log(result);
          dispatch(addCommentAction({comment,user:{userName:state.userName}}));
        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (
    <div className="roomBookPage">
        
      {state.comments.length ===0? <h3>No Comments</h3>:
        state.comments.map((element) => {
          return (
            <Card>
              <Card.Header>{element.user.userName}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    
                    {element.comment}
                  </p>
                  
                </blockquote>
              </Card.Body>
            </Card>
          );
        })}
        <Card>
              <Card.Header>Add comment</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <input onChange={(e)=>{
                    setComment(e.target.value)
                  }} type="text" className="inputAddComment"/>
                  
                </blockquote>
                <button onClick={addcommentClick}>Add comment</button>
              </Card.Body>
            </Card>
    </div>
  );
};

export default RoomPage 
