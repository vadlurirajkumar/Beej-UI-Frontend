import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signupFounderUrl } from "../ApiUrls/apiUrls";
import axios from "axios";

export const useFounderSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const url = `${process.env.REACT_APP_API_URL}${signupFounderUrl}`;

  const signupFounder = async (formData) => {
    setError(null);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        localStorage.setItem("otpToken", JSON.stringify(response.data.data));
        localStorage.setItem("founderId", response.data.data.userUid);
        dispatch({ type: "LOGIN", payload: response.data.data });
      }
    } catch (err) {
      setError(err.response.data.errors);
    }
  };
  return { signupFounder, error };
};
