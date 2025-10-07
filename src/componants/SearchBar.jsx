export default function SearchBar({ setQuery, query, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search for artworks..."
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
