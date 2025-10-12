import { useNavigate } from "react-router-dom";
export default function ExhibitShowcase({ exhibits }) {
  const navigate = useNavigate();
  if (!exhibits || exhibits.length === 0) {
    return <p>No exhibits found.</p>;
  }
  return (
    <div className="results-grid-container">
      {exhibits.map((exhibit) => (
        <button
          className="result-card"
          key={exhibit.exhibit_id}
          onClick={() => navigate(`/exhibit/${exhibit.exhibit_id}`)}
          type="button"
        >
          <div className="result-image-container">
            <img src={exhibit.thumbnail} alt={exhibit.title} />
          </div>
          <div className="result-title">{exhibit.title}</div>
          <div className="result-artist">{exhibit.description}</div>
        </button>
      ))}
    </div>
  );
}
