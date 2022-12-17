import { useParams } from "react-router-dom";
import cls from "./post.module.scss";
import Header from "../../components/Header";
import PostPageHeader from "./header";
import { useEffect, useState } from "react";
import { request } from "../../utils/http-client";
import Post from "../../components/Post";
import Comments from "../../components/Comments";
import WriteComment from "../../components/WriteComment";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    request({
      method: "get",
      url: "",
      params: {
        query: `query getPost{
      Post(id:"${postId}"){
        id
        title
        body
        User{
          id
          name
        }
        Image{
          id
          title
          url
        }
        Comments{
          id
          date
          body
          User{
            id
            name
          }
        }
      }
    }`,
      },
    }).then((res) => {
      setPost(res.data.Post);
      setComments(res.data.Post.Comments);
    });
  }, []);
  return (
    <div className={cls.postCont}>
      <Header>
        <PostPageHeader />
      </Header>
      <Post
        img={post?.Image}
        user={post?.User}
        id={post?.id}
        body={post?.body}
      />
      <WriteComment setComments={setComments} />

      <ul className={cls.comment}>
        {comments?.map((comment) => (
          <Comments commentData={comment} setComments={setComments} />
        ))}
      </ul>
    </div>
  );
}
