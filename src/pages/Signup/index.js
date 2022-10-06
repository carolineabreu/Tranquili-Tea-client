import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    // setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/uploadImg/uploadImg", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/signup", form
      );

      navigate("/login");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  //TODO: arrumar handleSubmit

  return (
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="formName">Name:</label>
    //   <input
    //     id="formName"
    //     name="name"
    //     type="text"
    //     value={form.name}
    //     onChange={handleChange}
    //   />

    //   <label htmlFor="formUsername">Username:</label>
    //   <input
    //     id="formUsername"
    //     name="username"
    //     type="text"
    //     value={form.username}
    //     onChange={handleChange}
    //   />

    //   <label htmlFor="formEmail">E-mail:</label>
    //   <input
    //     id="formEmail"
    //     name="email"
    //     type="email"
    //     value={form.email}
    //     onChange={handleChange}
    //   />
    //   <label htmlFor="formPassword">Senha:</label>
    //   <input
    //     id="formPassword"
    //     name="password"
    //     type="password"
    //     value={form.password}
    //     onChange={handleChange}
    //   />
    //   <label htmlFor="formConfirmPassword">Confirmação de senha</label>
    //   <input
    //     id="formConfirmPassword"
    //     type="password"
    //     name="confirmPassword"
    //     value={form.confirmPassword}
    //     onChange={handleChange}
    //   />
    //   <button type="submit">Cadastrar</button>
    // </form>

    <div class="contain py-16">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 class="text-2xl uppercase font-medium mb-1">Create an account</h2>
        <p class="text-gray-600 mb-6 text-sm">
            Register for new costumer
        </p>
        <form onSubmit={handleSubmit} action="#" method="post" autocomplete="off">
            <div class="space-y-2">
                <div>
                    <label for="name" class="text-gray-600 mb-2 block">Full Name</label>
                    <input  value={form.name} onSubmit={handleSubmit} type="text" name="name" id="name"
                        class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="Full Name"></input>
                </div>
                </div>
                <div>
            <div class="space-y-2">
                <div>
                    <label for="name" class="text-gray-600 mb-2 block">Username</label>
                    <input  value={form.username} onSubmit={handleSubmit} type="text" name="name" id="name"
                        class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="Username"></input>
                </div>
                <div>
                    <label for="email" class="text-gray-600 mb-2 block">Email address</label>
                    <input onSubmit={handleSubmit} type="email" name="email" id="email"
                        class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="youremail.@domain.com"></input>
                </div>
                <div>
                    <label for="password" class="text-gray-600 mb-2 block">Password</label>
                    <input value={form.password} onChange={handleChange} type="password" name="password" id="password"
                        class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="*******"></input>
                </div>
                <div>
                    <label  value={form.confirmPassword}
        onChange={handleChange}for="confirm" class="text-gray-600 mb-2 block">Confirm password</label>
                    <input type="password" name="confirm" id="confirm"
                        class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="*******"></input>
                </div>
            </div>
            <div class="mt-6">
                <div class="flex items-center">
                    <input type="checkbox" name="agreement" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer"></input>
                    <label for="agreement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                            href="#" class="text-primary">terms & conditions</a></label>
                </div>
            </div>
            <div class="mt-4 ">
                <button type="submit"
                    class="block w-full py-2 text-center  text-white bg-blue-400 border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                    account</button>
            </div>
            </div>
        </form>

        <div class="mt-6 flex justify-center relative">
            <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
            <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div class="mt-4 flex gap-4">
            <a href="#"
                class="w-1/2 py-2 text-center text-white bg-blue-400 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
            <a href="#"
                class="w-1/2 py-2 text-center text-white bg-green-400 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
        </div>
  

        <p class="mt-4 text-center text-gray-600">Already have account? <a href="login.html"
                class="text-primary">Login now</a></p>
    </div>
</div>

  );
}
