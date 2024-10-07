export default function DetailsMore({ icon, value }) {
  return (
    <div className="more-items">
      {icon}
      <span className="more-title">{value}</span>
    </div>
  )
}
