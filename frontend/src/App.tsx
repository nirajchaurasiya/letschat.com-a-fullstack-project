import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
export default function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const REACT_APP_BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    setSocket(
      io(REACT_APP_BACKEND_URL, {
        withCredentials: true,
      })
    );
  }, []);

  useEffect(() => {
    socket?.emit("add-user");
  }, [socket]);

  // const emitChatMsg = () => {
  //   if (socket) {
  //     socket.emit("chat-message", { userId: "123", username: "example" });
  //   }
  // };

  return (
    <BrowserRouter>
      <main>
        <Routes>
          {/*  Before Authentication */}
          <Route
            path="/auth/register"
            element={
              <section className="register">
                <Register />
              </section>
            }
          />
          <Route
            path="/auth/login"
            element={
              <section className="login">
                <Login />
              </section>
            }
          />

          {/* After authentication */}
          <Route
            path="/"
            element={
              <section className="layout">
                <Layout home={true} />
              </section>
            }
          />

          <Route
            path="/search"
            element={
              <section className="layout">
                <Layout search={true} />
              </section>
            }
          />

          <Route
            path="/group-messages"
            element={
              <section className="layout">
                <Layout groupMessages={true} />
              </section>
            }
          />

          <Route
            path="/group-messages/:groupId"
            element={
              <section className="layout">
                <Layout groupMessages={true} isGroup />
              </section>
            }
          />
          <Route
            path="/user-history"
            element={
              <section className="layout">
                <Layout history={true} />
              </section>
            }
          />
          <Route
            path="/profile"
            element={
              <section className="layout">
                <Layout profile={true} />
              </section>
            }
          />
          {/*  */}

          <Route
            path="/profile/user-information"
            element={
              <section className="layout">
                <Layout profile={true} userInformation />
              </section>
            }
          />

          <Route
            path="/profile/blocked-accounts"
            element={
              <section className="layout">
                <Layout profile={true} blockedAccounts />
              </section>
            }
          />

          <Route
            path="/profile/delete-account"
            element={
              <section className="layout">
                <Layout profile={true} deleteAccount />
              </section>
            }
          />

          {/*  */}
          <Route
            path="/logout"
            element={
              <section className="layout">
                <Layout logout={true} />
              </section>
            }
          />
          <Route
            path="/messages/:userId"
            element={
              <section className="layout">
                <Layout message={true} />
              </section>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
