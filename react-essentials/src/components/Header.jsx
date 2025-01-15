import Image from "../assets/react-core-concepts.png";
function Header() {
  return (
    <header>
      <img src={Image} alt="style" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        gonna build!
      </p>
    </header>
  );
}

export default Header;
