export default function MediaType({ media_type }) {
  return media_type === 'movie' ? (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#67fb15"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-movie"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M8 4l0 16" />
      <path d="M16 4l0 16" />
      <path d="M4 8l4 0" />
      <path d="M4 16l4 0" />
      <path d="M4 12l16 0" />
      <path d="M16 8l4 0" />
      <path d="M16 16l4 0" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#67fb15"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-device-tv-old"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M16 3l-4 4l-4 -4" />
      <path d="M15 7v13" />
      <path d="M18 15v.01" />
      <path d="M18 12v.01" />
    </svg>
  )
}
