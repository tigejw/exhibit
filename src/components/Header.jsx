import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

export default function Header({ searchProps }) {
  const navigate = useNavigate();
  return (
    <header>
      <h1
        className="site-title"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        the met x the aic
      </h1>
      <SearchBar searchProps={searchProps} />
    </header>
  );
}