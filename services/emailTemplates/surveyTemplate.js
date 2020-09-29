const keys = require("../../config/keys");

// contains the html in every survey emails we sent out
module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>${survey.title}</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
          <h6>This survey is created by: ${survey.signature}</h6>
          </div>
      </body>
    </html>
  `;
};