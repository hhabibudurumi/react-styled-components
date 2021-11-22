/** @format */
import { CardStyle } from "./styles/Card.styled";
export default function Card({ item: { id, title, body, image } }) {
  return (
    <CardStyle layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
    </CardStyle>
  );
}
