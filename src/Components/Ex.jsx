import React,{useState} from 'react';
import FacebookLogin from 'react-facebook-login';


export default function Ex() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  
  const responseFacebook = (response) => {
    console.log(response);
    // Login failed
    if (response.status === "unknown") {
      alert("Login failed!");
      setLogin(false);
      return false;
    }
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const logout = () => {
    setLogin(false);
    setData({});
    setPicture("");
  };
  
  return (
    <>
      {!login && (
        <FacebookLogin
          appId="1089784311566379"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,email,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
        />
      )}
      
      {login && (
        <div className="card">
          <div className="card-body">
            <img className="rounded" src={picture} alt="Profile" />
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">Email ID: {data.email}</p>
            <button onClick={logout}>
              logout
            </button>
          </div>
        </div>
      )}
    
    </> 

  )
}





 