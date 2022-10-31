import "./App.css";
import { useState } from "react";
import MainPage from "./pages/MainPage/index";

function App() {
  const userInfo = {
    name: "mahkamboy",
    password: "parol",
  };

  const [login, setLogin] = useState(false);

  const Logging = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const password = e.target.password.value;
    console.log(e);
    if (
      name === userInfo.name &&
      password === userInfo.password &&
      name !== "" &&
      password !== ""
    ) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div className="App">
      {/* <MainPage /> */}
      {login ? (
        <MainPage />
      ) : (
        <form onSubmit={Logging}>
          <h2>hello mister lazy boss</h2>
          <input type="text" name="name" placeholder="Enter your name" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">come</button>
        </form>
      )}
      {/* <Login /> */}
    </div>
  );
}

export default App;
