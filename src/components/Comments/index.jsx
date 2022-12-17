import { Link } from "react-router-dom";
import cls from "./comments.module.scss";
import { Delete, Edit, Remove, Verified } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import WriteComment from "../WriteComment";
import { useState } from "react";
import { request } from "../../utils/http-client";

export default function Comments({ commentData, setComments }) {
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState(commentData);
  const formattedDate = (date) => new Date(date).toLocaleDateString("en-US");
  function deleteComment(id) {
    request({
      method: "post",
      url: "",
      data: {
        query: `mutation deleteComment {
        removeComment(id: 997){
          id
        }
      }`,
      },
    }).then((res) => {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    });
  }
  return (
    <li className={cls.comment} key={comment?.id}>
      <div className={cls.comment__info}>
        <div>
          <Link to={`/user/${comment?.User?.id}`} className={cls.comment__user}>
            {comment?.User?.name}
          </Link>
          <Verified />
        </div>
        <div className={cls.comment__date}>{formattedDate(comment?.date)}</div>
        {comment?.User?.id === "6" && (
          <div>
            <IconButton onClick={() => setEdit(true)}>
              <Edit color="primary" />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => deleteComment(comment?.id)}
            >
              <Delete />
            </IconButton>
          </div>
        )}
      </div>
      <div className={cls.comment__body}>{comment?.body}</div>
      {edit && (
        <WriteComment
          comment={comment}
          setComment={setComment}
          setEdit={setEdit}
        />
      )}
    </li>
  );
}
