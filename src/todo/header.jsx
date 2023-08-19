import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../stores/Auth";

const Header = () => {
  const { user } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  // console.log(useSelector((state) => state.Auth));

  const loginHandle = (user) => {
    dispatch(login(user));
  };

  const logoutHandle = () => {
    dispatch(logout());
  };

  return (
    <div>
      <header className="flex items-center justify-between p-4">
        <h2>Logo</h2>

        {!user && (
          <nav className="flex items-center max-w-[500px] gap-5">
            <button
              className="bg-red-500 p-2 text-white rounded-sm"
              onClick={() => loginHandle({ id: 1, username: "yakup" })}
            >
              yakup olarak giriş yap
            </button>
            <button
              className="bg-red-500 p-2 text-white rounded-sm"
              onClick={() => loginHandle({ id: 2, username: "turhan" })}
            >
              turhan olarak giriş yap
            </button>
          </nav>
        )}
        {user && (
          <nav className="flex items-center justify-center gap-3">
            Hoşgeldin ,
            <button
              className="bg-red-500 rounded-sm text-white p-3"
              onClick={logoutHandle}
            >
              Çıkış yap
            </button>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
