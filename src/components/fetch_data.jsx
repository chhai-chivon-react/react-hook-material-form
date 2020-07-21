import React, { useState } from "react";
import { useFetch } from "./useFetch";
//import httpService from "../service/http_service";
import { Button } from "@material-ui/core";
import UserTile from "./user_tile";

const FetchData = () => {
  const [page, setPage] = useState(1);
  const { data, error, loading } = useFetch(
    "https://reqres.in/api/users?delay=1&&page=" + page,
    page
  );

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>{error.toString()}</h1>;
  } else {
    const { data: users } = data;
    return (
      <div>
        {users.map((user) => (
          <UserTile user={user} key={user.id} />
        ))}
        {page < data.total_pages ? (
          <Button onClick={() => setPage((page) => page + 1)}>Next</Button>
        ) : (
          <Button onClick={() => setPage((page) => page - 1)}>Previous</Button>
        )}
      </div>
    );
  }
};

export default FetchData;
