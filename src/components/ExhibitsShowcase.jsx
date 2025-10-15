import { useNavigate } from "react-router-dom";
export default function ExhibitShowcase({ exhibits }) {

  const navigate = useNavigate();
  if (!exhibits || exhibits.length === 0) {
    return <p>No exhibits found.</p>;
  }

  const sortedExhibits = [...exhibits].sort(
    (a, b) => new Date(b.date_created) - new Date(a.date_created)
  ).reverse();

  return (
    <div className="results-grid-container">
      {sortedExhibits.map((exhibit) => (
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
