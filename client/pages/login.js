import { useState, useContext } from "react";
import axios from "axios";
import { message } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";
import { UserContext } from "../context";

const Login = () => {
  const [email, setEmail] = useState("brian@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      // console.log(name, email, password, secQuestion);
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        {
          email,
          password,
        }
      );
      setState({
        user: data.user,
        token: data.token,
      });
      //save in local storage
      window.localStorage.setItem("auth", JSON.stringify(data));
      router.push("/");
    } catch (err) {
      message.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image text-light">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            submitHandler={submitHandler}
            emailChangeHandler={emailChangeHandler}
            email={email}
            passwordChangeHandler={passwordChangeHandler}
            password={password}
            loading={loading}
            page="login"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            Not yet registered?{""}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
