import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { Link, useNavigate, useParams } from "react-router-dom";
//import { AuthContext } from "../../contexts/authContext";

export function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");

        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  // const { loggedInUser } = useContext(AuthContext);

  // console.log(loggedInUser);

  // function handleLogOut() {
  //   localStorage.removeItem("loggedInUser");
  //   navigate("/");
  // }

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <Link to="/tea-room">
        <button>Tea Room</button>
      </Link>
      {/* <button onClick={handleLogOut}>Sair</button> */}
    </>
  );
}
