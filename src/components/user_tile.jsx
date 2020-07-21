import React from "react";

import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";

const UserTile = (props) => {
  const { user } = props;
  return (
    <ListItem divider button onClick={() => alert(user.email)}>
      <ListItemAvatar>
        <Avatar src={user.avatar}></Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${user.first_name} ${user.last_name}`} secondary={user.email} />
    </ListItem>
  );
};

export default UserTile;
