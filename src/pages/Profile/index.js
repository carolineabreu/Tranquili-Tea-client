import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { Link, useNavigate, useParams } from "react-router-dom";
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
    <div class="min-h-screen bg-white flex items-center justify-center">
      <div class="px-10">
        <div class="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
          <div className="col-span-9 shadow rounded  bg-white px-6 pt-5 pb-7">
            <h4 className="text-lg font-medium capitalize mb-4">
              Profile information
            </h4>
            <div className="space-y-10git">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label text-gray-600 mb-6 text-sm htmlFor="name">Full Name:</label>
                  <input value={user.name} type="text" name="name" id="name" className="input-box" />
                </div>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input value={user.username} type="text" name="username" id="formUsername" className="input-box" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email">Email Address:</label>
                  <input value={user.email} type="email" name="email" id="Formemail" className="input-box" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email">Address:</label>
                  <input value={user.address} type="address" name="address" id="address" className="input-box" />
                </div>
                <div>
                  <label htmlFor="phone">Phone number:</label>
                  <input value={user.phone} type="phone" name="phone" id="phone" className="input-box" />
                </div>
              </div>
            </div>
            <div className="mt-4 px-20">
              <Link to="/tea-room">
                <button onSubmit={handleLogOut} type="submit" className="py-2 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Tea Room
                </button>
              </Link>
              </div>
          <div className="mt-4 px-20">
              <Link to="/profile/edit">
                <button onSubmit={handleLogOut} type="submit" className="py-2 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Edit Profile
                </button>
              </Link>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
}
