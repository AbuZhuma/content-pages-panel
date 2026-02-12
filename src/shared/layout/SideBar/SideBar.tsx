import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { menu } from "../../configs";

export function Sidebar({ width }: { width: number }) {
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
