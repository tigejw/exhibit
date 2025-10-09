export default function SearchBar({
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
  onSearch,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      onSearch();
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
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
        <select value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="">All Sources</option>
          <option value="met">The Met</option>
          <option value="chicago">Art Institute of Chicago</option>
        </select>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          <option value="European Art">European Art</option>
          <option value="Asian Art">Asian Art</option>
          <option value="Greek, Roman and Byzantium Art">
            Greek, Roman and Byzantium Art
          </option>
          <option value="Modern and Contemporary Art">
            Modern and Contemporary Art
          </option>
          <option value="Arts of the Americas">Arts of the Americas</option>
          <option value="Ancient Near Eastern Art">
            Ancient Near Eastern Art
          </option>
          <option value="Arms and Armor">Arms and Armor</option>
          <option value="Arts of Africa, Oceania, and the Americas">
            Arts of Africa, Oceania, and the Americas
          </option>
          <option value="The Cloisters">The Cloisters</option>
          <option value="The Costume Institute">The Costume Institute</option>
          <option value="Drawings and Prints">Drawings and Prints</option>
          <option value="Egyptian Art">Egyptian Art</option>
          <option value="Islamic Art">Islamic Art</option>
          <option value="The Robert Lehman Collection">
            The Robert Lehman Collection
          </option>
          <option value="The Libraries">The Libraries</option>
          <option value="Medieval Art">Medieval Art</option>
          <option value="Musical Instruments">Musical Instruments</option>
          <option value="Photographs">Photographs</option>
          <option value="Architecture and Design">
            Architecture and Design
          </option>
          <option value="Research Center">Research Center</option>
          <option value="Textiles">Textiles</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">sort By</option>
          <option value="title">title</option>
          <option value="medium">medium</option>
          <option value="artistDisplayName">artist</option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="">order</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          placeholder="Limit"
          min="1"
        />
        <button type="submit">search</button>
      </form>
      <button onClick={handlePrevPage} disabled={page <= 1}>
        previous page
      </button>

      <button onClick={handleNextPage}>next page</button>
    </>
  );
}
