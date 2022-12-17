import { useEffect, useState } from "react";
import { request } from "../../utils/http-client";
import Header from "../../components/Header";
import PostsPageHeader from "./header";
import cls from "./posts.module.scss";
import Post from "../../components/Post";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    request({
      method: "get",
      url: "",
      params: {
        query: `query getAllPosts {
          allPosts{
            id
            title
            body
            User {
              id
              name
            }
            Image {
              id
              title
              url
            }
          }
        }
    `,
      },
    }).then((res) => setPosts(res.data?.allPosts));
  }, []);
  return (
    <div className={cls.postsCont}>
      <Header>
        <PostsPageHeader />
      </Header>
      <ul className={cls.postList}>
        {posts?.map((post, index) => (
          <Post
            index={index}
            key={post?.id}
            id={post?.id}
            img={post?.Image}
            title={post?.title}
            body={post?.body}
            user={post.User}
          />
        ))}
      </ul>
    </div>
  );
}
