import UserContext from "../UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const changeUsername = (username) => {
    console.log("Changing username to:", username);
    setUser({ ...user, name: username });
  };

  const changeRole = (role) => {
    console.log("Changing role to:", role);
    setUser({ ...user, role: role });
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    changeUsername(data.name);
    changeRole(data.role);
  };

  return (
    <div className="login-form">
      <div>Login form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Name:
            <input {...register("name")} />
          </label>
        </div>
        <div>
          <label>
            Role:
            <input {...register("role")} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
