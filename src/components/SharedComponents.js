import React from "react";

export function Button({ label }) {
  return (
    <button style={styles.button}>
      {label}
    </button>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#61dafb",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};