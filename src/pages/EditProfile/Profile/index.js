//TODO: ver como faz pra alterar a senha e o email (pra trocar o email precisaria de uma confirmação da senha.)

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../../../api/api";

// export function EditTeaRoomProfile() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     password: "",
//     email: ""
//   });

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const response = await api.get(`/user/profile`);
//         setForm({ ...response.data });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchUser();
//   }, []);

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const response = await api.patch(`/user/edit-profile`, {
//         ...form,
//       });

//       console.log(response);
//       navigate("/profile");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Customize Profile</h1>
//         <label htmlFor="formAbout">Email:</label>
//         <br />
//         <input
//           id="formEmail"
//           placeholder="Email"
//           type="email"
//           name="email"
//           onChange={handleChange}
//           value={form.email}
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
