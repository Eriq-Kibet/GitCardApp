import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";


function NavigationBar() {
  // function changeBackground(e) {
  //   e.target.style.background = 'red';
  // }
  return (
    <form>
      <div className="navigation">
        <button style={{ marginRight: "80px" }} >
          <FaHome style={{ color: "darkcyan", fontSize: "70px" }} />
        
        </button>

        <button>
          <FaInfo style={{ color: "darkcyan", fontSize: "70px"}} />
        </button>


        <button style={{ marginLeft: "80px" }}>
          <FaGithub style={{ color: "darkcyan", fontSize: "70px", }}
          />
        </button>
      </div>
    </form>
  )
}
export default NavigationBar;