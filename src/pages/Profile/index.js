import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

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

  const { loggedInUser } = useContext(AuthContext);

  console.log(loggedInUser);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <div>
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h4 className="text-lg font-medium capitalize mb-4">
            Profile information
          </h4>
          <div>
            <label htmlFor="name">Full name:</label>
            <input
              value={user.name}
              type="text"
              name="name"
              id="name"
              className="input-box block w-full border mb-4 text-sm bg:blue-100 border-gray-300 px-4 py-3 text-gray-600 rounded focus:ring-0 focus:border-primary focus:bg-blue-100 placeholder-gray-400"
              disabled
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              value={user.username}
              type="text"
              name="username"
              id="formUsername"
              className="input-box block w-full border mb-4 text-sm border-gray-300 px-4 py-3 text-gray-600 rounded focus:ring-0 focus:border-primary focus:bg-blue-100 placeholder-gray-400"
              disabled
            />
          </div>

          <div>
            <label htmlFor="phone">Phone number:</label>
            <input
              value={user.phoneNumber}
              type="tel"
              name="phone"
              id="phone"
              className="input-box input-box input-box block w-full border mb-4 text-sm border-gray-300 px-4 py-3 text-gray-600 rounded focus:ring-0 focus:border-primary focus:bg-blue-100 placeholder-gray-400"
              disabled
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              value={user.email}
              type="email"
              name="email"
              id="email"
              className="input-box input-box input-box block w-full border mb-4 text-sm border-gray-300 px-4 py-3 text-gray-600 rounded focus:ring-0 focus:border-primary focus:bg-blue-100 placeholder-gray-400"
              disabled
            />
          </div>

          <div>
            <label htmlFor="address">Address:</label>
            <input
              value={user.address}
              type="text"
              name="address"
              id="address"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:bg-blue-100 placeholder-gray-400"
              disabled
            />
          </div>

          <div className="mt-4 flex gap-4">
            <Link
              to="/tea-room"
              className="w-1/2 py-2 text-center text-white bg-blue-400 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-600"
            >
              tea room
            </Link>
            <Link
              to="/profile/edit"
              className="w-1/2 py-2 text-center text-white bg-green-400 rounded uppercase font-roboto font-medium text-sm hover:bg-green-600"
            >
              edit profile
            </Link>
            <button
              onClick={handleLogOut}
              className="w-1/2 py-2 text-center text-white bg-red-400 rounded uppercase font-roboto font-medium text-sm hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
