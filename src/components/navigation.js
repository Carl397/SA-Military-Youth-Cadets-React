import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav id="navigation" className="navigation">
        <div className="navigation-container">
          <a href="#">
            <div
              aria-label="SA Youth Cadets Homepage"
              className="navigation-logo"
            >
              <img
                alt="SA Youth Cadets Logo"
                src="/untitled%20design%20(7)-200h.png"
                className="navigation-logo-img"
              />
              <span className="navigation-brand">SA Military Youth Cadets</span>
            </div>
          </a>
          <div className="navigation-links">
            <a href="#">
              <div className="navigation-link">
                <span>About Us</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-link">
                <span>Programs &amp; Activities</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-link">
                <span>Get Involved</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-link">
                <span>Impact &amp; Projects</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-link">
                <span>Branches &amp; Contact</span>
              </div>
            </a>
          </div>
          <button
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-thq-navigation-toggle-icon-elm"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div id="navMobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <a href="#">
              <div
                aria-label="SA Youth Cadets Homepage"
                className="navigation-mobile-logo"
              >
                <img
                  alt="SA Youth Cadets Logo"
                  src="https://images.pexels.com/photos/13729586/pexels-photo-13729586.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  className="navigation-mobile-logo-img"
                />
                <span className="navigation-mobile-brand">SA Youth Cadets</span>
              </div>
            </a>
            <button
              id="navMobileClose"
              aria-label="Close navigation menu"
              className="navigation-mobile-close"
            >
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                className="navigation-thq-navigation-mobile-close-icon-elm"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-links">
            <a href="#">
              <div className="navigation-mobile-link">
                <span>About Us</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-mobile-link">
                <span>Programs &amp; Activities</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-mobile-link">
                <span>Get Involved</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-mobile-link">
                <span>Impact &amp; Projects</span>
              </div>
            </a>
            <a href="#">
              <div className="navigation-mobile-link">
                <span>Branches &amp; Contact</span>
              </div>
            </a>
          </div>
          <div className="navigation-mobile-footer">
            <p className="navigation-mobile-motto">
              Honour • Courage • Commitment
            </p>
          </div>
        </div>
      </nav>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes slideIn {to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-mobile-menu">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navMobileOverlay = document.getElementById("navMobileOverlay")
  const navMobileClose = document.getElementById("navMobileClose")
  const navMobileLinks = document.querySelectorAll(".navigation-mobile-link")

  function openMobileMenu() {
    navMobileOverlay.style.display = "flex"
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeMobileMenu() {
    navMobileOverlay.style.display = "none"
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMobileMenu)
  navMobileClose.addEventListener("click", closeMobileMenu)

  navMobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  navMobileOverlay.addEventListener("click", (e) => {
    if (e.target === navMobileOverlay) {
      closeMobileMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
