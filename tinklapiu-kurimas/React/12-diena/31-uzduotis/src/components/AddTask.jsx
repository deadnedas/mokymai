import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Responsce status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateDate = (value) => {
    const selectedDate = new Date(value);
    const today = new Date();
    const oneYearFromToday = new Date();
    oneYearFromToday.setFullYear(today.getFullYear() + 1);

    if (selectedDate < today) {
      return false;
    }

    if (selectedDate > oneYearFromToday) {
      return false;
    }

    return true;
  };

  return (
    <div className="container">
      <form className="col-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            {...register("name", {
              required: true,
              pattern: /^[A-Z][a-z]+$/,
            })}
          />
          {errors.name?.type === "required" && (
            <p>Name field cannot be empty</p>
          )}
          {errors.name?.type === "pattern" && (
            <p>Name must start with an uppercase letter</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Due date
          </label>
          <input
            type="date"
            id="date"
            className="form-control"
            {...register("date", {
              required: true,
              validate: validateDate,
            })}
          />
          {errors.date?.type === "required" && (
            <p>Date field cannot be empty</p>
          )}
          {errors.date?.type === "validate" && (
            <p>
              Date can't be younger than today, and cant be older than 1 years
            </p>
          )}
        </div>

        <button type="submit" className="btn btn-primary" onClick={counter}>
          Submit
        </button>
      </form>
    </div>
  );
}
