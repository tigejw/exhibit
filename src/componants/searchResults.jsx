export default function SearchResults({ results }) {

  if (!results.length) {
    return <p>No results found</p>;
  }
  return (
    <ul>
      {results.map((artwork) => (
        <li key={artwork.objectID}>
          <img
            src={artwork.primaryImageSmall}
            alt={artwork.title}
            width={100}
          />
          <div>{artwork.title}</div>
          <div>{artwork.artistDisplayName}</div>
        </li>
      ))}
    </ul>
  );
}
