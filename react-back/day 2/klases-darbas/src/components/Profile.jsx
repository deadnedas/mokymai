import ThemeContext from "../ThemeContext";
import UserContext from "../UserContext";
import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
function Profile() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  //   console.log(contextData);

  const changeTheme = (theme) => {
    setTheme(theme);
  };
  return (
    <div className="profile">
      <h3>User Profile</h3>
      <p>username is {user.name}</p>
      <p>role is {user.role}</p>

      <p>User theme is {theme}</p>

      {theme === "light" ? (
        <IoMdSunny onClick={() => changeTheme("dark")} />
      ) : (
        <FaMoon onClick={() => changeTheme("light")} />
      )}
    </div>
  );
}

export default Profile;
