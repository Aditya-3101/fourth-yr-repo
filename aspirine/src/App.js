import Logins from "./components/auth/Logins";
import React from "react";
import Main from "./components/home/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tests from "./components/tests/Test_Results";
import Register from "./components/regis/register";
import NewReg from "./components/regis/Newreg";
import Mail from "./components/mail/mail";
import Orders from "./components/orders/Borders";
import Eligible from "./components/eligibility/eligibility";
import Buyer from "./components/regis/buyer";
import Donors from "./components/donors/donors.js";
import Drecords from "./components/records/donorRec";
import Brecords from "./components/records/buyersRecords";
import Store from "./components/Store/store";
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
          <Route path="/api/main/donors/records" exact component={Drecords} />
          <Route path="/api/main/buyers/records" exact component={Brecords} />
          <Route path="/api/main/store/details" exact component={Store} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
