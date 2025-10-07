import { useState } from "react";
import SearchBar from "./componants/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(false)


  return (
    <>
    <p>hi</p>
      <SearchBar query={query} setQuery={setQuery} setSearchTrigger={setSearchTrigger} ></SearchBar>
    </>
  );
}

export default App;
