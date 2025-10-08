import { useState } from "react";
import SearchBar from "./componants/SearchBar";
import axios from "axios";
import SearchResults from "./componants/searchResults";

function App() {
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("");
  const [onDisplay, setOnDisplay] = useState("");
  const [department, setDepartment] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [limit, setLimit] = useState("");
  const [page, setPage] = useState(1);

  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (source) params.append("source", source);
    if (onDisplay) params.append("onDisplay", onDisplay);
    if (department) params.append("department", department);
    if (sortBy) params.append("sortBy", sortBy);
    if (order) params.append("order", order);
    if (limit) params.append("limit", limit);
    if (page) params.append("page", page);
    console.log(params.toString());
    const res = await axios.get(
      `http://localhost:9090/search?${params.toString()}`
    );
    setResults(res.data.artworksData);
  };

  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        source={source}
        setSource={setSource}
        onDisplay={onDisplay}
        setOnDisplay={setOnDisplay}
        department={department}
        setDepartment={setDepartment}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        onSearch={handleSearch}
      />
      <SearchResults results={results} />
    </>
  );
}

export default App;

/*
notes
search, filter, sort, pagination
//add next and previous buttons for pagination
accessibility 
loading states
error handling
artwork component with full image and details
links to museum page
where can you view
*/
