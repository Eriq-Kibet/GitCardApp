import React from "react"

const Header = () => {

  const headerStyle = {
    padding: "1px 0",
    lineHeight: "1em",
   
  }
  const h1Style={
     fontSize: "4rem", 
     fontWeight: "600", 
      lineHeight: "1em",
      color: "#ececec",
      textAlign: "center" 
  }
  
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>
        Git Card App
        </h1>
    </header>
  )
}

export default Header