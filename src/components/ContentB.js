import React from "react";
import { Button } from "./SharedComponents";

export function ContentB() {
  return (
    <div style={styles.container}>
      <h2>Content B</h2>
      <p>This is the second content section.</p>
      <Button label="Click Me B" />
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#fff3cd",
    margin: "10px",
  },
};