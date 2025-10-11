import SearchBar from "./SearchBar";

export default function Header({searchProps}) {
  return (
    <header>
      <h1 className="site-title">the met x the aic</h1>
      <SearchBar searchProps={searchProps} />
    </header>
  );
}