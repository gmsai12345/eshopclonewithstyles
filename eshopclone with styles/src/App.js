import React from "react";
//import Button from "react-bootstrap/Button";
//import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ImageScroller from "react-image-scroller";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import "./App.css";
import logo1 from "./logo1.png";
export default function Navbar1() {
  return (
    <div>
      <div className="bar1">
        <img
          src="https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png"
          alt=""
          className="logo"
        />

        <img alt="" className="logo2" src={logo1} />
        <select id="cars" className="cars">
          <option value="volvo">All</option>
          <option value="saab">Alexa skills</option>
          <option value="fiat">Amazon devices</option>
          <option value="audi">Amazon fashion</option>
          <option value="fiat">Amazon devices</option>
          <option value="fiat">Amazon fresh</option>
          <option value="fiat">Amazon Pharmacy</option>
          <option value="fiat">Appliances</option>
          <option value="fiat">Apps and games</option>
          <option value="fiat">Baby</option>
          <option value="fiat">Beauty</option>
        </select>
      </div>
    </div>
  );
}
