import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute(props) {
  const { component: Component } = props;
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    console.log(parsedUser);
    // if (parsedUser.user.role !== "USER") {
    //   navigate("/login");
    // }
    if (!loggedInUser) {
      return navigate("/login");
    }
  });

  return <Component />;
}


