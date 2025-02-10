// 1 CREATE SIGNUP/LOGIN FROM FROM VIDEO ON TEAMS
// 2 CREATE TO SHOW ALL APPOINTEMTS IF ADMIN AND SHOW ONLY YOUR APPOINTMENTS BASED ON USER
// 3 CREATE A WAY TO DELETE/EDIT APPOINTMENT BASED ON ROLE
// 4 CREATE A WAY TO ADD A RATING FROM JIRA OLD PROJECT
// 5 ADD A SEARCH//FILTER

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function PetAppointmentForm() {
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data: response } = await axios.post(
        `${API_URL}/appointments`,
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError("Failed to submit the form");
    }
  };

  return (
    <div className="flex justify-center items-center w-[90%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-3xl p-6 border border-gray-300 rounded-lg shadow-lg bg-white"
      >
        <div>{error}</div>
        <div>
          <label className="block text-sm font-medium">Pet Name</label>
          <input
            type="text"
            {...register("petName", { required: "Pet name is required" })}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            placeholder="Enter pet name"
          />
          {errors.petName && (
            <p className="text-red-500 text-sm">{errors.petName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Pet Owner</label>
          <input
            type="text"
            {...register("petOwner", { required: "Owner's name is required" })}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            placeholder="Enter owner's name"
          />
          {errors.petOwner && (
            <p className="text-red-500 text-sm">{errors.petOwner.message}</p>
          )}
        </div>

        <div className="flex space-x-4">
          <div className="w-full">
            <label className="block text-sm font-medium">Date and Time</label>
            <input
              type="datetime-local"
              {...register("appointmentTime", {
                required: "Date and time are required",
              })}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
            />
            {errors.appointmentTime && (
              <p className="text-red-500 text-sm">
                {errors.appointmentTime.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Appointment Notes</label>
          <textarea
            {...register("appointmentNotes")}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            placeholder="Enter appointment notes"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 bg-[rgb(83,45,166)] text-white py-2 px-4 rounded hover:bg-[#412382]"
          >
            Add Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default PetAppointmentForm;
