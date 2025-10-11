import Header from "../components/Header";
import ExhibitShowcase from "../components/ExhibitsShowcase";

export default function HomePage({ searchProps, exhibits }) {
  return (
    <div>
      <Header searchProps={searchProps} />
      <main>
        <h2 className="section-title">Exhibits</h2>
        <ExhibitShowcase exhibits={exhibits} />
      </main>
    </div>
  );
}