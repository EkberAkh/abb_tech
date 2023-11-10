import React from 'react';
import './SignInDown.css'
import { Link } from 'react-router-dom';

const SignInDown = ({terms}) => {
  return (
    <div className="right-down">
      {terms ?  <span className="terms">By creating an account, you agree to elsewhere's <Link to='/about' className='link '>Terms of Use</Link> and <Link to='/contact' className='link'>Privacy Policy</Link>.</span> :   <span>
      Don’t have an account?{" "}
      <Link className="link" to="/create-acc">
        Create one for new adventure!
      </Link>
    </span>}
  
   
  </div>
  )
}

export default SignInDown