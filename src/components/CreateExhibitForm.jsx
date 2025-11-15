import React, { useEffect, useRef } from "react";

export default function CreateExhibitForm({
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
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (!showForm) return;
    firstInputRef.current?.focus();

    function onKey(e) {
      if (e.key === "Escape") setShowForm(false);
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [showForm, setShowForm]);

  if (!showForm) return null;

  return (
      <div className="inline-create-form" role="region" aria-labelledby="create-exhibit-title">
      <form onSubmit={handleCreateExhibit}>
        <label>
          Title
          <input
            ref={firstInputRef}
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {formError && <div className="form-error" role="alert">{formError}</div>}

        <div className="form-actions">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}