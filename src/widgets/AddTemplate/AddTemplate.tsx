import { useState, type MouseEvent } from "react";
import type { AddTemplateProps } from "./types";
import { TemplatesMap, type ContentDataType } from "../../types/content.types";
import { Box, Button, Menu, MenuItem } from "@mui/material";

export const AddTemplate = ({ onAdd }: AddTemplateProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (type: ContentDataType) => {
    onAdd(type);
    handleClose();
  };

  return (
    <Box>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        Добавить блок
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {TemplatesMap.map((template) => (
          <MenuItem
            key={template.type}
            onClick={() => handleSelect(template.type)}
          >
            {template.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
