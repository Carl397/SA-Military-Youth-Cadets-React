import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-wrapper">
        <div className="footer-diagonal-accent"></div>
        <div className="footer-container">
          <div className="footer-social-hero">
            <div className="footer-thq-footer-brand-section-elm footer-brand-section">
              <div className="footer-logo-shield">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h2 className="section-title footer-brand-title">
                SA Military Youth Cadets
              </h2>
              <p className="footer-brand-tagline section-content">
                {' '}
                Designing Future Ethical Leaders
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="footer-thq-footer-social-primary-elm footer-social-primary">
              <h3 className="footer-social-heading">Join Our Community</h3>
              <p className="section-content footer-social-description">
                {' '}
                Follow our journey as we empower over 360 cadets across 36
                branches in South Africa
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-social-grid">
                <a href="https://facebook.com">
                  <div
                    aria-label="Follow us on Facebook"
                    className="footer-social-link"
                  >
                    <div className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="footer-social-label">Facebook</span>
                  </div>
                </a>
                <a href="https://instagram.com">
                  <div
                    aria-label="Follow us on Instagram"
                    className="footer-social-link"
                  >
                    <div className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-social-label">Instagram</span>
                  </div>
                </a>
                <a href="https://twitter.com">
                  <div
                    aria-label="Follow us on Twitter"
                    className="footer-social-link"
                  >
                    <div className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="footer-social-label">Twitter</span>
                  </div>
                </a>
                <a href="https://youtube.com">
                  <div
                    aria-label="Subscribe on YouTube"
                    className="footer-social-link"
                  >
                    <div className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                          <path d="m10 15l5-3l-5-3z"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-social-label">YouTube</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-content-grid">
            <div className="footer-nav-column">
              <h3 className="footer-column-title">Explore</h3>
              <nav className="footer-nav-list">
                <a href="/">
                  <div className="footer-nav-link">
                    <span>Homepage</span>
                  </div>
                </a>
                <a href="/about-us">
                  <div className="footer-nav-link">
                    <span>About Us</span>
                  </div>
                </a>
                <a href="/programs-activities">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      Programs &amp; Activities
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/get-involved">
                  <div className="footer-nav-link">
                    <span>Get Involved</span>
                  </div>
                </a>
                <a href="/impact-projects">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      Impact &amp; Projects
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/branches-contact">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      Branches &amp; Contact
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-nav-column">
              <h3 className="footer-column-title">Our Programs</h3>
              <nav className="footer-nav-list">
                <a href="/programs-activities#tibmit">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      TIBMIT Program
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/programs-activities#adventure">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      Adventure Challenges
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/programs-activities#hiking">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      Hiking &amp; Retreats
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/programs-activities#community">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      Soup Kitchen Initiative
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/programs-activities#arts">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      Arts Facilitation
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/programs-activities#leadership">
                  <div className="footer-nav-link">
                    <span>
                      {' '}
                      Leadership Development
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-nav-column">
              <h3 className="footer-column-title">Our Values</h3>
              <div className="footer-values-list">
                <div className="footer-value-item">
                  <div className="footer-value-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="footer-value-text">Honour</span>
                </div>
                <div className="footer-value-item">
                  <div className="footer-value-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="footer-value-text">Courage</span>
                </div>
                <div className="footer-value-item">
                  <div className="footer-value-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="footer-value-text">Commitment</span>
                </div>
              </div>
              <div className="footer-stats">
                <div className="footer-stat-item">
                  <span className="footer-stat-number">360+</span>
                  <span className="footer-stat-label">Active Cadets</span>
                </div>
                <div className="footer-stat-item">
                  <span className="footer-stat-number">36</span>
                  <span className="footer-stat-label">Branches</span>
                </div>
              </div>
            </div>
            <div className="footer-nav-column">
              <h3 className="footer-column-title">Contact Us</h3>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                        <circle r="3" cx="10" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <span className="footer-contact-text">
                    Cape Flats, South Africa
                  </span>
                </div>
              </div>
              <a
                href="https://samilitary-youthcadetts.org.za"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  rel="noopener"
                  target="_blank"
                  className="footer-cta btn btn-primary"
                >
                  <span>
                    {' '}
                    Visit Our Website
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                {' '}
                © 2025 SA Youth Cadets. All rights reserved.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-legal-links">
                <a href="/privacy-policy">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="/terms-conditions">
                  <div className="footer-legal-link">
                    <span>
                      {' '}
                      Terms &amp; Conditions
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/accessibility">
                  <div className="footer-legal-link">
                    <span>Accessibility</span>
                  </div>
                </a>
              </div>
            </div>
            <p className="footer-mission">
              {' '}
              Founded by Dr. Capt. Rev. Randall Petersen, we unite parents and
              youth in building a proud South African community through love,
              discipline, and leadership.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
        </div>
        <button aria-label="Back to top" className="footer-back-to-top">
          <svg
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="m5 12l7-7l7 7m-7 7V5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-social-link, .footer-nav-link, .footer-back-to-top, .footer-social-icon, .footer-legal-link::after, .footer-nav-link::before {
  transition: none;
}
.footer-social-link:hover, .footer-back-to-top:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-interactions">
(function(){
  const backToTopBtn = document.querySelector(".footer-back-to-top")

  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible")
    } else {
      backToTopBtn.classList.remove("visible")
    }
  }

  window.addEventListener("scroll", toggleBackToTop)

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  toggleBackToTop()
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
