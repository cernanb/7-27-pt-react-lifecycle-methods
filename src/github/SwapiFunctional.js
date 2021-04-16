import React, { useState, useEffect } from "react";

export default function SwapiFunctional() {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json())
      .then((data) => setPeople([...people, ...data.results]));
  }, [page]);

  return (
    <div className="box">
      {people.map((person) => (
        <p>{person.name}</p>
      ))}
      <button onClick={() => setPage(page + 1)}>Get More People</button>
    </div>
  );
}
