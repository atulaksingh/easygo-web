import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import successImg from "../assets/success.png";

export default function SignupSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2b3055]">
      <div className="bg-white rounded-3xl px-14 py-12 w-[520px] text-center shadow-2xl">
        <img
          src={successImg}
          alt="Success"
          className="w-40 h-32 mx-auto mb-8"
        />

        <button
          onClick={() => navigate("/")}
          className="w-full bg-[#2d7ff9] hover:bg-[#1f6fe0] text-white py-3 rounded-xl text-lg font-medium"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
