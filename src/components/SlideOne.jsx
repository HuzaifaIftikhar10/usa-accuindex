import React, { useEffect, useState } from "react";
import man from "../images/Man.png";
import map from "../images/Map.png"; // Importing the background image
import { FaCheck } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import { apiCall } from "../api/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ar from "react-phone-input-2/lang/es.json";

export const SlideOne = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, control, watch, setValue } = useForm();
  const selectedState = watch("state");
  const [countriesData, setCountriesData] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    const endPoint = "/common/settings?data=countries";
    try {
      const response = await apiCall.get(endPoint);
      if (response.isSuccess) {
        console.log(response.result);
        setCountriesData(response.result);
      }
    } catch (error) {
      console.warn(error.response.error);
    }
  };
  useEffect(() => {
    if (selectedState) {
      const selectedCountry = countriesData.find(
        (item) => item.countryAr === selectedState
      );

      if (selectedCountry) {
        setValue("phone_no", `${selectedCountry.calling_code}`);
      }
    }
  }, [selectedState, countriesData, setValue]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const onSubmit = (result) => {
    if (result.password === result.confirm_password) {
      setLoading(true);
      const emailData = {
        email: result.email,
      };
      const phone_no_data = {
        phone: `+${result.phone_no}`,
      };

      const fetchCountryCode = countriesData.filter(
        (item) => item.countryEn === result.state
      );
      const register_data = {
        type: "individual",
        firstName: result.firstName,
        lastName: result.lastName,
        countryResidency: result.state,
        phone: `+${result.phone_no}`,
        email: result.email,
        portalPassword: result.password,
        //    emailPin: "2344",
        tos: true,
        utmCampaign: "7kkiaknjld3cSaudi_Landing",
        checkPin: result.marketingConsent,
        language: "en-gb",
        declarations: [
          "By clicking here I give my consent for Accuindex to contact me for marketing purposes. You can opt out at any time. For further details please see ourMarketing and Communication Policy Statement.",
        ],
        countryCode: fetchCountryCode[0]?.countryEn,
      };
      apiCall
        .post("/customers/email-availability", emailData)
        .then(() => {
          apiCall
            .post("/customers/phone-availability", phone_no_data)
            .then(() => {
              apiCall.post("/gate/register-live", register_data).then(() => {
                setLoading(false);
                navigate("/success");
              });
            });
        })
        .catch((e) => {
          setLoading(false);
          toast.error(e?.response?.data?.message, {
            autoClose: 2000,
          });
        });
    } else {
      toast.warn("Password and Confirm Password must be the same. ", {
        autoClose: 2000, // 2000 milliseconds = 2 seconds
      });
    }
  };

  const onInvalidDetails = (errors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message, {
        autoClose: 2000, // 2000 milliseconds = 2 seconds
      });
    });
  };
  return (
    <div className="relative flex flex-col xl:flex-row-reverse w-full pt-14">
      {/* Background Map Image */}
      <div className="absolute pt-10 p-3 md:pt-12 lg:pt-4 xl:pt-0 2xl:pl-8">
        <img src={map} alt="Map" className="w-full h-full " />
      </div>

      {/* Left Section: Texts and Form */}
      <div className="relative flex-1 w-full pl-6 pr-6  md:pr-10  xl:pl-24 xl:pt-24 ">
        {/* Text Section */}
        <div className="mb-4 text-white">
          <h1
            className="text-2xl lg:text-3xl font-bold text-[#1E3767] pb-2 text-center lg:text-start"
            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "800" }}
            dir="rtl"
          >
            احتفل باليوم الوطني السعودي مع
            <span
              className="text-[#9A2168]"
              style={{ fontFamily: "Poppins, system-ui", fontWeight: "800" }}
            >
              AccuIndex
            </span>
          </h1>
          <p
            className="text-2xl px-10 lg:px-0 lg:text-start text-[#1E3767] text-center"
            dir="rtl"
            style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
          >
            واحصل على
            <span className="text-[#9A2168] font-bold text-[25px]">
              30%{" "}
            </span>{" "}
            بونص على إيداعك الأول!
          </p>
        </div>

        {/* Input Fields */}
        <form onSubmit={handleSubmit(onSubmit, onInvalidDetails)}>
          <div className="flex flex-col-reverse sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 md:mb-0">
            <div className="w-full sm:w-1/2">
              <label
                className="block text-right mb-1 text-black"
                style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
              >
                اسم العائلة
              </label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                })}
                type="text"
                dir="rtl"
                className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF];
]"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                className="block text-right mb-1 text-black"
                style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
              >
                الاسم الأول
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                type="text"
                dir="rtl"
                className="w-full p-2 border border-gray-300 rounded mb-4 bg-[#FFFFFF]"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-right mb-1 text-black"
              style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
            >
              البريد الإلكتروني
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="text"
              dir="rtl"
              className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]"
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:mb-5">
            <div className="w-full flex flex-col">
              <p
                className="leading-7 text-[18px]  text-right "
                style={{
                  fontFamily: "Tajawal, system-ui",
                  fontWeight: "500",
                }}
              >
                رقم الهاتف
              </p>
              <Controller
                name="phone_no"
                control={control}
                rules={{ required: "Phone number is required" }}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    country={"us"}
                    value={value}
                    onChange={onChange}
                    localization={ar}
                    inputStyle={{
                      width: "100%",
                      height: "44px",
                      backgroundColor: "#FFFFFF",
                    }}
                    dropdownStyle={{
                      width: 250,
                    }}
                    buttonStyle={{
                      backgroundColor: "#FFFFFF",
                    }}
                  />
                )}
              />
            </div>

            <div className="w-full flex flex-col items-end md:ml-2 pb-2 md:pb-0">
              <label
                htmlFor="state"
                className="leading-7 text-[18px]  text-right"
                style={{
                  fontFamily: "Tajawal, system-ui",
                  fontWeight: "500",
                }}
              >
                الدولة
              </label>
              <div className="relative w-full">
                <select
                  {...register("state", { required: "State is required" })}
                  dir="rtl"
                  name="state"
                  className="w-full bg-[#FFFFFF] rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-[5px] pr-5 pl-4 leading-8 transition-colors duration-200 ease-in-out appearance-none"
                >
                  <option value="">لا شيء</option>
                  {countriesData?.map((item, index) => (
                    <option key={index} value={item.countryAr}>
                      {item.countryAr}
                    </option>
                  ))}
                </select>
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row space-y-4 sm:space-y-0 md:space-x-4">
            <div className="w-full sm:w-1/2">
              <label
                className="block text-right mb-1 text-black"
                style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
              >
                تأكيد كلمة المرور
              </label>
              <input
                {...register("confirm_password", {
                  required: "Confirm Password is required.",
                })}
                type="password"
                dir="rtl"
                className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF]"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                className="block text-right mb-1 text-black"
                style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
              >
                كلمة المرور
              </label>
              <input
                {...register("password", {
                  required: "Password is required.",
                })}
                type="password"
                dir="rtl"
                className="w-full p-2 border border-gray-300 rounded bg-[#FFFFFF] mb-4"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-end text-end mt-4 ">
              <p
                dir="rtl"
                className="text-right text-[#51515199]"
                style={{ fontFamily: "Tajawal, system-ui", fontWeight: "400" }}
              >
                بالنقر هنا، أوافق على أن تقوم شركة
                <span
                  className="text-[#9A2168] font-bold"
                  style={{
                    fontFamily: "Tajawal, system-ui",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  Accuindex &nbsp;
                </span>
                بالاتصال بي لأغراض التسويق. يمكنك إلغاء الاشتراك في أي وقت.
                لمزيد من التفاصيل يرجى الاطلاع على
                <span
                  className="text-[#9A2168]"
                  style={{
                    fontFamily: "Tajawal, system-ui",
                    fontWeight: "700",
                  }}
                >
                  &nbsp;بيان سياسة التسويق والاتصالات&nbsp;
                </span>
                الخاص بنا&nbsp;
              </p>
              <label className="relative cursor-pointer ml-2">
                <input
                  {...register("marketingConsent")}
                  type="checkbox"
                  className="sr-only peer"
                />
                <div className="w-5 h-5 border-2 border-[#9A2168] rounded-md peer-checked:bg-[#9A2168] peer-checked:border-bg-[#9A2168] flex justify-center items-center">
                  <FaCheck size={14} color="#FFFFFF" />
                </div>
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="text-white bg-[#9A2168] border-0 py-2 px-14 focus:outline-none hover:bg-[#811e58] rounded text-lg mt-4 md:mb-10"
              style={{ fontFamily: "Tajawal, system-ui", fontWeight: "500" }}
            >
              {loading ? "loading..." : " سجل الآن"}
            </button>
          </div>
        </form>
      </div>

      {/* Right Section: Image */}
      <div className="relative w-full flex flex-1 items-end xl:pr-36 inset-y-3">
        <img src={man} alt="Man" className="xl:h-[700px] xl:w-[850px]" />
      </div>
    </div>
  );
};
