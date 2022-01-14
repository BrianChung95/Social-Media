import { useContext } from "react";
import Link from "next/link";
import { UserContext, useEffect, useState } from "../context";
import { useRouter } from "next/router";

const Nav = () => {
  const [state, setState] = useContext(UserContext);
  const [current, setCurrent] = useState("");

  useEffect;

  const router = useRouter();

  const logoutHandler = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <nav className="nav bg-dark d-flex justify-content-end">
      <Link href="/">
        <a className="nav-link text-light">Home</a>
      </Link>

      {state !== null ? (
        <>
          <Link href="/user/dashboard">
            <a className="nav-link text-light">{state.user.name}</a>
          </Link>
          <a onClick={logoutHandler} className="nav-link text-light">
            Logout
          </a>
        </>
      ) : (
        <>
          <Link href="/login">
            <a className="nav-link text-light">Login</a>
          </Link>

          <Link href="/register">
            <a className="nav-link text-light">Register</a>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
