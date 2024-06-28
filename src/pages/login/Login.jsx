import React, { useEffect, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../context/api/userApi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { setToken } from "../../context/slices/authSlice";

const initialState = {
  username: "mor_2314",
  password: "83r5^_",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [signIn, { data, isError, isLoading, isSuccess, error }] =
    useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.token));
      navigate("/admin");
    }
    if (isError) {
      alert(error.data.message);
    }
  }, [isSuccess, isError]);

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formData);
  };
  return (
    <div className="container login">
      <h1>Login user</h1>
      <form onSubmit={handleLogin} action="">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <div className="password">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button">
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} />
            )}
          </button>
        </div>
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
