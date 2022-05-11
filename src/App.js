import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [toursState, setToursState] = useState([]);

  const removeTour = (id) => {
    const newTours = toursState.filter((tour) => tour.id != id);
    setToursState(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const toursJson = await response.json();
    setLoading(false);
    setToursState(toursJson);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (toursState.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours
        key={toursState.id}
        toursProp={toursState}
        removeTourFunction={removeTour}
      />
    </main>
  );
}

export default App;
