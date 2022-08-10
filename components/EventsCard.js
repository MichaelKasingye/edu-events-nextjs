import Image from "next/image";
import Link from 'next/link'
import { Card, Col, Container, Row } from "react-bootstrap";

const EventsCard = ({event}) => {
  const { title, excerpt, img_url, id } = event
  return (
    <Card className="h-100" style={{borderRadius: '1rem', boxShadow: "3px 4px 0 rgba(9,102,145, 0.05)"}}>
      <Card.Img
        variant="top"
        src={img_url || `/eventsImg.png`}
        width="352px"
        height="160px"
      />
      <Card.Body>
          <Card.Title><a style={{ textDecoration: 'none', color:"#000", fontWeight:"600"}} href={`/events/${id}`}>{title}</a></Card.Title>
          <hr />
        <Card.Text>{excerpt}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventsCard;
