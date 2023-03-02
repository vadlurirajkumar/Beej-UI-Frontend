import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import {
  investorPersonalDetailsUrl,
  investorKycDetailsUrl,
  investorEducationDetailsUrl,
  investorRelativeDetailsUrl,
} from "../ApiUrls/apiUrls";

import personalImg from "../Assets/person.png";

export const InvestorSignupContext = createContext();

const InvestorSignupContextProvider = ({ children }) => {
  const navigate = useNavigate();

  //Token for the signup up investor
  const investorId = localStorage.getItem("investorId");

  //First Signup Form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumber: "",
    countryCode: "",
  });
  const [country, setCountry] = useState("");
  const [signupInvestorError, setSignupInvestorError] = useState({});
  const [isSignupInvestorSubmit, setIsSignupInvestorSubmit] = useState(false);

  //Change Tab
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    e.preventDefault();
    setValue(val);
  };

  //Personal Details
  const [personalDetails, setPersonalDetails] = useState({
    gender: "",
    website: "",
    currentCompany: "",
    pastInvestment: "",
    country: "",
    state: "",
    linkedin: "",
    investmentAllocated: "",
    achievementWish: "",
    yourHeadline: "",
    yourBio: "",
    industry: "",
  });
  const [personalFormError, setPersonalFormError] = useState({});
  const [isPersonalFormSubmit, setIsPersonalFormSubmit] = useState(false);

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePersonalDetailsSubmit = (e) => {
    e.preventDefault();
    setIsPersonalFormSubmit(true);
    setPersonalFormError(handlePersonalFormValidation(personalDetails));
  };

  const handlePersonalFormValidation = (personalDetails) => {
    const errors = {};
    const {
      gender,
      website,
      currentCompany,
      pastInvestment,
      country,
      state,
      linkedin,
      investmentAllocated,
      achievementWish,
      yourHeadline,
      yourBio,
      industry,
    } = personalDetails;

    if (!website) {
      errors.website = "This field is required!";
    }
    if (!gender) {
      errors.gender = "This field is required!";
    }
    if (!currentCompany) {
      errors.currentCompany = "This field is required!";
    }
    if (!pastInvestment) {
      errors.pastInvestment = "This field is required!";
    }
    if (!country) {
      errors.country = "This field is required!";
    }
    if (!state) {
      errors.state = "This field is required!";
    }

    if (!linkedin) {
      errors.linkedin = "This field is required!";
    }
    if (!investmentAllocated) {
      errors.investmentAllocated = "This field is required!";
    }
    if (!achievementWish) {
      errors.achievementWish = "This field is required!";
    }
    if (!yourHeadline) {
      errors.yourHeadline = "This field is required!";
    }
    if (!yourBio) {
      errors.yourBio = "This field is required!";
    }
    if (!industry) {
      errors.industry = "This field is required!";
    }

    return errors;
  };

  // API CALL
  const postPersonalDetails = async (personalDetails) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}${investorPersonalDetailsUrl}${investorId}`;
      const response = await axios.post(url, personalDetails);
      if (response) {
        setPersonalDetails({
          gender: "",
          website: "",
          currentCompany: "",
          pastInvestment: "",
          country: "",
          state: "",
          linkedin: "",
          investAllocatedYear: "",
          achievementWish: "",
          yourHeadline: "",
          yourBio: "",
          industry: "",
        });
        setValue(value + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log(personalDetails);
      }
    } catch (err) {
      alert(`Error - ${err.message}. Please try again!`);
    }
  };

  useEffect(() => {
    if (Object.keys(personalFormError).length === 0 && isPersonalFormSubmit) {
      postPersonalDetails(personalDetails);
    }
  }, [personalFormError]);

  //Image
  const [personalImage, setPersonalImage] = useState(personalImg);

  function handlePersonalImageChange(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setPersonalImage(event.target.result);
    };
    reader.readAsDataURL(selectedFile);
  }

  // KYC
  const [kycformData, setKycFormData] = useState({
    investorType: "",
    panName: "",
    panNumber: "",
    kycAddress: "",
    pinCode: "",
    country: "",
    relation: "",
    fatherSpouseName: "",
    occupation: "",
    bankDetails: {
      bankType: "",
      bankName: "",
      accountNumber: "",
      branch: "",
      swiftCode: "",
      ifscCode: "",
    },
  });
  const [kycFormError, setKycFormError] = useState({});
  const [isKycFormSubmit, setIsKycFormSubmit] = useState(false);

  const handleKycFormChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "bankType" ||
      name === "bankName" ||
      name === "accountNumber" ||
      name === "branch" ||
      name === "swiftCode" ||
      name === "ifscCode"
    ) {
      setKycFormData({
        ...kycformData,
        bankDetails: {
          ...kycformData.bankDetails,
          [name]: value,
        },
      });
    } else {
      setKycFormData({ ...kycformData, [name]: value });
    }
  };

  const handleKycFormSubmit = (e) => {
    e.preventDefault();
    setIsKycFormSubmit(true);
    setKycFormError(handleKycFormValidation(kycformData));
  };

  const handleKycFormValidation = (kycformData) => {
    const errors = {};
    const {
      investorType,
      panName,
      panNumber,
      kycAddress,
      pinCode,
      country,
      relation,
      fatherSpouseName,
      occupation,
      bankDetails,
    } = kycformData;

    if (!investorType) {
      errors.investorType = "This field is required!";
    }
    if (!panName) {
      errors.panName = "This field is required!";
    }
    if (!panNumber) {
      errors.panNumber = "This field is required!";
    }
    if (!kycAddress) {
      errors.kycAddress = "This field is required!";
    }
    if (!pinCode) {
      errors.pinCode = "This field is required!";
    }
    if (!country) {
      errors.country = "This field is required!";
    }
    if (!relation) {
      errors.relation = "This field is required!";
    }
    if (!fatherSpouseName) {
      errors.fatherSpouseName = "This field is required!";
    }
    if (!occupation) {
      errors.occupation = "This field is required!";
    }
    if (!bankDetails.bankType) {
      errors.bankType = "This field is required!";
    }
    if (!bankDetails.bankName) {
      errors.bankName = "This field is required!";
    }
    if (!bankDetails.accountNumber) {
      errors.accountnumber = "This field is required!";
    }
    if (!bankDetails.ifscCode) {
      errors.ifsccode = "This field is required!";
    }
    if (!bankDetails.swiftCode) {
      errors.swiftcode = "This field is required!";
    }
    if (!bankDetails.branch) {
      errors.branch = "This field is required!";
    }

    return errors;
  };

  // API call
  const postKycDetails = async (kycformData) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}${investorKycDetailsUrl}${investorId}`;
      const response = await axios.post(url, kycformData);

      if (response) {
        setKycFormData({
          investorType: "",
          panName: "",
          panNumber: "",
          kycAddress: "",
          pinCode: "",
          country: "",
          relation: "",
          fatherSpouseName: "",
          occupation: "",
          bankDetails: {
            bankType: "",
            bankName: "",
            accountNumber: "",
            branch: "",
            swiftCode: "",
            ifscCode: "",
          },
        });
        setValue(value + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      alert(`Error - ${err.message}. Please try again!`);
    }
  };

  useEffect(() => {
    if (Object.keys(kycFormError).length === 0 && isKycFormSubmit) {
      postKycDetails(kycformData);
    }
  }, [kycFormError]);

  // Relative Details
  const [relativeDetails, setRelativeDetails] = useState({
    relation: "",
    name: "",
    countryCode: "",
    phone: "",
    email: "",
    panNumber: "",
    fatherName: "",
    address: "",
    occupation: "",
    pincode: "",
    country: "",
    bankType: "",
    bankname: "",
    accountNumber: "",
    branch: "",
    ifsccode: "",
    swiftcode: "",
  });
  const [relatives, setRelatives] = useState([]);

  const [relativeDetailsError, setRelativeDetailsError] = useState({});
  const [isrelativeDetailsSubmit, setIsRelativeDetailsSubmit] = useState(false);

  const [relativesError, setRelativesError] = useState({});
  const [isRelativesError, setIsRelativesError] = useState(false);

  const handleRelativeChange = (e) => {
    setRelativeDetails({ ...relativeDetails, [e.target.name]: e.target.value });
  };

  const addRelative = (e) => {
    e.preventDefault();
    setRelativeDetailsError(handleRelativeDetailsValidation(relativeDetails));
    setIsRelativeDetailsSubmit(true);
  };

  const deleteRelative = (item) => {
    const newData = relatives.filter((data) => {
      return data !== item;
    });
    setRelatives(newData);
  };

  const handleRelativeDetailsValidation = (relativeDetails) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;
    const {
      relation,
      name,
      countryCode,
      phone,
      email,
      panNumber,
      fatherName,
      address,
      occupation,
      pincode,
      country,
      bankType,
      bankname,
      accountNumber,
      branch,
      ifsccode,
      swiftcode,
    } = relativeDetails;

    if (!relation) {
      errors.relation = "This field is required!";
    }
    if (!name) {
      errors.name = "This field is required!";
    }
    if (!countryCode) {
      errors.countryCode = "This field is required!";
    }
    if (!phone) {
      errors.phone = "This field is required!";
    }
    if (!email) {
      errors.email = "This field is required!";
    }
    if (!phoneRegex.test(phone)) {
      errors.phone = "Please provide a valid phone number!";
    }
    if (!emailRegex.test(email)) {
      errors.email = "Please provide a valid email!";
    }
    if (!address) {
      errors.address = "This field is required!";
    }
    if (!fatherName) {
      errors.fatherName = "This field is required!";
    }
    if (!panNumber) {
      errors.panNumber = "This field is required!";
    }
    if (!swiftcode) {
      errors.swiftcode = "This field is required!";
    }
    if (!ifsccode) {
      errors.ifsccode = "This field is required!";
    }
    if (!branch) {
      errors.branch = "This field is required!";
    }
    if (!accountNumber) {
      errors.accountNumber = "This field is required!";
    }
    if (!bankname) {
      errors.bankname = "This field is required!";
    }
    if (!bankType) {
      errors.bankType = "This field is required!";
    }
    if (!country) {
      errors.country = "This field is required!";
    }
    if (!pincode) {
      errors.pincode = "This field is required!";
    }
    if (!occupation) {
      errors.occupation = "This field is required!";
    }
    return errors;
  };

  useEffect(() => {
    if (
      Object.keys(relativeDetailsError).length === 0 &&
      isrelativeDetailsSubmit
    ) {
      setRelativeDetails({
        relation: "",
        name: "",
        countryCode: "",
        phone: "",
        email: "",
        panNumber: "",
        fatherName: "",
        address: "",
        occupation: "",
        pincode: "",
        country: "",
        bankType: "",
        bankname: "",
        accountNumber: "",
        branch: "",
        ifsccode: "",
        swiftcode: "",
      });
      setRelatives([...relatives, relativeDetails]);
    }
  }, [relativeDetailsError]);

  const handleRelativeSubmit = (e) => {
    e.preventDefault();
    setRelativesError(handleRelativesValidation(relatives));
    setIsRelativesError(true);
  };

  const handleRelativesValidation = (relatives) => {
    const errors = {};

    if (relatives.length === 0) {
      errors.message = "Please add atleast one relative";
    }

    return errors;
  };

  //Api Call
  const postRelativeDetails = async (relatives) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}${investorRelativeDetailsUrl}${investorId}`;
      const response = axios.post(url, relatives);
      if (response) {
        setValue(value + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      alert(`Error - ${err.message}. Please try again!`);
    }
  };

  useEffect(() => {
    if (Object.keys(relativesError).length === 0 && isRelativesError) {
      postRelativeDetails(relatives);
    }
  }, [relativesError]);

  // Educational Details
  const [educationDetails, setEducationDetails] = useState({
    institute: "",
    degree: "",
    yearTo: "",
    yearFrom: "",
  });
  const [eductionDetailsList, setEductionDetailsList] = useState([]);
  const [educationDetailsError, setEducationDetailsError] = useState({});
  const [isEducationDetailsSubmit, setIsEducationDetailsSubmit] =
    useState(false);
  const [educationDetailsListError, setEducationDetailsListError] = useState(
    {}
  );
  const [isEducationDetailsListSubmit, setIsEducationDetailsListSubmit] =
    useState(false);

  const handleEducationChange = (e) => {
    setEducationDetails({
      ...educationDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddEducation = (e) => {
    e.preventDefault();
    setIsEducationDetailsSubmit(true);
    setEducationDetailsError(
      handleEducationDetailsValidation(educationDetails)
    );
  };

  const handleEducationDelete = (item) => {
    const newList = eductionDetailsList.filter((data) => {
      return data !== item;
    });

    setEductionDetailsList(newList);
  };

  const handleEducationDetailsValidation = (educationDetails) => {
    const errors = {};
    const { institute, degree, yearTo, yearFrom } = educationDetails;

    if (!institute) {
      errors.institute = "This field is required!";
    }
    if (!degree) {
      errors.degree = "This field is required!";
    }
    if (!yearTo) {
      errors.yearTo = "This field is required!";
    }
    if (!/^\d+$/.test(yearTo)) {
      errors.yearTo = "Please enter year in number!";
    }
    if (!yearFrom) {
      errors.yearFrom = "This field is required!";
    }
    if (!/^\d+$/.test(yearFrom)) {
      errors.yearFrom = "Please enter year in number!";
    }
    return errors;
  };

  useEffect(() => {
    if (
      Object.keys(educationDetailsError).length === 0 &&
      isEducationDetailsSubmit
    ) {
      setEductionDetailsList([...eductionDetailsList, educationDetails]);
      setEducationDetails({
        institute: "",
        degree: "",
        yearTo: "",
        yearFrom: "",
      });
    }
  }, [educationDetailsError]);

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    setIsEducationDetailsListSubmit(true);
    setEducationDetailsListError(
      handleEducationDetailsListValidation(eductionDetailsList)
    );
  };

  const handleEducationDetailsListValidation = (eductionDetailsList) => {
    const errors = {};
    if (eductionDetailsList.length === 0) {
      errors.message = "Please add atleast one eduction detail!";
    }
    return errors;
  };

  //API Call
  const postEducationDetails = async (eductionDetailsList) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}${investorEducationDetailsUrl}${investorId}`;
      const response = axios.post(url, eductionDetailsList);
      if (response) {
        navigate("/investor-profile/thankyou");
      }
    } catch (err) {
      alert(`Error - ${err.message}. Please try again!`);
    }
  };

  useEffect(() => {
    if (
      Object.keys(educationDetailsListError).length === 0 &&
      isEducationDetailsListSubmit
    ) {
      postEducationDetails(eductionDetailsList);
    }
  }, [educationDetailsListError]);

  return (
    <InvestorSignupContext.Provider
      value={{
        value,
        handleTabs,

        formData,
        setFormData,
        country,
        setCountry,
        signupInvestorError,
        setSignupInvestorError,
        isSignupInvestorSubmit,
        setIsSignupInvestorSubmit,
        personalImage,
        handlePersonalImageChange,

        personalDetails,
        personalFormError,
        handlePersonalDetailsChange,
        handlePersonalDetailsSubmit,

        educationDetails,
        eductionDetailsList,
        educationDetailsError,
        educationDetailsListError,
        handleEducationDelete,
        handleAddEducation,
        handleEducationSubmit,
        handleEducationChange,

        kycformData,
        kycFormError,
        handleKycFormChange,
        handleKycFormSubmit,

        relativeDetails,
        relatives,
        relativeDetailsError,
        relativesError,
        addRelative,
        deleteRelative,
        handleRelativeChange,
        handleRelativeSubmit,
      }}
    >
      {children}
    </InvestorSignupContext.Provider>
  );
};

export default InvestorSignupContextProvider;
