import React, { useCallback, useRef, useState } from 'react'

import { LoginSocialTwitter } from 'reactjs-social-login'

const REDIRECT_URI = 'https://localhost:3000'

const Example = () => {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState()
  
  const twitterRef = useRef(null)

  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])

  const onLogoutFailure = useCallback(() => {
    alert('logout fail')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])

  const onLogout = useCallback(() => {
    switch (provider) {
     
      case 'twitter':
        twitterRef.current?.onLogout()
        break
     
      default:
        break
    }
  }, [provider])

  function User2(){
    return(
      <div className='card'>
      
      </div>
    )
  }

  return (
    <>
      {provider && profile && (
        <User2/>
      )}
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        
        <LoginSocialTwitter
          ref={twitterRef}
          client_id={process.env.REACT_APP_TWITTER_API_KEY || ''}
          client_secret={process.env.REACT_APP_TWITTER_APP_SECRET || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider)
            setProfile(data)
          }}
          onReject={(err) => {
            console.log(err)
          }}
        >
          
        </LoginSocialTwitter>
      </div>
    </>
  )
}

export default Example;