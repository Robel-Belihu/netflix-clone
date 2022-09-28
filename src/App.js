import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { auth } from "./firebase"
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])


  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        )}
      </Router>

    </div>
  )
}

export default App;
