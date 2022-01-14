import { useState } from "react";
import axios from "axios";
import { Modal, Button, message } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";

const Register = () => {
  const [name, setName] = useState("Brian");
  const [email, setEmail] = useState("brian@gmail.com");
  const [password, setPassword] = useState("123456");
  const [secQuestion, setSecQuestion] = useState("melo");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const secQuestionChangeHandler = (event) => {
    setSecQuestion(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(name, email, password, secQuestion);
    try {
      // console.log(name, email, password, secQuestion);
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        {
          name,
          email,
          password,
          secQuestion,
        }
      );
      setName("");
      setEmail("");
      setPassword("");
      setSecQuestion("");
      setOk(data.ok);
      setLoading(false);
    } catch (err) {
      message.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-image text-light">
        <div className="col text-center">
          <h1>Register</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            submitHandler={submitHandler}
            nameChangeHandler={nameChangeHandler}
            name={name}
            emailChangeHandler={emailChangeHandler}
            email={email}
            passwordChangeHandler={passwordChangeHandler}
            password={password}
            secQuestionChangeHandler={secQuestionChangeHandler}
            secQuestion={secQuestion}
            loading={loading}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Congratulations!"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={[
              <Button key="back" onClick={() => setOk(false)}>
                Cancel
              </Button>,
              <Button key="login" type="primary">
                <Link
                  href="/login"
                  className="d-grid gap-2 d-md-flex justify-content-md-end"
                >
                  Login
                </Link>
              </Button>,
            ]}
          >
            <p>You have successfully registered.</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Register;
