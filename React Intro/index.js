const page = (
  <div>
    <img
      src="https://img.freepik.com/free-vector/white-frames-watercolour-texture_1048-11051.jpg?t=st=1730529563~exp=1730533163~hmac=77b48abd63cc25cf96edb78b52e2d042e8def44cded29419e8e580bc2ee068b5&w=740"
      width="40px"
    />
    <h1>Welcome to React</h1>
  </div>
);

function TempName() {
  return <h1>I am in a Function</h1>;
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// root.render(page);
// root.render(<TempName />)

root.render(
  <>
    {page}
    <TempName />
  </>
);
