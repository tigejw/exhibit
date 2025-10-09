export default function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results found</p>;
  }

  return (
    <div className="results-grid-container">
      {results.map((artwork) => (
        <div className="result-card" key={artwork.objectID}>
          <div className="result-image-container">
            <img
              src={artwork.primaryImageSmall}
              alt={artwork.title || "Artwork image"}
            />
          </div>
          <div className="result-title">{artwork.title}</div>
          <div className="result-artist">{artwork.artistDisplayName}</div>
        </div>
      ))}
    </div>
  );
}
