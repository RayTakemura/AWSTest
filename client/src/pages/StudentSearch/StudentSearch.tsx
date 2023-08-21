import { useState } from "react";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
// import SearchResult from "./SearchResult";

const StudentSearch = () => {
  const [id, setID] = useState("");
  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("enter key pressed", id);
    }
  };
  const handleChange = (val: string) => {
    setID(val);
  };
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log("button clicked", id);
  };
  return (
    <form>
      <Input onChange={handleChange} value={id} onKeyDown={handleEnterKey} />
      <Button onClick={handleButtonClick} content="Search" />
    </form>
  );
};
export default StudentSearch;
