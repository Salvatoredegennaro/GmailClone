import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged(user => {
     if(user){
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }))
     }else{

     }
   })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <SideBar />
            <Switch>
              <Route exact path="/mail">
                <Mail />
              </Route>
              <Route>
                <EmailList exact path="/" />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
