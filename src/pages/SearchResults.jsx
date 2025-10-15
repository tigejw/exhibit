import Header from "../components/Header";
import SearchResults from "../components/searchResults";

export default function SearchResultsPage({
  results,
  searchProps,
  loading,
  error,
}) {
  console.log(error, "<<<")
  return (
    <div>
      <Header searchProps={searchProps} />
      <main>
        <h2>Search Results</h2>
        {error && <p className="error">{error}, try again later?</p>}
        {loading ? <p>Loading...</p> : <SearchResults results={results} error={error} />}
      </main>
    </div>
  );
}
