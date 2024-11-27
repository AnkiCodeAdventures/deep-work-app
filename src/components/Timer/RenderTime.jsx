function RenderTime({ hours, minutes, seconds, milliseconds }) {
  return (
    <div style={{ display: "flex" }}>
      <div>{hours}</div>
      <div>{minutes}</div>
      <div>{seconds}</div>
      <div>{milliseconds}</div>
    </div>
  );
}

export default RenderTime;
