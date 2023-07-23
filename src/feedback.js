import React, { useState } from "react";
import axios from "axios";

//const BASE_URL = "/api"; // Assuming your backend runs on the same domain as your frontend

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/addFeed", { message: feedback });
      console.log("Feedback submitted:", response.data);
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
