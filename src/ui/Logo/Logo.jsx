export const Logo = ({ color = "#303030", bgColor = "#e2e8f0", ...props }) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 569.27 543.99"
    {...props}
  >
    <path
      d="M517.69 326.99c0 119.84-97.15 216.99-216.99 216.99S83.71 446.83 83.71 326.99 297.4 0 300.7 0s216.99 207.15 216.99 326.99Z"
      style={{
        fill: bgColor,
      }}
    />
    <path
      className="cls-2"
      style={{
        fill: color,
      }}
      d="M122.18 384.22c-5.01-9.59-13.5-17.14-25.48-22.66a75.693 75.693 0 0 0-17.85-5.72c-6.22-1.1-12.53-1.87-18.94-2.34-5.24-.41-10.41-.98-15.5-1.71a69.094 69.094 0 0 1-14.9-3.87c-3.93-1.26-6.14-3.64-6.64-7.15-.24-1.67-.3-3.26-.19-4.77 1.39-17.67 6.66-34.12 15.81-49.35 9.15-15.23 20.85-28.18 35.09-38.87 1.89-1.43 3.67-2.26 5.35-2.5 1.3-.19 2.45.15 3.45 1 .71.73 1.12 1.41 1.24 2.05.12.64.2 1.1.24 1.37.12.81.18 1.59.21 2.33.02.74.08 1.41.16 2 .09.6.22 1.16.41 1.68.26 1.07.94 1.77 2.04 2.11.45.05.89.04 1.32-.02.59-.08 1.2-.31 1.81-.67 3.15-1.88 4.9-4.2 5.25-6.95.35-2.75.41-4.96.17-6.64-.28-1.95-.88-3.84-1.81-5.7-4.48-8.18-11.35-12.85-20.61-14.01-2.16-.08-4.27.03-6.32.32-2.86.41-5.67 1.22-8.42 2.44a63.288 63.288 0 0 0-13.17 7.92c-14.72 11.58-26.19 25.85-34.4 42.79C2.34 293.63-1.06 309.77.29 325.73c.09 1.03.21 2.04.35 3.01 1.05 7.35 3.31 14.3 6.78 20.86 4.05 7.53 9.53 13.69 16.45 18.49 7.12 4.66 14.87 7.73 23.27 9.2 8.4 1.47 16.98 2.44 25.76 2.89 5.17.31 10.3.73 15.4 1.27 2.72.16 5.25.88 7.58 2.14 1.94 1.21 3.04 2.76 3.31 4.65.31 2.16-.64 4.2-2.85 6.11-8.78 8.42-16.93 13.72-24.48 15.9-7.54 2.18-13.05 3.52-16.5 4.01-8.32 1.19-16.71.93-25.17-.79-1.71-.42-3.35-.51-4.92-.29-2.59.37-3.73 1.69-3.4 3.96.1.7.33 1.36.69 1.97 3.4 6.84 8.52 12.48 15.36 16.91 6.83 4.43 14.13 6.39 21.89 5.89l3.82-.46c17.18-2.45 32.63-9.1 46.35-19.93 11.41-8.85 16.38-18.47 14.9-28.84-.42-2.92-1.32-5.74-2.7-8.46ZM220.38 315.99c-.4-3-.64-4.8-.73-5.39-1.12-7.83-2.4-12.2-3.86-13.09-.66-.4-1.4-.54-2.21-.43-.76.11-1.41.46-1.96 1.06-.55.6-.84 1.32-.89 2.15-.14 4.04-.17 9.23-.09 15.56.02 15.98-.23 27.71-.76 35.17-.93 12.37-2.99 18.78-6.18 19.24-2.11.3-3.64-.67-4.59-2.9-.95-2.23-1.67-5.05-2.16-8.46-.61-4.27-1.09-9.16-1.44-14.68-.54-7.64-1.06-13.24-1.57-16.81-.93-6.48-2.26-11.56-3.99-15.22-2.69-5.73-6.71-8.22-12.06-7.45-1.35.19-2.58.67-3.68 1.44-3.63 2.78-5.86 7.81-6.69 15.1l-.05.83c.03 4.46.03 9.15-.02 14.06-.04 4.91-.16 9.71-.34 14.4-.19 4.69-.54 8.94-1.07 12.76-.53 3.82-1.23 6.92-2.11 9.27-.88 2.36-2.02 3.64-3.42 3.84-2.05.29-3.57-.68-4.55-2.91s-1.71-5.05-2.2-8.45c-.61-4.27-1.09-9.16-1.44-14.68-.53-7.59-1.06-13.19-1.58-16.81-.93-6.48-2.26-11.56-3.99-15.22-2.69-5.73-6.71-8.22-12.06-7.45-3.19.46-5.65 2.35-7.37 5.68-1.73 3.33-2.8 7.54-3.2 12.61-.41 5.07-.4 9.14 0 12.2.41 3.06.63 4.72.67 4.99 1.81 12.7 5.55 23.43 11.22 32.22 6.64 10.24 14.42 14.72 23.34 13.45 2.81-.4 5.27-1.79 7.39-4.16 2.11-2.37 3.91-5.42 5.39-9.16 1.48-3.74 2.65-7.96 3.53-12.66 2.04 4.23 4.41 7.93 7.12 11.1s5.71 5.55 9 7.15c3.29 1.6 6.88 2.12 10.77 1.56 3.57-.51 6.55-2.51 8.94-5.99 2.4-3.48 4.33-7.92 5.79-13.31 1.46-5.39 2.5-11.26 3.11-17.6.61-6.34.86-12.68.76-19-.1-6.32-.36-10.99-.76-13.99ZM297.91 370.45c-3.84-8.77-6.5-18.31-7.98-28.63-1.2-8.43-1.76-19.87-1.68-34.32 0-6.12-.12-10.07-.37-11.85a34.56 34.56 0 0 0-.98-4.57c-.93-3.06-2.75-5.75-5.45-8.07-1.82-1.56-3.7-2.2-5.65-1.92-1.03.15-1.94.53-2.73 1.13-3.37 2.25-4.94 5.75-4.7 10.51.12 2.02-.03 3.84-.46 5.44-1.93-2.7-4.01-4.17-6.25-4.4-2.24-.23-4.03-.25-5.38-.06-1.24.18-2.41.51-3.5 1-9.87 4.22-16.85 12.69-20.93 25.4-2.81 8.51-3.93 15.21-3.37 20.12s.88 7.63.96 8.17c1.23 8.64 4.75 16.66 10.55 24.04 4.16 5.19 8.48 7.47 12.97 6.83 1.84-.26 3.49-1.02 4.97-2.28a22.72 22.72 0 0 0 5.32-6.71c3.66-6.42 6.58-13.18 8.76-20.27 3.26 8.91 8.05 17.18 14.38 24.82 1.63 2.14 3.62 3.75 5.99 4.85 1.33.42 2.45.56 3.37.43.65-.09 1.19-.34 1.63-.73 1.02-.97 1.54-2.07 1.56-3.28.02-1.22-.02-2.15-.11-2.8-.14-.97-.44-1.92-.9-2.85Zm-30.83-44.47c-1.78 11.5-4.2 20.78-7.27 27.83-1.53 3.58-3.1 5.49-4.72 5.72-1.95.28-3.3-2.26-4.06-7.61-.66-4.59-.61-10.06.14-16.39 1.17-9.54 3.81-16.92 7.92-22.13 2.15-2.68 4.77-4.24 7.85-4.68.59-.08.99.55 1.18 1.9.42 2.92.07 8.04-1.03 15.36Z"
    />
    <path
      className="cls-2"
      style={{
        fill: color,
      }}
      d="M569.1 332.03c-.71-21.56-2.28-40.85-4.71-57.87-.58-4.05-1.27-8.09-2.06-12.11l-.17-1.22c-2.52-13.75-6.67-20.46-12.47-20.13-6.48.93-10.32 5.69-11.52 14.3-.5 3.43-.67 6.3-.51 8.59.02 1.27.1 2.85.27 4.76.09 4.07-.22 12.33-.93 24.77-1.13 19.46-3.73 29.64-7.79 30.55-2.02.12-3.5-.92-4.42-3.13-.92-2.21-1.71-5.59-2.36-10.12-.42-4.13-.75-8.69-.96-13.67-.35-7.83-.93-14.61-1.75-20.34-.8-5.62-2.2-10.21-4.2-13.79-2.15-3.88-5.52-5.66-10.11-5.34-4.36.73-7.48 4.02-9.34 9.85-1.87 5.84-2.63 11.39-2.29 16.66.25 3.86.5 6.92.74 9.2l-1.94 16.23c-1.96 15.22-4.64 23.07-8.05 23.56-2.05.29-3.5-.49-4.35-2.36-.85-1.86-1.45-4.06-1.81-6.6-.43-3.03-.71-7.89-.85-14.6-.36-8.66-.85-15.23-1.49-19.71-.95-6.64-2.57-12.01-4.86-16.09-3.69-6.53-9.69-9.2-18.01-8.01-4 .57-7.78 3.81-11.35 9.72-3.3 5.43-5.18 10.44-5.63 15.03-.97-10.66-1.7-22.66-2.17-35.99-1.11-23.99-2.28-40.25-3.5-48.78-.79-5.51-2.74-9.31-5.85-11.4-1.4-.9-2.9-1.35-4.49-1.34-5.19.74-8.13 4.99-8.84 12.76-2.62 19.5-3.6 38.44-2.96 56.82.41 12.33 1.38 25.44 2.88 39.31-2.09 8.96-5.21 17.56-9.37 25.79-5.84 11.58-13.13 18.08-21.86 19.5-4.35.46-7.66-1.15-9.95-4.82-2.29-3.67-3.81-8.12-4.56-13.37-.9-6.32-.83-13.14.22-20.46.98-6.26 2.6-11.63 4.85-16.11 2.25-4.48 5.1-7.05 8.53-7.71 1.69-.13 2.77.31 3.25 1.31.47 1.01.78 2 .92 2.97.28 1.95.18 4.55-.29 7.81-.06.73-.05 1.41.05 2.06.28 1.95 1.31 3.59 3.1 4.93 1.68.97 3.28 1.35 4.79 1.13.76-.11 1.49-.38 2.2-.81 2.2-1.2 3.35-3.21 3.44-6.03.01-1.82-.11-3.65-.37-5.49-.32-2.27-.84-4.51-1.54-6.73-2.89-9.45-10.39-13.48-22.48-12.09-6.74 1.07-12.39 4.07-16.95 9-4.56 4.92-7.96 10.95-10.19 18.08-2.24 7.13-3.27 13.17-3.11 18.14.1 3.03.22 5.53.38 7.52-.01.19-.03.39-.05.58-.34 4.18-.84 8.32-1.49 12.41-.66 4.09-1.82 8.02-3.48 11.79-.93 2.01-2.04 3.1-3.33 3.29-1.68.24-3.01-.45-4.02-2.07-1.51-2.48-2.53-5.54-3.04-9.16-.52-3.67-.85-7.32-.98-10.94-.16-2.29-.35-4.39-.57-6.29-1.1-9.65-1.99-19.34-2.66-29.06-.61-8.13-1.14-14.72-1.59-19.78 5.78-1.6 10.48-3.69 14.11-6.27 3.63-2.59 5.31-5.6 5.04-9.03-.26-1.45-1.19-2.83-2.78-4.15-1.59-1.32-3.56-1.89-5.91-1.72l-4.62.66-7.69 1.18c-.46-5.89-.94-10.62-1.45-14.18-.47-3.29-1.05-6.57-1.74-9.84-.53-2.57-1.51-4.94-2.92-7.11s-3.35-3.38-5.81-3.64l-1.31.1c-.97.14-1.91.49-2.82 1.07-1.2.83-2.19 1.88-2.94 3.15-1.34 2.56-2.19 5.3-2.55 8.22-1.69 10.55-2.55 19.58-2.58 27.08-4.34.9-7.87 1.66-10.59 2.3-2.72.64-4.27.98-4.65 1.04-2.47.46-4.15 1.27-5.03 2.41-.88 1.15-1.26 2.18-1.13 3.1.42 2.97 2.68 5.17 6.77 6.6 4.09 1.43 9.12 2.18 15.08 2.27 1.05 18.54 2.25 32.51 3.59 41.91 1.91 13.34 4.54 23.66 7.9 30.96 1.76 3.83 4.22 7.14 7.37 9.94 3.52 3.03 6.7 4.61 9.53 4.76 2.83.15 4.82.14 5.95-.02 3.13-.45 6.04-1.72 8.72-3.81 4.5-3.99 7.68-9.74 9.6-17.2 2.88 5.05 6.74 9.09 11.59 12.11 5.69 3.6 12.88 4.89 21.56 3.87 11.11-1.75 19.49-9.62 25.16-23.6 2.54-6.24 4.74-13.53 6.6-21.85.35 2.65.71 5.32 1.1 8.02a260.28 260.28 0 0 0 4.17 22.23c2.11 9.4 5.66 18.21 10.64 26.43a20.45 20.45 0 0 0 5.81 6.53c1.03.68 2.16 1.15 3.39 1.42 1.22.27 2.19.35 2.89.25 2-.29 3.15-1.66 3.46-4.13.23-1.47.34-2.83.32-4.1 0-.39.03-.75.09-1.09-.02-4.41-.35-8.8-.97-13.17-1.06-6.24-1.76-10.36-2.1-12.35-2.07-14.48-2.29-27.59-.66-39.35.83-6.13 2.18-11.16 4.05-15.09 1.86-3.93 4.25-6.11 7.17-6.52.86-.12 1.47.33 1.81 1.35.34 1.03.6 2.16.78 3.4.25 1.73.47 5.2.66 10.41.24 7.46.67 13.36 1.29 17.68 1.1 7.67 2.92 13.7 5.48 18.07 4.15 7.07 10.77 9.96 19.84 8.66 9.51-1.36 15.33-11.71 17.48-30.97 2.67 7.05 6.17 12.89 10.53 17.5 4.8 5.07 10.56 7.35 17.27 6.84 6.86-.98 12.07-7.57 15.62-19.76.76 17.7-.16 34.01-2.77 48.93-3.12 17.92-8.48 27.48-16.08 28.67l-3.04-.47c-2.31-.33-3.7-.46-4.19-.39-1.13.16-1.65.62-1.54 1.38.05.38.15.67.29.87 1.59 3.02 3.83 5.57 6.71 7.64 5.53 4.01 11.62 5.53 18.27 4.58 5.24-.75 9.84-3.31 13.79-7.68 4.05-4.82 7.04-10.35 8.96-16.58 1.92-6.23 3.32-12.46 4.19-18.71 1.29-9.89 1.71-21.77 1.27-35.66Z"
    />
  </svg>
);
