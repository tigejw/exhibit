import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchResultsPage from "./pages/SearchResults";
import ArtworkViewPage from "./pages/Artwork";
import ExhibitViewPage from "./pages/Exhibit";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import SearchResults from "./components/searchResults";

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
  const [exhibits, setExhibits] = useState([]);

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

  const searchProps = {
    query,
    setQuery,
    source,
    setSource,
    onDisplay,
    setOnDisplay,
    department,
    setDepartment,
    sortBy,
    setSortBy,
    order,
    setOrder,
    limit,
    setLimit,
    page,
    setPage,
    onSearch: handleSearch,
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage searchProps={searchProps} exhibits={exhibits} />}
        />
        <Route
          path="/search"
          element={
            <SearchResultsPage results={results} searchProps={searchProps} />
          }
        />
        <Route path="/artwork/:artworkId" element={<ArtworkViewPage />} />
        <Route path="/exhibit/:exhibitId" element={<ExhibitViewPage />} />
      </Routes>
    </Router>
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
