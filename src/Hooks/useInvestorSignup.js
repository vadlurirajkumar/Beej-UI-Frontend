import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signupInvestorUrl } from "../ApiUrls/apiUrls";
import axios from "axios";


export const useInvestorSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const url = `${process.env.REACT_APP_API_URL}${signupInvestorUrl}`;

  const signupInvestor = async (formData) => {
    setError(null);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        localStorage.setItem("investor", JSON.stringify(formData));
        localStorage.setItem("otpToken", JSON.stringify(response.data.data));
        localStorage.setItem(
          "investorId",
         response.data.data.userUid
        );
       
        dispatch({ type: "LOGIN", payload: response.data.data });
      }

      
    } catch (err) {
      setError(err.response.data.errors);
    }
  };
  return { signupInvestor, error };
};
