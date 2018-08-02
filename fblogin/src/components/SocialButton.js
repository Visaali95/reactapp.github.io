import React from 'react'
import SocialLogin from 'react-social-login'

const Button = ({ children, triggerLogin, ...props }) => {

return(

  <div>
    <button onClick={triggerLogin} {...props}>
      { children }
    </button>
  
  </div>
);

}

export default SocialLogin(Button);
