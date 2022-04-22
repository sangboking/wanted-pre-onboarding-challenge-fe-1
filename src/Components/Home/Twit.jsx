import React from 'react'
import TwitterLogin from "react-twitter-login";

export default function Twit() {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <TwitterLogin
    authCallback={authHandler}
    consumerKey='1eVyQIdFQwT3YkxADpTAyhk9f'
    consumerSecret='TSahH5qd7Mx975bhXxQGSuiqMZ4WfRo89YO74N6eNVNrBKif9M'
  />
  )
}
