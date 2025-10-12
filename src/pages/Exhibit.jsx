import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
export default function ExhibitViewPage({searchProps}) {
    const navigate = useNavigate();
  const { exhibitId } = useParams();
  const [exhibit, setExhibit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:9090/exhibits/${exhibitId}`)
      .then((res) => {
        setExhibit(res.data.exhibit);
        setLoading(false);
      })
      .catch(() => {
        setExhibit(null);
        setLoading(false);
      });
  }, [exhibitId]);

  if (loading) return <p>Loading...</p>;
  if (!exhibit) return <p>Exhibit not found.</p>;

return (
    <>
      <Header searchProps={searchProps} />
      <div className="exhibit-view-container">
        <div className="exhibit-header">
          <h2>{exhibit.title}</h2>
          <p>{exhibit.description}</p>
        </div>
        <div className="results-grid-container">
          {exhibit.artworks && exhibit.artworks.length > 0 ? (
            exhibit.artworks.map((artwork) => (
              <button
                className="result-card"
                key={artwork.objectID || artwork.artwork_id}
                onClick={() => navigate(`/artwork/${artwork.objectID || artwork.artwork_id}`)}
                type="button"
              >
                <div className="result-image-container">
                  <img src={artwork.primaryImageSmall} alt={artwork.title} />
                </div>
                <div className="result-title">{artwork.title}</div>
                <div className="result-artist">{artwork.artistDisplayName}</div>
              </button>
            ))
          ) : (
            <p>No artworks in this exhibit yet.</p>
          )}
        </div>
      </div>
    </>
  );
}
