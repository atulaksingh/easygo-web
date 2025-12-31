import { useState } from "react";
import bg from "../assets/login-bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF, FaTwitter } from "react-icons/fa";

const API = process.env.REACT_APP_API_BASE_URL;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const comingSoon = () => {
    alert("This feature will be available soon");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/admin/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.data);
      localStorage.setItem("user", JSON.stringify(res.data.responseObj));

      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15,22,53,.85),rgba(15,22,53,.85)), url(${bg})`,
      }}
    >
      <div className="w-[450px] rounded-2xl bg-white/10 backdrop-blur-md px-6 py-7 text-white mx-auto my-20 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <h2 className="text-center text-xl font-semibold mb-6">
          Log In Using Number or Email
        </h2>

        <div className="flex bg-white/10 rounded-xl p-1 mb-5">
          <button
            onClick={comingSoon}
            className="flex-1 py-2 text-sm text-gray-400 cursor-not-allowed rounded-lg"
          >
            Mobile
          </button>
          <button className="flex-1 py-2 text-sm bg-primary rounded-lg">
            Email
          </button>
        </div>

        <label className="text-sm text-gray-300 mb-1 block">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 h-11 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
        />

        <label className="text-sm text-gray-300 mb-2 block">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-5 h-11 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-primary py-3 rounded-lg font-semibold"
        >
          {loading ? "Logging in..." : "LOG IN"}
        </button>

        <div className="flex items-center gap-3 mt-5">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-gray-400 text-sm">Or</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <p className="text-center text-sm text-gray-300 mb-5">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <button onClick={comingSoon} className="border border-white/30 rounded-lg py-2 text-sm">
            <FcGoogle size={18} /> Google
          </button>
          <button onClick={comingSoon} className="border border-white/30 rounded-lg py-2 text-sm">
            <FaApple size={18} /> Apple
          </button>
          <button onClick={comingSoon} className="border border-white/30 rounded-lg py-2 text-sm">
            <FaFacebookF size={18} className="text-blue-500" /> Facebook
          </button>
          <button onClick={comingSoon} className="border border-white/30 rounded-lg py-2 text-sm">
            <FaTwitter size={18} /> Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
