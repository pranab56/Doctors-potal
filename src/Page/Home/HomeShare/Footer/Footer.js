import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-neutral text-neutral-content mt-20" >
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Emergency Checkup</a>
        <a class="link link-hover">Monthly Checkup</a>
        <a class="link link-hover">Weekly Checkup</a>
        <a class="link link-hover">Deep Checkup</a>
      </div>
      <div>
        <span class="footer-title">ORAL HEALTH</span>
        <a class="link link-hover">Fluoride Treatment</a>
        <a class="link link-hover">Cavity Filling</a>
        <a class="link link-hover">Teath Whitening</a>
      </div>
      <div>
        <span class="footer-title">OUR ADDRESS</span>
        <a class="link link-hover">Bera,pabna</a>
      </div>
    </footer>
  );
};

export default Footer;
