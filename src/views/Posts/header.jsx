import { useSearchParams } from "react-router-dom";
import cls from "./posts.module.scss";
import { IconButton, Input, InputBase, Paper, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
export default function PostsPageHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className={cls.postPageHeader}>
      <div className={cls.searchInput}>
        <Paper
          component="form"
          sx={{
            p: "2px 12px",
            display: "flex",
            alignItems: "center",
            width: 500,
            height: 36,
            borderRadius: 20,
            backgroundColor: "rgb(32, 35, 39)",
          }}
          fullWidth
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <Search htmlColor="white" />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            value={searchParams.get("search")}
            onChange={(e) => setSearchParams({ search: e.target.value })}
            fullWidth
          />
        </Paper>
      </div>
    </div>
  );
}
