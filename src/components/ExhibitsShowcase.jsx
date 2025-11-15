import { useNavigate } from "react-router-dom";
import CreateExhibitForm from "./CreateExhibitForm";
export default function ExhibitShowcase({
  exhibits,
  showForm,
  setShowForm,
  title,
  setTitle,
  description,
  setDescription,
  handleCreateExhibit,
  formError,
  loading,
}) {
  const navigate = useNavigate();

  if (!exhibits || exhibits.length === 0) {
    return (
      <div>
        <CreateExhibitForm
          showForm={showForm}
          setShowForm={setShowForm}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          handleCreateExhibit={handleCreateExhibit}
          formError={formError}
          loading={loading}
        />
        <p>No exhibits found.</p>
      </div>
    );
  }

  const sortedExhibits = [...exhibits]
    .sort((a, b) => new Date(b.date_created) - new Date(a.date_created))
    .reverse();

  return (
    <>
      <div>
        <CreateExhibitForm
          showForm={showForm}
          setShowForm={setShowForm}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          handleCreateExhibit={handleCreateExhibit}
          formError={formError}
          loading={loading}
        />
        <div className="results-grid-container">
          {sortedExhibits.map((exhibit) => (
            <button
              className="result-card"
              key={exhibit.exhibit_id}
              onClick={() => navigate(`/exhibit/${exhibit.exhibit_id}`)}
              type="button"
            >
              <div className="result-image-container">
                <img
                  src={exhibit.thumbnail}
                  alt={`${exhibit.title} thumbnail`}
                />
              </div>
              <div className="result-title">{exhibit.title}</div>
              <div className="result-artist">{exhibit.description}</div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
