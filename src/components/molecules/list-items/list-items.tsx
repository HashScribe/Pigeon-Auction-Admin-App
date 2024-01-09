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
  const [isExpanded, setIsExpanded] = useState<
    Record<string, boolean> | undefined
  >();

  const navLinks = [
    {
      title: "Auctions",
      listItems: [
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
      ],
    },
    {
      title: "User",
      listItems: [
        {
          name: "All Users",
          to: "users",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      {navLinks.map((link) => {
        const isListExpanded = isExpanded?.[link.title];
        const listItemIcon =
          link.title === "Auctions" ? <ChecklistIcon /> : <GroupIcon />;
        return (
          <div key={link.title}>
            <ListItemButton
              onClick={() => {
                setIsExpanded({
                  ...isExpanded,
                  [link.title]: !isListExpanded,
                });
              }}
            >
              <ListItemIcon>{listItemIcon}</ListItemIcon>

              <ListItemText primary={link.title} />
              {isListExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {isMainNavOpen && (
              <Collapse in={isListExpanded} timeout="auto" unmountOnExit>
                {link.listItems.map(({ name, to }) => (
                  <ListItemButton
                    key={name}
                    sx={{ pl: 4 }}
                    component={Link}
                    to={to}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                ))}
              </Collapse>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};
