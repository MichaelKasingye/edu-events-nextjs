import styles from "../../styles/EventDetails.module.css";
import Head from "next/head";
import Register from "../../components/Register";
import EventDetails from "../../components/Details";
import Featured from "../../components/Featured";
import { fetchEvent, fetchEvents } from "../../util/fetch";

const event = ({ event, events }) => {
  return (
    <div className="container">
      <Head>
        <title>{event.title}</title>
        <meta name="keywords" content={event.title} />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <div
        className={`container my-5 ${styles.herosection}`}
        style={{ backgroundImage: `url(${event.img_url})` }}
      >
        <div
          className={`row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3`}
          style={{ height: "500px", backgroundColor: "rgb(0 0 0 / 21%)" }}
        >
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">{event.title}</h1>
            <p className="lead">{event.excerpt}</p>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0">
            <Register event={event} />
          </div>
        </div>
      </div>
      <EventDetails details={event} />
      <Featured events={events} />
    </div>
  );
};

export const getStaticProps = async (context) => {
  //single event
  const event = await fetchEvent(context.params.id);

  // all events
  const events = await fetchEvents();
  return {
    props: {
      event,
      events,
    },
  };
};

export const getStaticPaths = async () => {
  const events = await fetchEvents();
  const ids = events.map((event) => event.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default event;
