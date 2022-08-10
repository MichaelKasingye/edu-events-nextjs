// eslint-disable-line react-hooks/exhaustive-deps
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import styles from "../../styles/Events.module.css";
import Head from "next/head";
import EventsList from "../../components/EventsList";
import Herosection from "../../components/Herosection";
import SearchForm from "../../components/SearchForm";
import { fetchEvents } from "../../util/fetch";

const Events = ({ events }) => {
  const [eventsToShow, setEventsToShow] = useState([]);
  const [next, setNext] = useState(3);
  const [searchEvents, setSearchEvents] = useState(events);

  const loopWithSlice = (start, end) => {
    const slicedEvents = events.slice(start, end);
    setSearchEvents([...searchEvents, slicedEvents]);
    setEventsToShow(searchEvents);
  };

  useEffect(() => {
    loopWithSlice(0, 3);
  }, []);

  const handleShowMoreEvents = () => {
    loopWithSlice(next, next + 3);
    setNext(next + 3);
  };
  const onSearch = (data) => {
    setSearchEvents(data);
  };

  return (
    <div>
      <Head>
        <title>EDU Events</title>
        <meta name="description" content="Events page for EDU platform" />
        <meta name="keywords" content="EDU Events" />
      </Head>

      <Herosection />

      <section className={`container-fluid ${styles.section}`}>
        <SearchForm events={events} onSearch={onSearch} />

        <div className={styles.eventssection}>
          <EventsList events={searchEvents} />
        </div>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className={styles.loadmorebtn}
            onClick={handleShowMoreEvents}
          >
            Load More
          </button>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  // all events
  const events = await fetchEvents();
  return {
    props: {
      events,
    },
    revalidate: 10,
  };
};

export default Events;
