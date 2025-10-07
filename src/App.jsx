import { useState } from "react";
import SearchBar from "./componants/SearchBar";
import axios from "axios";
import SearchResults from "./componants/searchResults";

function App() {
  const [query, setQuery] = useState("");
 const [results, setResults] = useState([]);

 const handleSearch = async () => {
  const res = await axios.get(`http://localhost:9090/search?q=${query}`);
  setResults(res.data.artworksData);
};

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <SearchResults results={results} />
    </>
  );
}

export default App;
