import { SyncOutlined } from "@ant-design/icons";

const AuthForm = (props) => (
  <form onSubmit={props.submitHandler}>
    {props.page !== "login" && (
      <>
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Your name</label>
          </small>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            onChange={props.nameChangeHandler}
            value={props.name}
          />
        </div>
      </>
    )}

    <div className="form-group p-2">
      <small>
        <label className="text-muted">Email address</label>
      </small>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        onChange={props.emailChangeHandler}
        value={props.email}
      />
    </div>

    <div className="form-group p-2">
      <small>
        <label className="text-muted">Password</label>
      </small>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        onChange={props.passwordChangeHandler}
        value={props.password}
      />
    </div>

    {props.page !== "login" && (
      <>
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Pick a question</label>
          </small>
          <select className="form-control">
            <option>Who is your favorite celebrity?</option>
            <option>What is your favorite game?</option>
            <option>What is the name of your high school?</option>
          </select>
        </div>
        <div className="form-group p-2">
          <small className="form-text text-muted">
            You can use this to reset your password.
          </small>
          <input
            type="text"
            className="form-control"
            placeholder="Write your answer here"
            onChange={props.secQuestionChangeHandler}
            value={props.secQuestion}
          />
        </div>
      </>
    )}

    <div className="form-group p-2">
      <div class="d-grid gap-2">
        <button
          className="btn btn-primary btn-block"
          disabled={
            props.page !== "login"
              ? !props.name ||
                !props.password ||
                !props.email ||
                !props.secQuestion
              : !props.email || !props.password
          }
        >
          {props.loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    </div>
  </form>
);

export default AuthForm;
