import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function RegistruotiKnyga() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/knygos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      navigate("/home");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="container">
      <form className="col-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="pavadinimas" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="pavadinimas"
            className="form-control"
            {...register("pavadinimas", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
          {errors.pavadinimas?.type === "required" && (
            <p>Title field cannot be empty</p>
          )}
          {errors.pavadinimas?.type === "minLength" && (
            <p>Title must be at least 3 characters long</p>
          )}
          {errors.pavadinimas?.type === "maxLength" && (
            <p>Title must be 100 characters max</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="autorius" className="form-label">
            Author
          </label>
          <input
            type="text"
            id="autorius"
            className="form-control"
            {...register("autorius", {
              required: true,
              pattern: /^[a-zA-Z\s]*$/g,
            })}
          />
          {errors.autorius?.type === "required" && (
            <p>Author field cannot be empty</p>
          )}
          {errors.autorius?.type === "pattern" && (
            <p>Author field can only contain letters and white space</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="kategorija" className="form-label">
            Category
          </label>
          <input
            type="text"
            id="kategorija"
            className="form-control"
            {...register("kategorija", {
              required: true,
            })}
          />
          {errors.kategorija?.type === "required" && (
            <p>Category field cannot be empty</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="kaina" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="kaina"
            className="form-control"
            {...register("kaina", {
              required: true,
              min: 1,
            })}
          />
          {errors.kaina?.type === "required" && (
            <p>Price field cannot be empty</p>
          )}
          {errors.kaina?.type === "min" && <p>Price field has to be above 0</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Cover
          </label>
          <input
            type="text"
            id="img"
            className="form-control"
            {...register("img", {
              required: true,
              pattern: /^(https?:\/\/[^\s]+)$/i,
              //   pattern:
              //     /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/g,
            })}
          />
          {errors.img?.type === "required" && (
            <p>Cover field cannot be empty</p>
          )}
          {errors.img?.type === "pattern" && (
            <p>Invalid link, please try again</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
