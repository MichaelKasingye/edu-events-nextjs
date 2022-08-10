import dynamic from "next/dynamic"
import ShareEvent from './ShareEvent';
import styles from "../styles/EventDetails.module.css"
import moment from 'moment';

const LocationMap = dynamic(() => import('./LocationMap'), {ssr: false})

const EventDetails = ({ details }) => {
  const { categories } = details
  const shareUrl = `https://outboxevents.netlify.app/events/${details.id}`;
  return (
    <div className="row g-5">
      <div className="col-md-8">
        <h3 className={`${styles.headers} pb-4 mb-4 `}>Description</h3>

        <article className="blog-post">
          <h2 className="blog-post-title">{details.title}</h2>
          <p className="blog-post-meta" suppressHydrationWarning>{moment(details.date).format('MMMM Do YYYY, h:mm a')}</p>
          <div dangerouslySetInnerHTML={{ __html: details.body }} />
        </article>
      </div>

      <div className="col-md-4">
        <div className="position-sticky" style={{ top: '2rem' }}>
          <div className="p-4 mb-3 rounded">
            <h4 className={styles.headers}>Location on Map</h4>
            <div>
            <LocationMap />
            </div>
          </div>
          <div className="p-4">
            <h4 className={styles.headers}>Tags</h4>
            {categories.map((cat, idx) => (
              <span key={idx} className={styles.tags}>{cat}</span>
            ))}
          </div>

          <div className="p-4">
            <h4 className={styles.headers}>Share</h4>
            <ShareEvent
              title={details.title}
              body={details.body}
              shareUrl={shareUrl}
              excerpt={details.excerpt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
