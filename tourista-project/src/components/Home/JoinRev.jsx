import "./JoinRev.css";
import { Link } from "react-router-dom";
import arrow_up from '../../assets/images/Arrow_Up_SM.png'
const JoinRev = () => {

  const handleClick = () => {
   window.scrollTo({
    top: 0,
    behavior: 'smooth'
   })
  };
  return (
    <>
    
    <div className="join-rev">
      <h2 className="title">Join our travel revolution</h2>
      <div className="inner">
        <p>
          Sign up to stay in the know - hot new travel spots, how we strive to
          make the world a better place, and all sorts of surprises.
        </p>
        <div className="input-wrapper">
          <input placeholder="Email" type="email" />
          <Link to="/sign-in" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    <div className="up-btn">
      <div className="container">
        <button onClick={handleClick} type="button"><img src={arrow_up} alt="arrow-up" /></button>
      </div>
    </div>
    </>
  );
};

export default JoinRev;
