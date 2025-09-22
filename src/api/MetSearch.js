import { useEffect, useState } from "react";
import axios from "axios";

export default function MetSearch({ query, searchTrigger }) {
  const [results, setResults] = useState(null);
  const [objects, setObjects] = useState([]);
  
  useEffect(() => {
    if (!searchTrigger) return;
    if (!query) return;
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`
      )
      .then(({ data }) => {
        setResults(data);
        console.log("results", data);
        return data.objectIDs
      })
      .then((objectIDs)=>(
        const first20 = searchData.objectIDs.slice(0, 20) 

      ))
  }, [searchTrigger, query]);
}
