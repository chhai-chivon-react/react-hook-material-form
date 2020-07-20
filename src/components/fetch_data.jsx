import React, { useState } from "react";
import { useFetch } from "./useFetch";
import httpService from "../service/http_service";
import { ListItem, ListItemAvatar, Avatar, ListItemText, Button } from "@material-ui/core";
import {} from "@material-ui/icons";

const FetchData = () => {
  const [index, setIndex] = useState(1);
  const { data, error, loading } = useFetch(() => {
    return fetchUser(index);
  }, index);

  const fetchUser = () => {
    return httpService.get("https://reqres.in/api/users/" + index);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>{error.toString()}</h1>;
  } else {
    const { data: user } = data;
    return (
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={user.avatar}></Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${user.first_name} ${user.last_name}`} secondary={user.email} />
        </ListItem>
        <Button onClick={() => setIndex((index) => index + 1)}>Next</Button>
      </div>
    );
  }
};

export default FetchData;
