function Header() {
  return (
    <header>
      <nav>
        <img
          src="https://img.freepik.com/free-vector/white-frames-watercolour-texture_1048-11051.jpg?t=st=1730529563~exp=1730533163~hmac=77b48abd63cc25cf96edb78b52e2d042e8def44cded29419e8e580bc2ee068b5&w=740"
          width="40px"
        />
      </nav>
    </header>
  );
}

const heading = <h1> My reasons to learn react</h1>;

function List() {
  return (
    <>
      <ul>
        <li>To understand Working of React more deeply...</li>
        <li>To get fluent in implementing React...</li>
        <li>To build something valueable out of React...</li>
      </ul>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <small>cprt 2024, All rights Reserved</small>
    </footer>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
    <Header />
    {heading}
    <List />
    <Footer />
  </>
);
