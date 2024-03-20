import "./SectionDetail.scss";

export default function SectionDetail({ title, dotpoints }) {
  return (
    <div className="section-detail">
      <h1>{title}</h1>
      {dotpoints.map((text) => (
        <h2>{text}</h2>
      ))}
    </div>
  );
}
