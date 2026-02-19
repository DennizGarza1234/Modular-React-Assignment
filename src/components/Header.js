import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1>React Modularity Assignment</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
};

export default Header;