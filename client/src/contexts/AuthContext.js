import { useState, useContext, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
      fetch("/auth").then((resp) => {
        if (resp.ok) {
          resp.json().then((newUser) => {
            setUser(newUser);
          });
        }
      });
    }, []);

    const logInUser = (userObj) => {
      console.log(userObj);
      setUser(userObj);
      setAvatar(userObj.avatar);
      navigate("/");
    };

    const logOut = () => {
      fetch("/logout", {
        method: "DELETE",
      }).then((resp) => {
        if (resp.ok) {
          setUser(null);
          setAvatar(null);
        }
      });
      navigate("/");
    };

  return (
    <AuthContext.Provider value={ {user, avatar, logOut, logInUser} }>
        {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContextProvider
