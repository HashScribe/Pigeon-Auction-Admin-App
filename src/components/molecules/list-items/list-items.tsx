import { StarBorder } from "@mui/icons-material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface IListItems {
  isMainNavOpen: boolean;
}

export const ListItems = ({ isMainNavOpen }: IListItems) => {
  const [isAuctionListOpen, setIsAuctionListOpen] = useState(false);
  const [isUserListOpen, setIsUserListOpen] = useState(false);

  const handleOnClickAuctionList = () => {
    setIsAuctionListOpen(!isAuctionListOpen);
  };

  const handleOnClickUserList = () => {
    setIsUserListOpen(!isUserListOpen);
  };

  const listItems = [
    {
      name: "Live",
      to: "live-auctions",
    },
    {
      name: "Pending",
      to: "pending-auctions",
    },
    {
      name: "Approved",
      to: "approved-auctions",
    },
    {
      name: "Rejected",
      to: "rejected-auctions",
    },
    {
      name: "Completed",
      to: "completed-auctions",
    },
  ];

  return (
    <React.Fragment>
      <ListItemButton onClick={handleOnClickAuctionList}>
        <ListItemIcon>
          <ChecklistIcon />
        </ListItemIcon>
        <ListItemText primary="Auctions" />
        {isAuctionListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {isMainNavOpen && (
        <Collapse in={isAuctionListOpen} timeout="auto" unmountOnExit>
          {listItems.map(({ name, to }) => (
            <ListItemButton sx={{ pl: 4 }} component={Link} to={to}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          ))}
        </Collapse>
      )}
      <ListItemButton onClick={handleOnClickUserList}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {isUserListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {isMainNavOpen && (
        <Collapse in={isUserListOpen} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="users">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Active Users" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Pending Users" />
          </ListItemButton>
        </Collapse>
      )}
    </React.Fragment>
  );
};

// export const mainListItems = (
//   <React.Fragment>
//     <ListItemButton>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItemButton>
//     <ListItemButton component={Link} to={"users"}>
//       <ListItemIcon>
//         <ShoppingCartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Orders" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Customers" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Reports" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <LayersIcon />
//       </ListItemIcon>
//       <ListItemText primary="Integrations" />
//     </ListItemButton>
//   </React.Fragment>
// );

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
