import React from 'react';
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="container-fluid" id="landing">
      <div style={{textAlign: 'center', height: "300wh"}}>
        <h1 id="landing-title">
          Survey Cookies <i className="material-icons medium">thumbs_up_down</i>
        </h1>
        <p id="landing-content">
          The best application which helps collecting feedbacks from your users!
        </p>
      </div>
    </div>
  );
};

export default Landing;
