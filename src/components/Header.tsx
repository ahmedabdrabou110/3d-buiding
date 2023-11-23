const Header = () => {
  return (
    <header className="library-header">
      <h1>Colby Libraries</h1>
      <ul>
        <li>
          <a className="current-library" href="/">
            Miller
          </a>
        </li>
        <li>
          <a href="index2.html">Bixler</a>
        </li>
        <li>
          <a href="index3.html">Olin</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
