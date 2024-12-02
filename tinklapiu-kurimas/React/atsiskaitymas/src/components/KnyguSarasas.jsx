import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function KnyguSarasas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/knygos");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleReservation = async (id, currentStatus) => {
    try {
      const bookResponse = await fetch(`http://localhost:3001/knygos/${id}`);
      const bookData = await bookResponse.json();

      const updatedData = { ...bookData, reserved: !currentStatus };

      const response = await fetch(`http://localhost:3001/knygos/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      //   MUST CHANGE
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const shortenText = (text) => {
    if (text.length >= 20) {
      return text.slice(0, 12) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="container">
      <ul className="list-inline mt-1">
        {data.map((knyga) => (
          <li key={knyga.id} className="list-inline-item p-2">
            <div key={knyga.id} className="card" style={{ width: "16rem" }}>
              <img
                className="card-img-top"
                src={knyga.img}
                alt="Card image cap"
              />

              <div className="card-body">
                {/* MAKE SO TITLE AND AUTHER GET CUT OFF SO THE CARD DOESN'T EXPAND */}
                <h4 className="card-title">{shortenText(knyga.pavadinimas)}</h4>
                <h5 className="card-title">{shortenText(knyga.autorius)}</h5>
                <p className="card-text">{knyga.kaina}€</p>
                <p>
                  {knyga.reserved ? (
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() =>
                        toggleReservation(knyga.id, knyga.reserved)
                      }
                    >
                      Išduoti skaitytojui
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() =>
                        toggleReservation(knyga.id, knyga.reserved)
                      }
                    >
                      Gražinti
                    </a>
                  )}
                </p>
                <Link to={`/knygos/${knyga.id}`} className="btn btn-secondary">
                  Edit
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
