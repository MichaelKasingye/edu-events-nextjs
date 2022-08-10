import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import EventsCard from "./EventsCard";

const EventsList = ({ events }) => {
  return (
    <Container>
      <Row className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {events?.map((event) => (
          <Col key={event.id}>
            <EventsCard event={event} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsList;
