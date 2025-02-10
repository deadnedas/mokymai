import { useState } from "react";
import "./App.css";
import PetAppointmentForm from "./components/PetAppointmentForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={toggleForm}
          className="mb-4 bg-[rgb(83,45,166)] text-white py-2 px-4 rounded hover:bg-[#412382]"
        >
          {showForm ? "Hide Appointment Form" : "+ Add Appointment"}
        </button>
        {showForm && <PetAppointmentForm />}
      </div>
    </>
  );
}

export default App;
