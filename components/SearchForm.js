import { useState, useEffect } from "react";
import styles from "../styles/Events.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fetchEvents } from "../util/fetch";

const SearchForm = ({ events, onSearch }) => {
  const [searchEvents, setSearchEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["legal tech", "online class", "webinar", "mental health"];

  const getEvents = async (val) => {
    const newevents = await fetchEvents();

    return val === ""
      ? onSearch(newevents)
      : onSearch(
          newevents.filter((event) =>
            event.title.toLowerCase().includes(val.toLowerCase())
          )
        );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredEvents = await events.filter((event) => {
      if (event.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        console.log(event);
        return event;
      }
    });
    await setSearchEvents(filteredEvents);
    onSearch(filteredEvents);
  };

  return (
    <div className={styles.searchcontainer}>
      <form
        className={`row g-3 ${styles.innersearchcontainer}`}
        onSubmit={handleSubmit}
      >
        <div
          className="col-md-6 "
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "stretch",
          }}
        >
          <span
            className="input-group-text"
            style={{
              backgroundColor: "#F2F4F8",
              borderRadius: "10px 0 0 10px",
              border: "none",
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            className={`form-control`}
            style={{
              backgroundColor: "#F2F4F8",
              borderRadius: "0 10px 10px 0",
              border: "none",
            }}
            id="eventSearch"
            placeholder="Event name or keywords"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              getEvents(e.target.value);
            }}
          />
        </div>

        <div className="col-md-4">
          <select
            className={`form-select ${styles.searchform}`}
            aria-label="Default select example"
          >
            <option defaultValue>All categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <button type="submit" className={`btn btn-dark ${styles.searchbtn}`}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
