function FullScreenIcon({isFullScreen}: {isFullScreen: boolean}) {
  if (isFullScreen) {
    return (
      <svg
        width="35"
        height="35"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.15862 12.0895L9.11035 12.0895M9.11035 12.0895L9.11035 19.0412M9.11035 12.0895L1 20.1998M19.04 9.11035L12.0883 9.11035M12.0883 9.11035V2.15862M12.0883 9.11035L20.1986 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.247 1H20.1987M20.1987 1V7.95173M20.1987 1L12.0884 9.11035M7.95173 20.2H1M1 20.2V13.2483M1 20.2L9.11035 12.0896"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FullScreenIcon;