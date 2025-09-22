import { useState } from "react";
import SearchBar from "./componants/SearchBar";
import MetSearch from "./api/MetSearch";
function App() {
  const [query, setQuery] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(false)


  return (
    <>
      <SearchBar query={query} setQuery={setQuery} setSearchTrigger={setSearchTrigger} ></SearchBar>
      <MetSearch query={query} searchTrigger={searchTrigger}></MetSearch>
    </>
  );
}

export default App;
