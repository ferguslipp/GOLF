import React from "react";
import { TextField, Card, Button } from "@material-ui/core";

export default function Newsletter({ darkMode }) {
  // css objects
  const baseStyle = {
    color: "#FFF",
    // backgroundColor: "#333",
    marginTop: "10%",
    width: "80%",
    height: "80%",
    marginLeft: "10%",
    textAlign: "center",
    fontSize: "2em"
    // marginLeft: "15%",
    // width: "70%",
    // marginTop: "60px"
  };

  const pageStyle = darkMode ? { ...baseStyle } : { ...baseStyle };

  return (
    <div style={pageStyle}>
      <form noValidate autoComplete="off">
        Sign up for our newsletter to receive news and alerts regarding the air
        quality in Aberdeen
        <br />
        <br />
        <br />
        <div
          style={{
            backgroundColor: "#AAA",
            width: "80%",
            margin: "auto",
            borderRadius: "10px"
          }}
        >
          <TextField
            style={{ width: "80%" }}
            label="Email"
            type="email"
            autoCompleteF="current-email"
          />
          <Button>
          </Button>
        </div>
      </form>
    </div>
  );
}
