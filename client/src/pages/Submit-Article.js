import React from "react";
import SubmissionForm from "../components/SubmissionForm.js";

const SubmitArticle = () =>  {
     return (
      <div>
        <h2>Submit Article</h2>
            <p>This will be a form to allow submitters to submit an article for inclusion in our SADA repo.</p>
            <SubmissionForm/>
        </div>
    );
}
 
export default SubmitArticle;