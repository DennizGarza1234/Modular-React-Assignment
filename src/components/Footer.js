import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 React Modularity Project</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f4f4f4",
    padding: "15px",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default Footer;