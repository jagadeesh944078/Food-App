import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

/**
 * Header
 *  - Logo
 *  - nav-items
 * Body
 *   - search
 *   - res-container
 *      - res-body
 * Footer
 *  - copyrights
 *  - author
 */

const AppLayout = () => {
  return (
    <div id="root">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
