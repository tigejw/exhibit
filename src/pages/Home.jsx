import Header from "../components/Header";
import ExhibitShowcase from "../components/ExhibitsShowcase";
import { useState } from "react";
import axios from "axios";

export default function HomePage({ searchProps, exhibits, setExhibits, exhibitsLoading, error }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setformError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateExhibit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setformError("");
    try {
      const res = await axios.post("https://exhibit-mw48.onrender.com/exhibits", {
        title,
        description,
      });
      setExhibits([...exhibits, res.data.exhibit]);
      setShowForm(false);
      setTitle("");
      setDescription("");
    } catch (err) {
      setformError("Failed to create exhibit.");
    }
    setLoading(false);
  };

  return (
    <div>
      <Header searchProps={searchProps} />
      <main>
        <div className="exhibits-header-row">
          <h2 className="section-title">Exhibits</h2>
          <button
            className="create-exhibit-btn"
            onClick={() => setShowForm(true)}
          >
            + Create New Exhibit
          </button>
        </div>
        {showForm ? (
          <div className="modal-overlay">
            <form
              className="create-exhibit-form"
              onSubmit={handleCreateExhibit}
            >
              <h3>Create New Exhibit</h3>
              <label>
                Title:
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>
              <label>
                Description:
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
              {formError && <div className="form-formError">{formError}</div>}
              <div className="form-actions">
                <button type="submit" disabled={loading}>
                  {loading ? "Creating..." : "Create"}
                </button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : null}
           {error ? <p className="error">{error}, try again later?</p> : exhibitsLoading ? (
          <div className="loading-indicator">Loading exhibits...</div>
        ) : (
          <ExhibitShowcase exhibits={exhibits} />
        )}
      </main>
    </div>
  );
}
