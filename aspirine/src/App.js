import Logins from "./components/Logins";
import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tests from "./components/Test_Results";
import Register from "./components/register";
import NewReg from "./components/Newreg";
import Mail from "./components/mail";
import Orders from "./components/Borders";
import Eligible from "./components/eligibility";
import Buyer from "./components/buyer";
import Donors from "./components/donors";
import Search from "./components/search";
import "./App.css";

const App = () => {
  React.useEffect(() => {
    document.title = "Aspirine Bloodbank Services";
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Logins} />
          <Route path="/api/main" exact component={Main} />
          <Route path="/api/main/donors" exact component={Donors} />
          <Route path="/api/test_results" exact component={Tests} />
          <Route path="/api/main/donors/register" exact component={Register} />
          <Route path="/api/main/hospitals/new" exact component={NewReg} />
          <Route path="/api/main/orders" exact component={Orders} />
          <Route path="/api/main/sendMail" exact component={Mail} />
          <Route path="/api/main/eligibility" exact component={Eligible} />
          <Route path="/api/main/register/buyer/new" exact component={Buyer} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
