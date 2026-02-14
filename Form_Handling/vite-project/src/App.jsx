import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: ""
  });

  const [error, setError] = useState("");
  const [actualAge, setActualAge] = useState(null);

  // ✅ Load LocalStorage
  useEffect(() => {
    const savedName = localStorage.getItem("Name");
    const savedAge = localStorage.getItem("Age");

    setFormData((prev) => ({
      ...prev,
      name: savedName || "",
      age: savedAge || ""
    }));
  }, []);

  // ✅ Validation
  useEffect(() => {
    if (formData.name.length > 0 && formData.name.length < 3) {
      setError("Name must be at least 3 characters long");
    } else if (!formData.age || formData.age < 0 || formData.age > 100) {
      setError("Please enter a valid age");
    } else if (formData.age <= 18) {
      setError("Age must be greater than 18");
    } else {
      setError("");
    }
  }, [formData.name, formData.age]);

  // ✅ Calculate Age from DOB
  const calculateExactAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += prevMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  // ✅ Update actual age when DOB changes
  useEffect(() => {
    if (formData.dob) {
      setActualAge(calculateExactAge(formData.dob));
    }
  }, [formData.dob]);

  // ✅ Save
  const handleSave = () => {
    if (error) return;

    localStorage.setItem("Name", formData.name);
    localStorage.setItem("Age", formData.age);

    alert("Saved Successfully ✅");
  };

  // ✅ Clear
  const handleClear = () => {
    localStorage.clear();

    setFormData({
      name: "",
      age: "",
      dob: ""
    });

    setError("");
    setActualAge(null);
  };

  return (
    <div>
      <h1>Hello, {formData.name || "Guest"} 👋</h1>

      <p>You are {formData.age || "Unknown"} years old</p>

      {/* Name */}
      <input
        type="text"
        placeholder="Enter your Name"
        className="InputName"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
      />

      {/* Age */}
      <input
        type="number"
        placeholder="Enter your Age"
        className="InputName"
        value={formData.age}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, age: e.target.value }))
        }
      />

      <p style={{ color: "red" }}>{error}</p>

      {/* Buttons */}
      <button onClick={handleSave} disabled={error}>
        Save
      </button>

      <button onClick={handleClear}>Clear</button>

      {/* DOB */}
      <h2>Actual Age Calculator 🎂</h2>

      <input
        type="date"
        className="dob-input"
        value={formData.dob}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, dob: e.target.value }))
        }
      />

      {actualAge && (
        <h3>
          Your Age is: {actualAge.years} Years, {actualAge.months} Months,{" "}
          {actualAge.days} Days
        </h3>
      )}
    </div>
  );
}

export default App;
