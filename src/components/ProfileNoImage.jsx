export default function ProfileNoImage() {
  return (
    <div className="no-image">
      <span>No Image</span>

      <svg
        width="130"
        height="130"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-user-x"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
        <path d="M22 22l-5 -5" />
        <path d="M17 22l5 -5" />
      </svg>
    </div>
  )
}
