import { FaChevronRight } from 'react-icons/fa'
import styles from '../styles/Featured.module.css'
const Featured = ({ events }) => {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom"  style={{ color:"#096691", fontWeight:"700"}}>Similar Events</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {events.slice(0,3).map((event) => (
          <div key={event.id} className="feature col">
            <div>
              <h2>{event.title}</h2>
              <p>{event.excerpt}</p>
              <a href={`/events/${event.id}`} className={styles.iconlinktext}>
                view details
                <FaChevronRight className={styles.iconlink} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
