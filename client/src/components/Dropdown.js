
//import { useRef } from "react";
import SEPractices from "../dummydata/SEPractices";

const optionItems = SEPractices.map((SEPractice) => (
  <option key={SEPractice.practice}>{SEPractice.practice}</option>
));

const Dropdown = ({ setSelectedPractice }) => {
  const handleDropdownChange = (e) => {
    setSelectedPractice(e.target.value);
  };

  return (
    <div>
      <select onChange={handleDropdownChange}>
        <option value="">Select an SE Practice</option>
        {optionItems}
      </select>
    </div>
  );
};
export default Dropdown;