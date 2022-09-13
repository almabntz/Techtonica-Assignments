import { useState } from "react";
import Category from "./categories";

//Will allow user to select a category and how many Qs they want
const QuizForm = () => {
  //use state func for categories
  const [selectedCat, setSelectedCat] = useState("");
  //use state for user values input (number of Qs, difficulty)
  const [values, setValues] = useState({
    category: selectedCat,
    numQs: "",
  });

  const dataFromChild = (childData) => {
    setValues((values.category = { childData }));
    setSelectedCat(childData);
  };

  //This returns a function which accepts an event as an input
  const set = (name) => {
    return ({ target: { value } }) => {
      //the event is being deconstrcuted here
      setValues((originalValues) => ({ ...originalValues, [name]: value }));
    };
  };

  // prevents page from reloading itself after submit.
  const handleSubmit = (event) => {
    event.preventDefault();
    //fetch from our server goes here
    //fetch localhost/api/questions POST goes here
    console.log(values);
  };

  return (
    // place into return statement later, form options for Q's and Category
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numQ"># of Questions? </label>
        <input
          id="numQ"
          type="number"
          min="1"
          max="20"
          onChange={set("numQ")}
        />
        <br /> <br />
        <button type="submit">submit</button>
      </form>

      <p>{values.numQ}</p>
    </div>
  );
};
export default QuizForm;

// categories code for later
// <Category childToParent={dataFromchild} />
//  <p>{selectedCat}</p>
