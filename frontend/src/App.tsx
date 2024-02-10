import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
export default function App() {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    setSocket(
      io("http://localhost:8000", {
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
          <Route
            path="/logout"
            element={
              <section className="layout">
                <Layout logout={true} />
              </section>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
