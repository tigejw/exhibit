export default function ExhibitShowcase({ exhibits }) {
  if (!exhibits || exhibits.length === 0) {
    return <p>No exhibits found.</p>;
  }
  return (
    <div className="results-grid-container">
      {exhibits.map((exhibit) => (
        <div className="result-card" key={exhibit.exhibit_id}>
          <div className="result-image-container">
            {exhibit.thumbnail ? (
              <img src={exhibit.thumbnail} alt={exhibit.title} />
            ) : (
              <div className="placeholder-img" />
            )}
          </div>
          <div className="result-title">{exhibit.title}</div>
          <div className="result-artist">{exhibit.description}</div>
        </div>
      ))}
    </div>
  );
}
