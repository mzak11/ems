import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    console.log(email, password);
    if (email === "admin@me.com" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email == email && password == e.password
      );
      if (employee) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
        setLoggedInUserData(employee)
        setUser("employee");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : (user === "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null)}

    </>
  );
};

export default App;
