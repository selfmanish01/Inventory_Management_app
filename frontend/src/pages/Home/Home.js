import React from "react";
import {FaClipboardList} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/InventoryTracker_BgImage.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <FaClipboardList size={35} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>InventoryTracker- Stock Management Solution</h2>
          <p>
          iTrack Web App provide businesses with a secure and user-friendly platform for efficient stock control, enabling product management, and informed decision-making.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Try for Free</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="2" text="Brand Owners" />
            <NumberText num="10" text="Active Users" />
            <NumberText num="10+" text="Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img className="imga" src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
