const Shimmer = () => {
  return (
    <div id="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div id="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
