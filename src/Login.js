import React, { useState, useEffect, useContext } from "react";
import axios from "./axios";
import { GlobalContext } from "./GlobalContext";
const Login = () => {
  //const [global, setGlobal] = useContext(GlobalContext);

  const [pwd, setPwd] = useState("");
  const [usr, setUsr] = useState("");
  const [loading, setLoading] = useState(false);
  const magentaStyle = {
    background: "#e20074"
  };
  const magentaStyleButton = {
    background: "#e20074",
    width: "70px"
  };

  const login = () => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = "http://localhost:8200/api/token/";
        const data = {
          username: usr,
          password: pwd
        };
        const r = await axios.post(url, data);
        console.log(r.data[0]);
        if (!r.data) throw "no data received";
        setGlobal({
          ...global,
          logged: true,
          token: r.data.access,
          user: usr
        });
      } catch (e) {
        setUsr("");
        setPwd("");
        setLoading(false);
        alert("Wrong Password");
      }
    };

    fetchData();
  };

  const onChange = e => {
    if (e.target.name === "usr") {
      setUsr(e.target.value);
    }
    if (e.target.name === "pwd") {
      setPwd(e.target.value);
    }
  };

  const showloading = () => {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  };

  return (
    <>
      <br />
      <form>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="username"
              placeholder="Username"
              onChange={onChange}
              name="usr"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={onChange}
              name="pwd"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control">
            <input
              className="input button is-danger"
              //onClick={login}
              type="submit"
              name="submit"
              style={magentaStyleButton}
              value="Login"
            />
          </p>
        </div>
      </form>
      {loading && showloading()}
    </>
  );
};

export default Login;
