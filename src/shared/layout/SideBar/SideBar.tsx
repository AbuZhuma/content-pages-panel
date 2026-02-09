import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useHeaderStore } from "../../store/header";
import { menu } from "../../configs";

export function Sidebar({ width }: { width: number }) {
  const {setTitle} = useHeaderStore()

  const onClickLink = (label: string) => {
    setTitle(label)
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        [`& .MuiDrawer-paper`]: { width },
      }}
    >
      <List>
        {menu.map(item => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            onClick={() => onClickLink(item.label)}
          >
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
