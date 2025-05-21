export const bubbleIcon = (color?: string) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill={color || "#555"}
  >
    <path d="M16 4h-4v8h4v4h-8v-4h4v-8zm16 0h-4v8h4v4h-8v-4h4v-8zm-4 36h-8v-12h8v12zm12 0h-8v-12h8v12z" />
  </svg>
);

export const clearIcon = (color?: string) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 4L12 10L5 4"
      stroke={color || "#ABDDF0"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 16L12 10L19 16"
      stroke={color || "#ABDDF0"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const eyeIcon = (color?: string) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.3125 9C7.3125 8.06802 8.06802 7.3125 9 7.3125C9.93198 7.3125 10.6875 8.06802 10.6875 9C10.6875 9.93198 9.93198 10.6875 9 10.6875C8.06802 10.6875 7.3125 9.93198 7.3125 9Z"
      fill={color || "#568A9E"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 9C1.5 10.2295 1.81872 10.6436 2.45617 11.4718C3.72897 13.1253 5.86358 15 9 15C12.1364 15 14.271 13.1253 15.5438 11.4718C16.1813 10.6436 16.5 10.2295 16.5 9C16.5 7.77047 16.1813 7.35639 15.5438 6.52825C14.271 4.87467 12.1364 3 9 3C5.86358 3 3.72897 4.87467 2.45617 6.52825C1.81872 7.3564 1.5 7.77047 1.5 9ZM9 6.1875C7.4467 6.1875 6.1875 7.4467 6.1875 9C6.1875 10.5533 7.4467 11.8125 9 11.8125C10.5533 11.8125 11.8125 10.5533 11.8125 9C11.8125 7.4467 10.5533 6.1875 9 6.1875Z"
      fill={color || "#568A9E"}
    />
  </svg>
);

export const arrowFilledIcon = (color?: string) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.9993 23.8334C18.9824 23.8334 23.8327 18.9831 23.8327 13C23.8327 7.01694 18.9824 2.16669 12.9993 2.16669C7.01626 2.16669 2.16602 7.01694 2.16602 13C2.16602 18.9831 7.01626 23.8334 12.9993 23.8334ZM13.5082 9.1755C13.8255 8.8582 14.3399 8.8582 14.6572 9.1755L17.9072 12.4255C18.2245 12.7428 18.2245 13.2572 17.9072 13.5745L14.6572 16.8245C14.3399 17.1418 13.8255 17.1418 13.5082 16.8245C13.1909 16.5072 13.1909 15.9928 13.5082 15.6755L15.3711 13.8125H8.66602C8.21728 13.8125 7.85352 13.4488 7.85352 13C7.85352 12.5513 8.21728 12.1875 8.66602 12.1875H15.3711L13.5082 10.3245C13.1909 10.0072 13.1909 9.4928 13.5082 9.1755Z"
      fill={color || "white"}
    />
  </svg>
);

export const closeIcon = (color?: string) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
        fill={color || "#FFFFFF"}
      />{" "}
    </g>
  </svg>
);

export const errorIcon = (color?: string) => (
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z"
        fill={color || "#e31616"}
      />
    </g>
  </svg>
);

export const menuIcon = (color?: string) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke={color || "#FFFFFF"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </g>
  </svg>
);

export const errorAlertICON = (red?: string) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="40"
      height="40"
      rx="12"
      fill={red || "#FF4842"}
      fillOpacity="0.16"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 17.3478 28.9464 14.8043 27.0711 12.9289C25.1957 11.0536 22.6522 10 20 10ZM20 25C19.4477 25 19 24.5523 19 24C19 23.4477 19.4477 23 20 23C20.5523 23 21 23.4477 21 24C21 24.5523 20.5523 25 20 25ZM20 22C20.5523 22 21 21.5523 21 21V16C21 15.4477 20.5523 15 20 15C19.4477 15 19 15.4477 19 16V21C19 21.5523 19.4477 22 20 22Z"
      fill={red || "#FF4842"}
    />
  </svg>
);

export const successAlertICON = (green?: string) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="40"
      height="40"
      rx="12"
      fill={green || "#54D62C"}
      fillOpacity="0.16"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 20C10 14.4772 14.4772 10 20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20ZM19.73 23.61L24.3 17.61V17.58C24.5179 17.2942 24.5668 16.9138 24.4283 16.5822C24.2897 16.2505 23.9848 16.018 23.6283 15.9722C23.2718 15.9264 22.9179 16.0742 22.7 16.36L18.92 21.36L17.29 19.28C17.0703 18.9978 16.7167 18.8542 16.3624 18.9033C16.0081 18.9525 15.707 19.1869 15.5724 19.5183C15.4378 19.8497 15.4903 20.2278 15.71 20.51L18.15 23.62C18.3408 23.8615 18.6322 24.0017 18.94 24C19.2495 23.9993 19.5412 23.8552 19.73 23.61Z"
      fill={green || "#54D62C"}
    />
  </svg>
);
