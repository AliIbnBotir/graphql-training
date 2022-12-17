import { useNavigate } from "react-router-dom";
import cls from "./post.module.scss";
import { ArrowBack, KeyboardArrowLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function PostPageHeader() {
  const navigate = useNavigate();
  return (
    <div className={cls.headerCont}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack htmlColor="white" />
      </IconButton>
      <h2 className="header-title">Tweet</h2>
    </div>
  );
}
