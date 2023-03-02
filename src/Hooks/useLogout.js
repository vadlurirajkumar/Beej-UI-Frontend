import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {

    const {dispatch} = useAuthContext()
  const logout = () => {
    //remove user from storage
    localStorage.removeItem("otpToken");
localStorage.removeItem("founderId");
localStorage.removeItem("investorId");
localStorage.removeItem("investor");


    //update context
    dispatch({type:"LOGOUT"})
  };



  return {logout}
};
