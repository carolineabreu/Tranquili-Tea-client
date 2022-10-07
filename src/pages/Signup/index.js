import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate, Link} from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/signup", form);

      navigate("/login");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
  
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
        <p className="text-gray-600 mb-6 text-sm">Register for new costumer</p>
        <form
          onSubmit={handleSubmit}
          autocomplete="on"
        >
          <div className="space-y-2">
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">Full Name:</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                value={form.name}
                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Full Name"></input>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <div>
                <label htmlFor="name" className="text-gray-600 mb-2 block">Username</label>
                <input
                id="formUsername"
                name="username"
                type="text"
                value={form.username} 
                onChange={handleChange}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Username"></input>
              </div>
              <div>
                <label htmlFor="email" className="text-gray-600 mb-2 block">Email address </label>
                <input
                onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="youremail.@domain.com" ></input>
              </div>
              <div>
                <label  htmlFor="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  value={form.password}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="*******">
                </input>
              </div>
              <div>
                <label
                  htmlFor="confirm"
                  className="text-gray-600 mb-2 block"
                >
                  Confirm password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="confirmPassword"
                  id="formConfirmPassword"
                  value={form.password}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="*******"
                ></input>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                ></input>
                <label
                  for="agreement"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  I have read and agree to the{" "}
                  <Link to="/" className="text-primary">
                    terms & conditions
                  </Link>
                </label>
              </div>
            </div>
            <div className="mt-4 ">
              <Link to="/login">
              <button
                type="submit"
                className="block w-full py-2 text-center  text-white bg-blue-400 border border-primary rounded hover:bg-blue-700 hover:text-primary transition uppercase font-roboto font-medium"
              >
                create account
              </button>
              </Link>
            </div>
          </div>
        </form>

        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or signup with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="mt-4 flex gap-4">
          <Link
            to="/"
            className="w-1/2 py-2 text-center text-white bg-blue-400 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            facebook
          </Link>
          <Link
            to="/"
            className="w-1/2 py-2 text-center text-white bg-green-400 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          >
            google
          </Link>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Already have account?{" "}
          <Link to="/" className="text-primary">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
}
