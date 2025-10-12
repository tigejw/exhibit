import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
export default function ArtworkViewPage({ searchProps }) {
  const { artworkId } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:9090/artwork/${artworkId}`)
      .then((res) => {
        setArtwork(res.data.artwork);
        setLoading(false);
      })
      .catch(() => {
        setArtwork(null);
        setLoading(false);
      });
  }, [artworkId]);

  if (loading) return <p>Loading...</p>;
  if (!artwork) return <p>Artwork not found.</p>;
  console.log(artwork);
  return (
    <>
      <Header searchProps={searchProps} />
      <div className="artwork-view-container">
        <div className="artwork-image-section">
          <img
            src={artwork.primaryImage}
            alt={artwork.title}
            className="artwork-main-image"
          />
          <div className="artwork-title">{artwork.title}</div>
          <div className="artwork-artist">{artwork.artistDisplayName}</div>
        </div>
        <div className="artwork-info-section">
          <p>
            <strong>Source:</strong> {artwork.source}
          </p>
          <p>
            <strong>isPublicDomain:</strong>{" "}
            {artwork.isPublicDomain ? "Yes" : "No"}
          </p>
          <p>
            <strong>Department:</strong> {artwork.museumDepartment}
          </p>
          <p>
            <strong>Artist Bio:</strong> {artwork.artistDisplayBio}
          </p>
          <p>
            <strong>Nationality:</strong> {artwork.artistNationality}
          </p>
          <p>
            <strong>Date:</strong> {artwork.objectDate}
          </p>
          <p>
            <strong>Medium:</strong> {artwork.medium}
          </p>
          <p>
            <strong>Dimensions:</strong> {artwork.dimensions}
          </p>
          <p>
            <strong>On View:</strong> {artwork.isOnView ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </>
  );
}
