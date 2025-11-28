import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>SA Military Youth Cadets</title>
        <meta property="og:title" content="SA Military Youth Cadets" />
        <link
          rel="canonical"
          href="https://www.sa-military-youth-cadets.org.za/"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-hero-section hero-section">
        <div className="home-hero-background hero-background">
          <img
            alt="Ghanaian cadet group practicing military drills in school setting."
            src="/facebook%20post%20%20(2)-2000w.png"
            className="home-hero-background-image hero-background-image"
          />
          <div className="home-hero-overlay hero-overlay"></div>
        </div>
        <div className="home-hero-container hero-container">
          <div className="hero-content home-hero-content">
            <div className="hero-badge">
              <span className="hero-badge-text">
                Building Tomorrow&apos;s Leaders Today
              </span>
            </div>
            <h1 className="home-hero-title hero-title">
              SA Milatry Youth Cadets
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              {' '}
              Empowering South African youth through honour, courage, and
              commitment. Join our community of 360+ cadets across 36 branches
              transforming lives through discipline, adventure, and service.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-values home-hero-values">
              <div className="hero-value-item home-hero-value-item1">
                <div className="hero-value-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
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
                <span className="hero-value-label">Honour</span>
              </div>
              <div className="hero-value-item">
                <div className="hero-value-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className="hero-value-label">Courage</span>
              </div>
              <div className="hero-value-item home-hero-value-item3">
                <div className="hero-value-icon">
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
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle r="6" cx="12" cy="8"></circle>
                    </g>
                  </svg>
                </div>
                <span className="hero-value-label">Commitment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section home-about-section">
        <div className="about-container">
          <div className="about-header">
            <h2 className="section-title">Our Journey of Impact</h2>
            <p className="section-subtitle">
              {' '}
              Transforming lives through purpose-driven youth development since
              our founding
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="about-timeline">
            <div className="about-timeline-item">
              <div className="about-timeline-marker"></div>
              <div className="about-timeline-content">
                <div className="about-timeline-icon">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                    </g>
                  </svg>
                </div>
                <div className="about-timeline-text">
                  <h3 className="about-timeline-title">Our Mission</h3>
                  <p className="about-timeline-description">
                    <span>
                      {' '}
                      SA Military Youth Cadets exists to design future ethical
                      leaders among the
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      youth of South Africa. We provide transformative
                      semi-military,
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      spiritual, and recreational activities that foster
                      personal
                    </span>
                    <br></br>
                    <span>
                      {' '}
                      growth, discipline, and community spirit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    SA Youth Cadets exists to design future ethical leaders
                    among the youth of South Africa. We provide transformative
                    semi-military, spiritual, and recreational activities that
                    foster personal growth, discipline, and community spirit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-marker"></div>
              <div className="about-timeline-content">
                <div className="about-timeline-icon">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <circle r="6" cx="12" cy="12"></circle>
                      <circle r="2" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <div className="about-timeline-text">
                  <h3 className="about-timeline-title">Age Groups We Serve</h3>
                  <p className="about-timeline-description">
                    {' '}
                    Our programs are tailored for children and young adults aged
                    six to twenty-three years, with a special focus on youth
                    from historically disadvantaged backgrounds in the Cape
                    Flats and beyond.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-marker"></div>
              <div className="about-timeline-content">
                <div className="about-timeline-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="about-timeline-text">
                  <h3 className="about-timeline-title">Our Reach</h3>
                  <p className="about-timeline-description">
                    {' '}
                    With 36 active branches across South Africa and over 360
                    dedicated cadets, we&apos;re building a network of empowered
                    young leaders who proudly represent our values in schools
                    and communities every day.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-marker"></div>
              <div className="about-timeline-content">
                <div className="about-timeline-icon">
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
                      <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle r="6" cx="12" cy="8"></circle>
                    </g>
                  </svg>
                </div>
                <div className="about-timeline-text">
                  <h3 className="about-timeline-title">
                    Founder&apos;s Vision
                  </h3>
                  <p className="about-timeline-description">
                    {' '}
                    Under the guidance of Dr. Capt. Rev. Randall Petersen, we
                    envision a united community grounded in honour, courage, and
                    commitment. Our goal is to bridge generational divides
                    through love and discipline, creating proud South African
                    citizens.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="programs" className="services-section">
        <div className="services-outer">
          <div className="services-header">
            <h2 className="section-title">Programs &amp; Initiatives</h2>
            <p className="section-subtitle">
              {' '}
              Adventure, learning, and service combined to shape character and
              build leadership
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="services-grid">
            <div className="services-card">
              <div className="services-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="services-card-content">
                <h3 className="services-card-title">TIBMIT Program</h3>
                <p className="services-card-description">
                  {' '}
                  Our flagship Transforming Intuitive Behavioural Management
                  Initiative Thinking Program develops essential life skills
                  through adventure challenges, critical thinking exercises, and
                  creative exploration.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="services-card-link">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="home-services-card-image1 services-card-image"></div>
            </div>
            <div className="services-card">
              <div className="services-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m8 3l4 8l5-5l5 15H2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="services-card-content">
                <h3 className="services-card-title">Hiking &amp; Retreats</h3>
                <p className="services-card-description">
                  {' '}
                  Connect youth with nature through guided hiking expeditions
                  and wilderness retreats that build resilience, teamwork, and
                  appreciation for South Africa&apos;s natural beauty.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="services-card-link">
                    <span>View Schedule</span>
                  </div>
                </a>
              </div>
              <div className="home-services-card-image2 services-card-image"></div>
            </div>
            <div className="services-card">
              <div className="services-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="services-card-content">
                <h3 className="services-card-title">Community Kitchens</h3>
                <p className="services-card-description">
                  {' '}
                  Fostering compassion and service through community soup
                  kitchen initiatives where cadets prepare and serve meals to
                  those in need, learning empathy and social responsibility.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="services-card-link">
                    <span>Get Involved</span>
                  </div>
                </a>
              </div>
              <div className="home-services-card-image3 services-card-image"></div>
            </div>
            <div className="services-card">
              <div className="services-card-icon">
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
                    <path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                    <circle
                      r=".5"
                      cx="13.5"
                      cy="6.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="17.5"
                      cy="10.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="6.5"
                      cy="12.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="8.5"
                      cy="7.5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
              </div>
              <div className="services-card-content">
                <h3 className="services-card-title">Arts Facilitation</h3>
                <p className="services-card-description">
                  {' '}
                  Encourage creativity and self-expression through guided arts
                  sessions including painting, music, drama, and cultural
                  performances that celebrate South African heritage.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="services-card-link">
                    <span>Explore Arts</span>
                  </div>
                </a>
              </div>
              <div className="home-services-card-image4 services-card-image"></div>
            </div>
            <div className="services-card">
              <div className="services-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              <div className="services-card-content">
                <h3 className="services-card-title">Leadership Training</h3>
                <p className="services-card-description">
                  {' '}
                  Structured programs focusing on mental, physical, spiritual,
                  and moral development through discipline, teamwork exercises,
                  and character-building activities.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="services-card-link">
                    <span>Join Training</span>
                  </div>
                </a>
              </div>
              <div className="home-services-card-image5 services-card-image"></div>
            </div>
            <div className="services-card">
              <div className="services-card-icon">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="services-card-content">
                <h3 className="services-card-title">Physical Activities</h3>
                <p className="services-card-description">
                  {' '}
                  Sports, drills, and physical fitness programs designed to
                  build strength, endurance, and healthy lifestyle habits while
                  fostering team spirit and discipline.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="services-card-link">
                    <span>See Activities</span>
                  </div>
                </a>
              </div>
              <div className="home-services-card-image6 services-card-image"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="branches" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">Find Your Local Branch</h2>
            <p className="section-subtitle">
              {' '}
              Connect with a branch near you and become part of our growing
              community
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="features-columns">
            <div className="features-column">
              <div className="features-card">
                <div className="features-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="features-card-title">Interactive Map</h3>
                <p className="features-card-description">
                  {' '}
                  Browse our interactive branch map to discover the 36 SA Youth
                  Cadets locations across South Africa. Zoom in to find branches
                  in your region, view meeting times, and get directions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="btn btn-primary">
                    <span>View Map</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="features-column">
              <div className="features-card">
                <div className="features-icon-wrapper">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle r="4" cx="9" cy="7"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="features-card-title">Branch Directory</h3>
                <p className="features-card-description">
                  {' '}
                  Search our comprehensive directory by location, district, or
                  branch name. Each listing includes contact information,
                  leadership details, cadet capacity, and program offerings.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="btn btn-primary">
                    <span>Browse Directory</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="features-column">
              <div className="features-card">
                <div className="features-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="features-card-title">Contact a Branch</h3>
                <p className="features-card-description">
                  {' '}
                  Reach out directly to branch coordinators for enrollment
                  information, visit schedules, and program details. Our local
                  leaders are ready to welcome new cadets and their families.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#">
                  <div className="btn btn-primary">
                    <span>Get in Touch</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stats-section">
        <div className="stats-outer">
          <div className="stats-content">
            <div className="stats-item">
              <div className="stats-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="stats-number">
                <span>36</span>
              </div>
              <div className="stats-label">
                <span>Active Branches</span>
              </div>
              <div className="stats-description">
                <span>Across South Africa</span>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-icon">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="stats-number">
                <span>360+</span>
              </div>
              <div className="stats-label">
                <span>Active Cadets</span>
              </div>
              <div className="stats-description">
                <span>Youth aged 6-23</span>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="stats-number">
                <span>150+</span>
              </div>
              <div className="stats-label">
                <span>Community Projects</span>
              </div>
              <div className="stats-description">
                <span>Annual initiatives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">Voices of Transformation</h2>
            <p className="section-subtitle">
              {' '}
              Hear from cadets, parents, and community members whose lives have
              been touched by our programs
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonials-card">
              <div className="testimonials-stars">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <blockquote className="testimonials-quote">
                <span>
                  {' '}
                  Joining SA Youth Cadets transformed my son&apos;s life. He
                  went from struggling with discipline to becoming a confident
                  young leader in our community. The values of honour and
                  commitment are now part of who he is.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </blockquote>
              <div className="testimonials-author">
                <div className="testimonials-author-info">
                  <div className="testimonials-author-name">
                    <span>Nomsa Khumalo</span>
                  </div>
                  <div className="testimonials-author-role">
                    <span>Parent, Cape Town Branch</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-card">
              <div className="testimonials-stars">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <blockquote className="testimonials-quote">
                <span>
                  {' '}
                  The TIBMIT program gave me skills I never knew I needed. I
                  learned critical thinking, teamwork, and how to face
                  challenges with courage. I&apos;m now pursuing leadership
                  roles in my school and community.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </blockquote>
              <div className="testimonials-author">
                <div className="testimonials-author-info">
                  <div className="testimonials-author-name">
                    <span>Thabo Mabaso</span>
                  </div>
                  <div className="testimonials-author-role">
                    <span>Cadet, 18 years old</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-card">
              <div className="testimonials-stars">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <blockquote className="testimonials-quote">
                <span>
                  {' '}
                  Partnering with SA Youth Cadets has enriched our community
                  immeasurably. The soup kitchen program shows these young
                  people the power of compassion. We see the impact every week.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </blockquote>
              <div className="testimonials-author">
                <div className="testimonials-author-info">
                  <div className="testimonials-author-name">
                    <span>Rev. Sarah Ntuli</span>
                  </div>
                  <div className="testimonials-author-role">
                    <span>Community Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cta" className="cta-section">
        <div className="cta-background">
          <video
            src="https://play.teleporthq.io/static/svg/videoposter.svg"
            className="cta-background-video"
          ></video>
          <div className="home-cta-overlay cta-overlay"></div>
        </div>
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="section-title">Shape the Future</h2>
            <p className="cta-subtitle">
              {' '}
              Join our mission to empower South Africa&apos;s youth. Whether
              you&apos;re a young person seeking purpose, a parent supporting
              growth, or a community member wanting to give back, there&apos;s a
              place for you.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="cta-actions">
              <a href="#">
                <div className="btn-xl btn btn-primary">
                  <span>Join as a Cadet</span>
                </div>
              </a>
              <a href="#">
                <div className="btn-xl btn-secondary btn">
                  <span>Volunteer with Us</span>
                </div>
              </a>
            </div>
            <div className="cta-additional-actions">
              <a href="#">
                <div className="btn-accent btn-lg btn">
                  <span>Make a Donation</span>
                </div>
              </a>
              <a href="#contact">
                <div className="btn-lg btn btn-outline">
                  <span>Contact Us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="contact-section">
        <div className="contact-outer">
          <div className="contact-card">
            <div className="contact-info-section">
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-subtitle">
                {' '}
                Ready to start your journey with SA Youth Cadets? Reach out to
                us today.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
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
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <div className="contact-detail-label">
                      <span>Email</span>
                    </div>
                    <a href="mailto:info@samilitaryyouthcadetts.org?subject=">
                      <div className="contact-detail-value">
                        <span>
                          {' '}
                          info@samilitaryyouthcadetts.org
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
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <div className="contact-detail-label">
                      <span>Website</span>
                    </div>
                    <a
                      href="https://samilitary-youthcadetts.org.za"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        className="contact-detail-value"
                      >
                        <span>
                          {' '}
                          samilitary-youthcadetts.org.za
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
              </div>
            </div>
            <div className="contact-events-section">
              <h3 className="contact-events-title">Upcoming Events</h3>
              <div className="contact-events-list">
                <div className="contact-event-item">
                  <div className="contact-event-icon">
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
                        <path d="M8 2v4m8-4v4"></path>
                        <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                        <path d="M3 10h18"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="contact-event-content">
                    <div className="contact-event-title">
                      <span>New Cadet Orientation</span>
                    </div>
                    <div className="contact-event-date">
                      <span>
                        {' '}
                        March 15, 2025 - All Branches
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="contact-event-description">
                      <span>
                        {' '}
                        Join us for an introduction to SA Youth Cadets programs
                        and values.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="contact-event-item">
                  <div className="contact-event-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m8 3l4 8l5-5l5 15H2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="contact-event-content">
                    <div className="contact-event-title">
                      <span>Table Mountain Hike</span>
                    </div>
                    <div className="contact-event-date">
                      <span>March 22, 2025 - Cape Town</span>
                    </div>
                    <div className="contact-event-description">
                      <span>
                        {' '}
                        Annual hiking expedition for cadets aged 12+.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="contact-event-item">
                  <div className="contact-event-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="contact-event-content">
                    <div className="contact-event-title">
                      <span>Community Kitchen Day</span>
                    </div>
                    <div className="contact-event-date">
                      <span>
                        {' '}
                        March 29, 2025 - Multiple Locations
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="contact-event-description">
                      <span>
                        {' '}
                        Monthly community service initiative serving meals to
                        those in need.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="btn btn-primary">
                  <span>View All Events</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="smooth-scroll-anchors">
(function(){
  const heroSection = document.querySelector(".hero-section")
  const aboutSection = document.querySelector(".about-section")
  const timelineItems = document.querySelectorAll(".about-timeline-item")

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  }

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
      }
    })
  }, observerOptions)

  timelineItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    fadeInObserver.observe(item)
  })

  const servicesCards = document.querySelectorAll(".services-card")
  servicesCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease"

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }, index * 80)
        }
      })
    }, observerOptions)

    cardObserver.observe(card)
  })

  const statsItems = document.querySelectorAll(".stats-item")
  statsItems.forEach((item, index) => {
    const numberElement = item.querySelector(".stats-number")
    const targetNumber = parseInt(numberElement.textContent.replace("+", ""))

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let currentNumber = 0
            const increment = targetNumber / 60
            const timer = setInterval(() => {
              currentNumber += increment
              if (currentNumber >= targetNumber) {
                numberElement.textContent = numberElement.textContent.includes(
                  "+"
                )
                  ? targetNumber + "+"
                  : targetNumber
                clearInterval(timer)
              } else {
                numberElement.textContent = Math.floor(currentNumber)
              }
            }, 25)
          }
        })
      },
      { threshold: 0.5 }
    )

    statsObserver.observe(item)
  })

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    timelineItems.forEach((item) => {
      item.style.opacity = "1"
      item.style.transform = "none"
      item.style.transition = "none"
    })

    servicesCards.forEach((card) => {
      card.style.opacity = "1"
      card.style.transform = "none"
      card.style.transition = "none"
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
