import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  founderBasicDetailsUrl,
  founderBusinessDetailsUrl,
  founderTeamDetailsUrl,
} from "../ApiUrls/apiUrls";
import DisplayImg from "../Assets/imageupload.png";


export const FounderSignupContext = createContext();

const FounderSignupContextProvider = ({ children }) => {
  const navigate = useNavigate();

  //Token for the signup up investor
  const founderId = localStorage.getItem("founderId");

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

  const [signupFounderError, setSignupFounderError] = useState({});
  const [isSignupFounderSubmit, setIsSignupFounderSubmit] = useState(false);

  //Changing Tabs
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  // Basic information
  const [basicform, setBasicForm] = useState({
    brandName: "",
    registeredCompanyName: "",
    yearOfIncorporation: "",
    startupLinkedinUrl: "",
    companyRole: "",
    websiteUrl: "",
    productDemoUrl: "",
    briefDescriptionOfProduct: "",
    briefDescriptionOfCompany: "",
    typeOfIndustry: "",
    otherIndustrySector: "",
    fundingCycle: "",
    typeOfMembership: "",
    bankType: "",
    bankName: "",
    accountNumber: "",
    bankBranch: "",
    IFSCcode: "",
    SwiftCode: "",
  });
  const [basicFormError, setBasicFormError] = useState({});
  const [isBasicFormSubmit, setIsBasicFormSubmit] = useState(false);

  function handleBasicFormChange(e) {
    const { name, value } = e.target;
    setBasicForm({
      ...basicform,
      [name]: value,
    });
  }

  function handleBasicFormSubmit(e) {
    e.preventDefault();
    setBasicFormError(handleBasicFormValidation(basicform));
    setIsBasicFormSubmit(true);
  }

  const handleBasicFormValidation = (basicform) => {
    const {
      brandName,
      registeredCompanyName,
      yearOfIncorporation,
      startupLinkedinUrl,
      companyRole,
      websiteUrl,
      productDemoUrl,
      briefDescriptionOfProduct,
      briefDescriptionOfCompany,
      typeOfIndustry,
      fundingCycle,
      typeOfMembership,
      bankType,
      bankName,
      accountNumber,
      bankBranch,
      IFSCcode,
      SwiftCode,
    } = basicform;

    const errors = {};

    if (!brandName) {
      errors.brandName = "This field is required!";
    }
    if (!registeredCompanyName) {
      errors.registeredCompanyName = "This field is required!";
    }
    if (!yearOfIncorporation) {
      errors.yearOfIncorporation = "This field is required!";
    }
    if (!startupLinkedinUrl) {
      errors.startupLinkedinUrl = "This field is required!";
    }
    if (!companyRole) {
      errors.companyRole = "This field is required!";
    }
    if (!websiteUrl) {
      errors.websiteUrl = "This field is required!";
    }
    if (!productDemoUrl) {
      errors.productDemoUrl = "This field is required!";
    }
    if (!briefDescriptionOfProduct) {
      errors.briefDescriptionOfProduct = "This field is required!";
    }
    if (!briefDescriptionOfCompany) {
      errors.briefDescriptionOfCompany = "This field is required!";
    }
    if (!typeOfIndustry) {
      errors.typeOfIndustry = "This field is required!";
    }
    if (!SwiftCode) {
      errors.SwiftCode = "This field is required!";
    }
    if (!IFSCcode) {
      errors.IFSCcode = "This field is required!";
    }
    if (!bankBranch) {
      errors.bankBranch = "This field is required!";
    }
    if (!accountNumber) {
      errors.accountNumber = "This field is required!";
    }
    if (!bankName) {
      errors.bankName = "This field is required!";
    }
    if (!bankType) {
      errors.bankType = "This field is required!";
    }
    if (!typeOfMembership) {
      errors.typeOfMembership = "This field is required!";
    }
    if (!fundingCycle) {
      errors.fundingCycle = "This field is required!";
    }

    return errors;
  };

  //Api Call
  const postBasicDetails = async (basicform) => {
    try {
      // const url = `${process.env.REACT_APP_API_URL}${founderBasicDetailsUrl}${founderId}`;
      // const response = await axios.post(url, basicform);
      const response = true;
      if (response) {
        setBasicForm({
          brandName: "",
          registeredCompanyName: "",
          yearOfIncorporation: "",
          startupLinkedinURL: "",
          websiteURL: "",
          productDemoURL: "",
          descriptionOfProduct: "",
          descriptionOfCompany: "",
          otherIndustry: "",
          bankName: "",
          accountNumber: "",
          bankBranch: "",
          IFSCcode: "",
          SwiftCode: "",
          industry: "",
        });
        setValue(value + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log(basicform)
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (Object.keys(basicFormError).length === 0 && isBasicFormSubmit) {
      postBasicDetails(basicform);
    }
  }, [basicFormError]);


  //Image
   const [basicImage, setBasicImage] = useState(DisplayImg);

   function handleBasicImageChange(event) {
     const selectedFile = event.target.files[0];
     const reader = new FileReader();
     reader.onload = function (event) {
       setBasicImage(event.target.result);
     };
     reader.readAsDataURL(selectedFile);
   }


 //Business Form
  const [businessform, setBusinessForm] = useState({
    businessVideoLink: "",
    describeBusinessModel: "",
    businessModel: "",
    marketChannel: "",
    useCase: "",
    majorCompetitors: "",
    companyStandout: "",
    incorporationAt: "",
    branchOrOfficeLocation: "",
    corporateOfficeLocation: "",
    raisedOutsideFunding: "",
    typeOfRound: "",
    totalAmountRaised: "",
  });
  const [target, setTarget] = useState([]);
  const [businessFormError, setBusinessFormError] = useState({});
  const [isBusinessFormSubmit, setIsBusinessFormSubmit] = useState(false);

  const handleTargetChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setTarget([...target, value]);
    } else setTarget([...target.filter((item) => item !== value)]);
  };

  function handleBusinessFormChange(e) {
    const { name, value } = e.target;
    setBusinessForm({
      ...businessform,
      [name]: value,
      targetCustomer: target,
    });
  }

  const handleBusinessFormSubmit = (e) => {
    e.preventDefault();
    setBusinessFormError(handleBusinessFormValidation(businessform));
    setIsBusinessFormSubmit(true);
  };

  const handleBusinessFormValidation = (businessform) => {
    const errors = {};

    const {
      businessVideoLink,
      describeBusinessModel,
      businessModel,
      marketChannel,
      useCase,
      majorCompetitors,
      companyStandout,
      incorporationAt,
      branchOrOfficeLocation,
      corporateOfficeLocation,
      raisedOutsideFunding,
      typeOfRound,
      totalAmountRaised,
      targetCustomer,
    } = businessform;

    if (!businessVideoLink) {
      errors.businessVideoLink = "This field is required!";
    }
    if (!describeBusinessModel) {
      errors.describeBusinessModel = "This field is required!";
    }
    if (!businessModel) {
      errors.businessModel = "This field is required!";
    }
    if (!marketChannel) {
      errors.marketChannel = "This field is required!";
    }
    if (!useCase) {
      errors.useCase = "This field is required!";
    }
    if (!majorCompetitors) {
      errors.majorCompetitors = "This field is required!";
    }
    if (!incorporationAt) {
      errors.incorporationAt = "This field is required!";
    }
    if (!companyStandout) {
      errors.companyStandout = "This field is required!";
    }
    if (!branchOrOfficeLocation) {
      errors.branchOfficeLocation = "This field is required!";
    }
    if (!corporateOfficeLocation) {
      errors.corporateOfficeLocation = "This field is required!";
    }
    if (!raisedOutsideFunding) {
      errors.raisedOutsideFunding = "This field is required!";
    }
    if (!typeOfRound) {
      errors.typeOfRound = "This field is required!";
    }
    if (!totalAmountRaised) {
      errors.totalAmountRaised = "This field is required!";
    }
    if (!targetCustomer) {
      errors.targetCustomer = "This field is required!";
    }

    return errors;
  };

  const postBusinessDetails = async (businessform) => {
    // const url = `${process.env.REACT_APP_API_URL}${founderBusinessDetailsUrl}${founderId}`;
    // const response = await axios.post(url, businessform);
    // if (response) {
    //   setBusinessForm({
    //     businessVideoLink: "",
    //     describeBusiness: "",
    //     businessModel: "",
    //     marketChannels: "",
    //     useCase: "",
    //     majorCompetitors: "",
    //     standOut: "",
    //     incorporatedAt: "",
    //     branchOfficeLocation: "",
    //     corporateOfficeLocation: "",
    //     outSideFunding: "",
    //     round: "",
    //     rupees: "",
    //   });
    //   setValue(value + 1);
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    // }
    console.log(businessform)
  };

  useEffect(() => {
    if (Object.keys(businessFormError).length === 0 && isBusinessFormSubmit) {
      postBusinessDetails(businessform);
    }
  }, [businessFormError]);



  // Team Information

  const [teamformData, setTeamFormData] = useState({
    about: "",
    why: "",
    officelocation: "",
    fullTime: "",
  });
  const [member, setMember] = useState({
    name: "",
    designation: "",
    email: "",
    linkenIn: "",
  });
  const [members, setMembers] = useState([]);
  const [memberFormError, setMemberFormError] = useState({});
  const [isMemberFormSubmit, setIsMemberFormSubmit] = useState(false);
  const [teamFormError, setTeamFormError] = useState({});
  const [isTeamFormSubmit, setIsTeamFormSubmit] = useState(false);

  const handleMembersChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleMembersSubmit = (e) => {
    e.preventDefault();
    setMemberFormError(handleMemberValidation(member));
    setIsMemberFormSubmit(true);
  };

  const handleMemberValidation = (member) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { name, designation, email, linkenIn } = member;

    if (!name) {
      errors.name = "This field is required!";
    }
    if (!designation) {
      errors.designation = "This field is required!";
    }
    if (!email) {
      errors.email = "This field is required!";
    }

    if (!emailRegex.test(email)) {
      errors.email = "Please provide a valid email!";
    }
    if (!linkenIn) {
      errors.linkenIn = "This field is required!";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(memberFormError).length === 0 && isMemberFormSubmit) {
      setMembers([...members, member]);
      setMember({
        name: "",
        designation: "",
        email: "",
        linkenIn: "",
      });
    }
  }, [memberFormError]);

  const handleMemberDelete = (item) => {
    const newData = members.filter((data) => {
      return data !== item;
    });

    setMembers(newData);
  };

  const handleTeamFormChange = (e) => {
    const { name, value } = e.target;
    setTeamFormData({ ...teamformData, [name]: value, members });
  };

  const handleTeamFormSubmit = (e) => {
    e.preventDefault();
    setTeamFormError(handleTeamValidation(teamformData));
    setIsTeamFormSubmit(true);
  };

  const handleTeamValidation = (teamformData) => {
    const errors = {};
    const { about, why, officelocation, fullTime } = teamformData;

    if (!about) {
      errors.about = "This field is required!";
    }
    if (!why) {
      errors.why = "This field is required!";
    }
    if (!officelocation) {
      errors.officelocation = "This field is required!";
    }
    if (!fullTime) {
      errors.fullTime = "This field is required!";
    }

    if (members.length === 0) {
      errors.message = "Please Add atleast 1 team member!";
    }
    return errors;
  };

  //Api Call
  const postTeamDetails = async (teamformData) => {
    // const url = `${process.env.REACT_APP_API_URL}${founderTeamDetailsUrl}${founderId}`;
    // const response = await axios.post(url, teamformData);

    const response = true;

    if (response) {
      setTeamFormData({
        about: "",
        why: "",
        officelocation: "",
        fullTime: "",
      });
      console.log(teamformData);
      // navigate("/founderProfile/thankyou");
    }
  };

  useEffect(() => {
    if (Object.keys(teamFormError).length === 0 && isTeamFormSubmit) {
      postTeamDetails(teamformData);
    }
  }, [teamFormError]);

//Image
   const [TeamImage, setTeamImage] = useState(DisplayImg);

   function handleTeamImageChange(event) {
     const selectedFile = event.target.files[0];
     const reader = new FileReader();
     reader.onload = function (event) {
       setTeamImage(event.target.result);
     };
     reader.readAsDataURL(selectedFile);
   }



  return (
    <FounderSignupContext.Provider
      value={{
        value,
        handleTabs,

        formData,
        setFormData,
        country,
        setCountry,
        signupFounderError,
        setSignupFounderError,
        isSignupFounderSubmit,
        setIsSignupFounderSubmit,
        basicImage,
        handleBasicImageChange,

        basicform,
        basicFormError,
        handleBasicFormChange,
        handleBasicFormSubmit,

        businessform,
        handleBusinessFormChange,
        handleTargetChange,
        handleBusinessFormSubmit,
        businessFormError,

        member,
        members,
        memberFormError,
        handleMembersChange,
        handleMembersSubmit,
        handleMemberDelete,
        teamformData,
        teamFormError,
        handleTeamFormChange,
        handleTeamFormSubmit,
        TeamImage,
        handleTeamImageChange,
      }}
    >
      {children}
    </FounderSignupContext.Provider>
  );
};

export default FounderSignupContextProvider;
