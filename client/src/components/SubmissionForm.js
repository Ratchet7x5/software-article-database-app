import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postArticle } from "../services/articleservice";

/**
   * {authors, 
   * source, 
   * pubyear, 
   * doi, 
   * claim, 
   * evidence, 
   * sepractice
   */

const SubmissionForm = () => {
  const { /*register,*/ handleSubmit } = useForm();
  //const [/*result,*/ setResult] = useState("");

  //create a title var and update state func
  var [title, setTitle ] = useState();
  const titleUpdate = (event) => { setTitle(event.target.value) };

  var [authors, setAuthors ] = useState();
  const authorsUpdate = (event) => { setAuthors(event.target.value) };

  var [source, setSource ] = useState();
  const sourceUpdate = (event) => { setSource(event.target.value) };

  var [pubyear, setPubyear ] = useState();
  const pubyearUpdate = (event) => { setPubyear(event.target.value) };

  var [doi, setDoi ] = useState();
  const doiUpdate = (event) => { setDoi(event.target.value) };

  /*var [claim, setClaim ] = useState();
  const claimUpdate = (event) => { setClaim(event.target.value) }

  var [evidence, setEvidence ] = useState();
  const evidenceUpdate = (event) => { setEvidence(event.target.value) }*/

  var [sepractice, setSepractice ] = useState();
  const sepracticeUpdate = (event) => { setSepractice(event.target.value) };

  const addArticle = () => {
    var article = [
      {
        title: title,
        authors: authors,
        source: source,
        pubyear: pubyear,
        doi: doi,
        claim: "-1", 
        evidence: "-1",
        sepractice: sepractice,
      }
    ]

    console.log(JSON.stringify(article));
    
    postArticle(article)
    //postArticle(JSON.stringify(article))
    .then((article) => { 
      console.log(article);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Executed finally() block...");
    });
  };

  const onSubmit = (data) => { 
    addArticle();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input required onChange={titleUpdate} placeholder="Title" />
      <p><input required onChange={authorsUpdate} placeholder="Authors" /></p>
      <p><input required onChange={sourceUpdate} placeholder="Source" /></p> 
      <p><input required onChange={pubyearUpdate} placeholder="Publication Year" /></p>
      <p><input required onChange={doiUpdate} placeholder="DOI" /></p>
     
      <select required onChange={sepracticeUpdate}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming" >Mob Programming</option>
      </select>

      <p></p>
      
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;
