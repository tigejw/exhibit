import Header from "../components/Header";
import SearchResults from "../components/searchResults";

export default function SearchResultsPage({ results, searchProps }) {
  return (
    <div>
      <Header searchProps={searchProps} />
      <main>
        <h2>Search Results</h2>
        <SearchResults results={results} />
      </main>
    </div>
  );
}