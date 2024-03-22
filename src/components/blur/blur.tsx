const Blur = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(40px)",
      }}
    ></div>
  );
};

export default Blur;
