import {
  Button,
  InputBase,
  Paper,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import cls from "./writeComment.module.scss";
import { useState } from "react";
import { request } from "../../utils/http-client";
import { useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

export default function WriteComment({ setComments, comment, setComment, setEdit }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { comment: comment?.body || "" },
  });
  const { postId } = useParams();
  function createComment(body) {
    request({
      method: "post",
      url: "",
      data: {
        query: `mutation createComment {
      createComment(post_id: "${postId}", body: "${body}", date: "${new Date()}", user_id: "${6}") {
        id
        body
        User {
          id
          name
        }
      }
    }
    `,
      },
    }).then((res) => {
      setComments((prev) => [res.data.createComment, ...prev]);
      reset();
    });
  }
  function editComment(body) {
    request({
      method: "post",
      url: "",
      data: {
        query: `mutation editComment {
          updateComment(id: "${
            comment?.id
          }", post_id: "${postId}", body: "${body}", date: "${new Date()}", user_id: "${6}") {
        id
        body
        User {
          id
          name
        }
      }
    }
    `,
      },
    }).then((res) => {
      console.log(res.data.updateComment);
      setComment(res.data.updateComment);
      setEdit(false);
    });
  }
  function onSubmit(data) {
    if (!!comment?.id) {
      //edit comment
      editComment(data.comment);
    } else {
      //create comment
      createComment(data.comment);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper
        sx={{
          p: "2px 12px",
          display: "flex",
          alignItems: "center",
          height: 36,
          backgroundColor: "transparent",
        }}
      >
        <Controller
          control={control}
          name="comment"
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error, isTouched },
          }) => (
            <InputBase
              onChange={onChange}
              sx={{ ml: 1, flex: 1, color: "white", fontSize: 18 }}
              placeholder="Write a comment..."
              value={value}
              fullWidth
            />
          )}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={cls.form__btn}
        >
          Comment
        </Button>
      </Paper>
    </form>
  );
}
