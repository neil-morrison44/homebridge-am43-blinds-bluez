import React from "react"

const MotorIcon = ({ small = false }: { small?: boolean }) => (
  <svg
    width={107.81 / (small ? 4 : 1)}
    height={231.91 / (small ? 4 : 1)}
    viewBox="0 0 107.81 231.91"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#000" transform="translate(-53.44 -42.712)">
      <rect
        x="55.94"
        y="51.405"
        width="102.81"
        height="212.42"
        rx="21.631"
        ry="30.702"
        fill="#fff"
        fillRule="evenodd"
        strokeWidth="5"
      />
      <path
        d="M55.635 138.95c33.616 3.391 67.232 4.084 100.85.144l-.756-.756"
        fill="none"
        strokeWidth="4"
      />
      <path
        d="M85.854 60.21c8.421-6.58-2.231-11.39 7.932-14.693 10.163-3.303 4.374 6.851 15.054 7.224s5.612-10.16 15.521-6.157-1.054 8.06 6.888 15.21c7.941 7.151 10.83-4.175 15.848 5.26 5.017 9.436-5.988 5.498-4.501 16.08 1.487 10.582 10.98 3.763 8.759 14.216-2.222 10.453-8.12.362-13.783 9.424-5.663 9.063 5.993 9.941-2.428 16.52-8.421 6.58-6.454-4.942-16.617-1.64s-1.799 11.467-12.478 11.095c-10.68-.373-1.767-7.935-11.675-11.937-9.908-4.003-8.749 7.627-16.69.477-7.942-7.15 3.747-7.214-1.27-16.649-5.018-9.435-11.606.22-13.093-10.362-1.487-10.583 7.507-3.118 9.729-13.57 2.222-10.454-9.031-7.292-3.368-16.355 5.662-9.063 7.754 2.437 16.175-4.142z"
        fill="#fff"
        strokeWidth="4.285"
      />
    </g>
    <g color="#000">
      <path
        d="M55.16 151.637c8.512 0 15.365 5.751 15.365 12.895v51.614c0 7.144-8.083 15.764-16.596 15.764s-14.137-8.62-14.137-15.764v-51.614c0-7.144 6.854-12.895 15.366-12.895z"
        fill="none"
      />
      <path d="M53.57 150.507c-9.264 0-17.034 6.353-17.034 14.562v51.613c0 8.21 9 6.364 18.263 6.364 9.264 0 15.804 1.846 15.804-6.364V165.07c0-8.21-7.77-14.562-17.033-14.562zm0 3.334c7.761 0 13.698 5.15 13.698 11.23v51.612c0 6.078-6.347 3.852-14.109 3.852s-13.289 2.226-13.289-3.852V165.07c0-6.078 5.937-11.229 13.7-11.229z" />
    </g>
    <g fill="none" stroke="#000" transform="translate(-53.44 -42.712)">
      <circle cx="107.62" cy="88.176" r="10.175" strokeWidth="2.544" />
      <circle cx="106.94" cy="215.28" r="9" strokeWidth="2.5" />
      <circle cx="106.79" cy="245.74" r="9" strokeWidth="2.5" />
    </g>
  </svg>
)

export default MotorIcon