import React from "react";

function App() {
  var d = new Date();
  var year = d.getFullYear();

  return (
    <div>
      <div>
        <header className="header">
          <h1>Keeper </h1>
        </header>
      </div>
      <div className="note">
        <h1 className="noteh1"> This is a Note title </h1>
        <p className="notep"> This is content of the note </p>
      </div>
      <footer className="footer">
        <p>Copyright &copy; {year}</p>
      </footer>
    </div>
  );
}

export default App;
