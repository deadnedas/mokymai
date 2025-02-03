import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { UseContext } from "react";
const API_URL = import.meta.env.VITE_API_URL;
function LoginForm() {
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setUser } = useContext(UserContext);

  const onSubmit = async (formData) => {
    try {
      const { data: response } = await axios.post(
        `${API_URL}/users/login`,
        formData
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
        <div>{error}</div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" {...register("email")} className="mt-1 w-full" />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="w-full">
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
