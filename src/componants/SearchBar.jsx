export default function SearchBar({ setQuery, query, setSearchTrigger }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("1")
    setSearchTrigger(true)
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
