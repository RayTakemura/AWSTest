import { useState } from "react";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
// import { useQuery } from "@apollo/client";
// import { SEARCH_STUDENT } from "./../../utils/queries";
import SearchResult from "./SearchResult";

const StudentSearch = () => {
  const [id, setID] = useState("");
  const [searchVal, setSearchVal] = useState(id);
  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchVal(id);
      console.log("enter key pressed", searchVal);
    }
  };
  const handleChange = (val: string) => {
    setID(val);
  };
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setSearchVal(id);
    console.log("button clicked", searchVal);
  };
  return (
    <>
      <form>
        <Input onChange={handleChange} value={id} onKeyDown={handleEnterKey} />
        <Button onClick={handleButtonClick} content="Search" />
      </form>
      {searchVal ? <SearchResult studentID={searchVal} /> : null}
    </>
  );
};
export default StudentSearch;
