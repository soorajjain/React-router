import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <form>
        <Link to="/Home"> home </Link> <br/>
        <Link to="/Layout"> Layout </Link><br/>
        <Link to="/About"> About </Link><br/>
        <Link to="/Contact"> Contact </Link><br/>
      </form>
    </div>
  );
}

export default Home;
