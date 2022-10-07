import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });
      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      console.log(response.data);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">welcome back customer</p>
        <form onSubmit={handleSubmit} autoComplete="on">
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                id="email"
                value={form.email}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail.@domain.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                id="password"
                value={form.password}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="*******"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <Link to="/" className="text-primary">
              Forgot password
            </Link>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or login with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
        </div>
        <div className="mt-4 flex gap-4">
          <Link
            to="/"
            className="w-1/2 py-2 text-center text-white bg-blue-400 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-800"
          >
            facebook
          </Link>
          <Link
            to="/"
            className="w-1/2 py-2 text-center text-white bg-green-400 rounded uppercase font-roboto font-medium text-sm hover:bg-green-800"
          >
            google
          </Link>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Don't have account?{" "}
          <Link to="/signup" className="text-primary">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}
