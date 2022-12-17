import { Link, useParams } from "react-router-dom";
import cls from "./post.module.scss";
import VerifiedIcon from "@mui/icons-material/Verified";
export default function Post({ id, index, img, body, user }) {
  const { postId } = useParams();
  return (
    <li
      className={cls.postCont}
      style={{
        borderTop: index !== 0 ? "1px solid rgb(47, 51, 54)" : "none",
      }}
    >
      {!!postId ? null : <Link to={id} className={cls.link}></Link>}
      <div className={cls.post}>
        <div className={cls.postInfo}>
          <Link to={`/user/${user?.id}`}>{user?.name}</Link> <VerifiedIcon />
        </div>
        <p>{body}</p>
        {!!img ? <img alt={img?.title} src={img?.url} /> : ""}
      </div>
    </li>
  );
}
