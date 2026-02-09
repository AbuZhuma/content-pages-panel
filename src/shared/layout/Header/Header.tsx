import { AppBar, Toolbar, Typography } from "@mui/material";
import { useHeaderStore } from "../../store/header/header.store";

export function Header() {
  const {title} = useHeaderStore()
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}
