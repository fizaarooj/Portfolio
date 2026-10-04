const paths = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.78 2.66 4.78 6.1v5.9h-4v-5.23c0-1.25-.02-2.85-1.74-2.85-1.74 0-2.01 1.36-2.01 2.76v5.32h-4V9.75Z" />
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  facebook: (
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <path
      d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  download: (
    <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  arrow: (
    <path d="M5 12h14m0 0-5-5m5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  external: (
    <path d="M14 5h5v5m0-5L10 14M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  close: (
    <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  ),
  menu: (
    <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.3-1-1.5-1-2.7 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="7.5" cy="11" r="1.2" />
      <circle cx="10.5" cy="7" r="1.2" />
      <circle cx="15" cy="7.5" r="1.2" />
    </>
  ),
  code: (
    <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2.5-10-3 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m4 18 5-5 4 4 3-3 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
  check: (
    <path d="m5 12 4.5 4.5L19 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = '', ...rest }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
