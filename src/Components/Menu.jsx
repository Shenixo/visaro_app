import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useLocation } from "react-router-dom";

const DropMenu = React.forwardRef(({ list = [] }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const navigate = useNavigate();

  // Get current path and determine active item
  const currentPath = location.pathname;
  
  const getActiveIndex = () => {
    if (currentPath.includes("/service/eb-1a")) return 0;
    if (currentPath.includes("/service/eb-2nw")) return 1;
    if (currentPath.includes("/service/o1-visa")) return 2;
    return -1;
  };

  const activeIndex = getActiveIndex();
console.log(location.pathname)
  const handleClick = (anchor) => {
    setAnchorEl(anchor);
  };

  const handleClose = (nav) => {
    console.log({nav})
    setAnchorEl(null);
    navigate(
      nav === 0
        ? "/service/eb-1a"
        : nav === 1
        ? "/service/eb-2nw"
        : nav === 2
        ? "/service/o1-visa"
        : location.pathname
    );
  };

  React.useImperativeHandle(ref, () => ({
    openMenu: (anchor) => handleClick(anchor),
    closeMenu: handleClose,
  }));

  return (
    <div>
      <Menu
        PaperProps={{
          elevation: 1,
          sx: {
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            borderRadius: 2,
          },
        }}
        id="menu-dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-dropdown",
        }}
      >
        {list.map((l, i) => (
          <MenuItem
            key={i}
            onClick={() => handleClose(i)}
            sx={{ 
              paddingInline: "2rem", 
              color: activeIndex === i ? "#EF6223" : "#090B19",
              backgroundColor: activeIndex === i ? "#FFF5F0" : "transparent",
              "&:hover": {
                backgroundColor: activeIndex === i ? "#FFF5F0" : "#F5F5F5",
              }
            }}
          >
            {l}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
});

export default DropMenu;