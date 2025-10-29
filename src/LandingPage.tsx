// import { IoRocketOutline } from "react-icons/io5";
import "./LandingPage.css"; // We will create this CSS file next

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <img src="/aea.jpg" alt="AEA Logo" className="aea-logo" />
        <h1>Launching Soon</h1>
        <p>
          In the meantime, cast your vote for the next Aerospace Department
          merch!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
