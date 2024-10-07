export default function DetailsItems({ title, children }) {
  return (
    <div className="details-items">
      <span className="title-details">{title}</span>
      {children}
    </div>
  )
}
