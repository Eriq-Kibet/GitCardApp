import React from "react"

const Header = () => {

  const headerStyle = {
    padding: "1px 0",
    lineHeight: "1em",
   
  }
  
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "4rem", fontWeight: "600", 
      lineHeight: "1em", color: "#ececec",textAlign: "center" }}>
        Git Card App
        </h1>
    </header>
  )
}

export default Header