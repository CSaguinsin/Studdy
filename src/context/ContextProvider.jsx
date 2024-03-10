import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "../api/axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {},
});

export const ContextProvider = ({ children  }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userToken, _setUserToken] = useState(
    localStorage.getItem("auth_token") || ""
  );
  const [errors, setErrors] = useState([]);
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
    }
    _setUserToken(token);
  };
  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    setUser(data);
  };

  const login = async ({ ...data }) => {
    await csrf();
    axios
      .post("/api/login", data)
      .then(({ data }) => {
        setUser(data.user);
        setUserToken(data.token);
          new Swal({
            title: "Success",
            text: "Admin",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
         
      })
      .catch((e) => {
        if (e.response && e.response.status === 422) {
          setErrors(e.response.data.errors);
        }
      });
  };
//   const register = async ({ ...data }) => {
//     await csrf();
//     axios
//       .post("/api/register", data)
//       .then(({ data }) => {
//         setUser(data.user);
//         setUserToken(data.token);
//         new Swal({
//           title: "Success",
//           text: "Registration Successfully",
//           icon: "success",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         navigate("/login");
//       })
//       .catch((e) => {
//         if (e.response && e.response.status === 422) {
//           setErrors(e.response.data.errors);
//         }
//       });
//   };
//   const logout = () => {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: "btn btn-success",
//         cancelButton: "btn btn-danger"
//       },
//       buttonsStyling: false
//     });
//     swalWithBootstrapButtons.fire({
//       title: "Logout",
//       text: "Are you sure?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Logout",
//       cancelButtonText: "Cancel",
//       reverseButtons: true
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.post("/api/logout").then(() => {
//           swalWithBootstrapButtons.fire({
//             title: "Logout",
//             text: "Logout Successfully",
//             icon: "success",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           setUser(null);
//           navigate("/")
//           setTimeout(() => {
//           window.location.reload();
//         }, 4000);
//       });
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         swalWithBootstrapButtons.fire({
//           title: "Cancelled",
//           text: "Logout Cancelled",
//           icon: "error"
//         });
//       }
//     });
//   };

  return (
    <StateContext.Provider
      value={{
        login,
        // register,
        // logout,
        // setUser,
        // userToken,
        // setUserToken,
        // getUser,
        // user,
        errors,
        // setErrors,
        // csrf,
        // navigate
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);