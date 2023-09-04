function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}> {name} </h1>
      <h6 style={{ marginTop: "0px" }}> {content} </h6>
      <p style={{ marginTop: "40px", color: "red" }}>
        <i>{price}</i> TL
      </p>
    </div>
  );
}

export default MenuItem;