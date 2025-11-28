import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './get-involved.css'

const GetInvolved = (props) => {
  return (
    <div className="get-involved-container1">
      <Helmet>
        <title>Get-Involved - SA Military Youth Cadets</title>
        <meta
          property="og:title"
          content="Get-Involved - SA Military Youth Cadets"
        />
        <link
          rel="canonical"
          href="https://www.sa-military-youth-cadets.org.za/get-involved"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="get-involved-hero-section">
        <div className="hero-video-wrapper">
          <video
            src="https://videos.pexels.com/video-files/8034220/8034220-hd_1920_1080_30fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="hero-background-video"
          ></video>
          <div className="get-involved-hero-overlay"></div>
        </div>
        <div className="get-involved-hero-content">
          <div className="hero-text-container">
            <h1 className="get-involved-hero-title hero-title">
              Shape the Future with SA Youth Cadets
            </h1>
            <p className="get-involved-hero-subtitle hero-subtitle">
              {' '}
              Join us as a volunteer, partner, or cadet. Together, we build
              leaders of tomorrow through courage, commitment, and community.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-cta-grid">
              <div className="hero-cta-card">
                <div className="hero-cta-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
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
                <h3 className="hero-cta-title">Volunteer</h3>
                <p className="hero-cta-text">
                  {' '}
                  Make a difference in young lives by sharing your time and
                  skills
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#volunteer-forms">
                  <div className="btn btn-outline">
                    <span>Apply Now</span>
                  </div>
                </a>
              </div>
              <div className="hero-cta-card">
                <div className="hero-cta-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m11 17l2 2a1 1 0 1 0 3-3"></path>
                      <path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                      <path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="hero-cta-title">Partner</h3>
                <p className="hero-cta-text">
                  {' '}
                  Collaborate with us to empower youth across Cape Flats
                  communities
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#partnership-models">
                  <div className="btn btn-outline">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
              <div className="hero-cta-card">
                <div className="hero-cta-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="hero-cta-title">Enroll Youth</h3>
                <p className="hero-cta-text">
                  {' '}
                  Join 360+ cadets aged 6-23 in leadership and personal growth
                  programs
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#youth-enrollment">
                  <div className="btn btn-primary">
                    <span>Enroll Today</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="eligibility-section">
        <div className="eligibility-wrapper">
          <div className="eligibility-header">
            <h2 className="section-title">Who Can Join</h2>
            <p className="section-subtitle">
              {' '}
              Clear pathways for volunteers, partners, and youth cadets to
              become part of our transformative community
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="eligibility-grid">
            <div className="eligibility-card">
              <div className="eligibility-icon">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
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
              <h3 className="eligibility-card-title">Youth Cadets</h3>
              <div className="eligibility-detail">
                <span className="eligibility-label">Age Range:</span>
                <span className="eligibility-value">6-23 years</span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Background:</span>
                <span className="eligibility-value">
                  {' '}
                  Priority to historically disadvantaged communities
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Requirements:</span>
                <span className="eligibility-value">
                  {' '}
                  Parental consent (under 18), willingness to learn
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="eligibility-card">
              <div className="eligibility-icon">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
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
              <h3 className="eligibility-card-title">Volunteers</h3>
              <div className="eligibility-detail">
                <span className="eligibility-label">Age Range:</span>
                <span className="eligibility-value">18+ years</span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Background:</span>
                <span className="eligibility-value">
                  All backgrounds welcome
                </span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Requirements:</span>
                <span className="eligibility-value">
                  {' '}
                  Police clearance, passion for youth development
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="eligibility-card">
              <div className="eligibility-icon">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="eligibility-card-title">Corporate Partners</h3>
              <div className="eligibility-detail">
                <span className="eligibility-label">Partner Types:</span>
                <span className="eligibility-value">
                  {' '}
                  Corporates, NGOs, educational institutions
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Engagement:</span>
                <span className="eligibility-value">
                  {' '}
                  Sponsorship, CSI programs, project collaboration
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Requirements:</span>
                <span className="eligibility-value">
                  {' '}
                  Shared values, community commitment
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="eligibility-card">
              <div className="eligibility-icon">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
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
              <h3 className="eligibility-card-title">Mentor Volunteers</h3>
              <div className="eligibility-detail">
                <span className="eligibility-label">Age Range:</span>
                <span className="eligibility-value">21+ years</span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Background:</span>
                <span className="eligibility-value">
                  {' '}
                  Leadership or coaching experience preferred
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Requirements:</span>
                <span className="eligibility-value">
                  {' '}
                  Police clearance, training completion, references
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="eligibility-card">
              <div className="eligibility-icon">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
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
              <h3 className="eligibility-card-title">Program Partners</h3>
              <div className="eligibility-detail">
                <span className="eligibility-label">Partner Types:</span>
                <span className="eligibility-value">
                  {' '}
                  Community groups, faith organizations, schools
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Engagement:</span>
                <span className="eligibility-value">
                  {' '}
                  Joint programs, resource sharing, events
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Requirements:</span>
                <span className="eligibility-value">
                  {' '}
                  Aligned mission, active community presence
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="eligibility-card">
              <div className="eligibility-icon">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
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
              <h3 className="eligibility-card-title">
                Special Skills Volunteers
              </h3>
              <div className="eligibility-detail">
                <span className="eligibility-label">Age Range:</span>
                <span className="eligibility-value">18+ years</span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Background:</span>
                <span className="eligibility-value">
                  {' '}
                  Arts, sports, tech, counseling professionals
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="eligibility-detail">
                <span className="eligibility-label">Requirements:</span>
                <span className="eligibility-value">
                  {' '}
                  Relevant qualification or experience, availability
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
      </section>
      <section id="volunteer-forms" className="forms-section">
        <div className="forms-container">
          <div className="forms-header">
            <h2 className="section-title">Application Forms</h2>
            <p className="section-subtitle">
              {' '}
              Download or complete your application online. All forms are secure
              and will be reviewed within 5 business days.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="forms-list">
            <div className="form-item">
              <div className="form-item-content">
                <div className="form-item-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="form-item-details">
                  <h3 className="form-item-title">
                    Youth Cadet Enrollment Form
                  </h3>
                  <p className="form-item-description">
                    {' '}
                    For youth aged 6-23 years. Parental or guardian consent
                    required for applicants under 18. Complete medical history
                    section and attach proof of residence.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <ul className="form-item-requirements">
                    <li>
                      <span>Birth certificate or ID copy</span>
                    </li>
                    <li>
                      <span>Proof of residence</span>
                    </li>
                    <li>
                      <span>Parent/guardian ID (under 18)</span>
                    </li>
                    <li>
                      <span>Medical history form</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-item-actions">
                <button className="btn btn-primary">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
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
                  <span>Apply Online</span>
                </button>
                <button className="btn btn-outline">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10l5 5l5-5"></path>
                    </g>
                  </svg>
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
            <div className="form-item">
              <div className="form-item-content">
                <div className="form-item-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
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
                <div className="form-item-details">
                  <h3 className="form-item-title">
                    Volunteer Application Form
                  </h3>
                  <p className="form-item-description">
                    {' '}
                    For individuals 18+ years interested in supporting SA Youth
                    Cadets. Police clearance and two references required.
                    Training provided for successful applicants.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <ul className="form-item-requirements">
                    <li>
                      <span>Police clearance certificate</span>
                    </li>
                    <li>
                      <span>Two professional references</span>
                    </li>
                    <li>
                      <span>ID document copy</span>
                    </li>
                    <li>
                      <span>CV or resume</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-item-actions">
                <button className="btn btn-primary">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
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
                  <span>Apply Online</span>
                </button>
                <button className="btn btn-outline">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10l5 5l5-5"></path>
                    </g>
                  </svg>
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
            <div className="form-item">
              <div className="form-item-content">
                <div className="form-item-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m11 17l2 2a1 1 0 1 0 3-3"></path>
                      <path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                      <path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path>
                    </g>
                  </svg>
                </div>
                <div className="form-item-details">
                  <h3 className="form-item-title">Partnership Enquiry Form</h3>
                  <p className="form-item-description">
                    {' '}
                    For organizations seeking collaboration opportunities.
                    Include company profile and partnership objectives. Our team
                    will schedule a consultation meeting.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <ul className="form-item-requirements">
                    <li>
                      <span>Company registration documents</span>
                    </li>
                    <li>
                      <span>Partnership proposal (optional)</span>
                    </li>
                    <li>
                      <span>Contact person details</span>
                    </li>
                    <li>
                      <span>CSI or community objectives</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-item-actions">
                <button className="btn btn-primary">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
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
                  <span>Submit Enquiry</span>
                </button>
                <button className="btn btn-outline">
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10l5 5l5-5"></path>
                    </g>
                  </svg>
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="process-wrapper">
          <div className="process-header">
            <h2 className="section-title">Application Process</h2>
            <p className="section-subtitle">
              {' '}
              Step-by-step guidance through enrollment, volunteer onboarding,
              and partnership establishment
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="process-accordion">
            <details className="process-accordion-item">
              <summary className="process-accordion-summary">
                <div className="process-accordion-header">
                  <span className="process-number">01</span>
                  <h3 className="process-title">
                    Youth Cadet Enrollment Process
                  </h3>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="process-chevron"
                >
                  <rect
                    x="3"
                    y="3"
                    rx="2"
                    fill="none"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                </svg>
              </summary>
              <div className="process-accordion-content">
                <div className="process-timeline">
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">Submit Application</h4>
                      <p className="process-step-description">
                        {' '}
                        Complete the enrollment form online or download and
                        submit physically at any of our 36 branches. Ensure all
                        required documents are attached.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Day 1</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">Application Review</h4>
                      <p className="process-step-description">
                        {' '}
                        Our team reviews your application and verifies all
                        submitted documents. We may contact you for additional
                        information if needed.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Days 2-5</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">Parent Interview</h4>
                      <p className="process-step-description">
                        {' '}
                        For applicants under 18, we schedule a meeting with
                        parents or guardians to discuss program expectations,
                        commitment, and answer questions.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 2</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">
                        Welcome Orientation
                      </h4>
                      <p className="process-step-description">
                        {' '}
                        Attend a mandatory orientation session introducing
                        TIBMIT program, core values (Honour, Courage,
                        Commitment), and meet fellow cadets and leaders.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 3</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">Begin Training</h4>
                      <p className="process-step-description">
                        {' '}
                        Start your journey with semi-military drills, spiritual
                        development, recreational activities, and community
                        service projects at your assigned branch.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 4+</span>
                    </div>
                  </div>
                </div>
              </div>
            </details>
            <details className="process-accordion-item">
              <summary className="process-accordion-summary">
                <div className="process-accordion-header">
                  <span className="process-number">02</span>
                  <h3 className="process-title">
                    Volunteer Onboarding Process
                  </h3>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="process-chevron"
                >
                  <rect
                    x="3"
                    y="3"
                    rx="2"
                    fill="none"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                </svg>
              </summary>
              <div className="process-accordion-content">
                <div className="process-timeline">
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">
                        Application Submission
                      </h4>
                      <p className="process-step-description">
                        {' '}
                        Submit your volunteer application with CV, references,
                        and police clearance. Specify your area of interest:
                        mentoring, admin, events, or specialized skills.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Day 1</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">
                        Background Verification
                      </h4>
                      <p className="process-step-description">
                        {' '}
                        We conduct thorough background checks and verify
                        references. This process ensures the safety and
                        wellbeing of all our cadets.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Days 2-10</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">
                        Interview &amp; Assessment
                      </h4>
                      <p className="process-step-description">
                        {' '}
                        Meet with our volunteer coordinator to discuss your
                        skills, motivations, and availability. We&apos;ll match
                        you with roles that align with your strengths.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 2-3</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">Mandatory Training</h4>
                      <p className="process-step-description">
                        {' '}
                        Complete our volunteer training program covering child
                        protection, organizational values, role-specific skills,
                        and safety protocols.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 4</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">Start Volunteering</h4>
                      <p className="process-step-description">
                        {' '}
                        Begin your volunteer role with ongoing support from our
                        team. You&apos;ll receive regular feedback and
                        opportunities for additional training and development.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 5+</span>
                    </div>
                  </div>
                </div>
              </div>
            </details>
            <details className="process-accordion-item">
              <summary className="process-accordion-summary">
                <div className="process-accordion-header">
                  <span className="process-number">03</span>
                  <h3 className="process-title">
                    Partnership Establishment Process
                  </h3>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="process-chevron"
                >
                  <rect
                    x="3"
                    y="3"
                    rx="2"
                    fill="none"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                </svg>
              </summary>
              <div className="process-accordion-content">
                <div className="process-timeline">
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">Initial Enquiry</h4>
                      <p className="process-step-description">
                        {' '}
                        Submit partnership enquiry form outlining your
                        organization&apos;s objectives, resources, and desired
                        collaboration model. Include company profile if
                        available.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Day 1</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">
                        Consultation Meeting
                      </h4>
                      <p className="process-step-description">
                        {' '}
                        Meet with Dr. Capt. Rev. Randall Petersen and our
                        partnership team to discuss alignment of values, mutual
                        goals, and explore collaboration opportunities.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 1-2</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">
                        Proposal Development
                      </h4>
                      <p className="process-step-description">
                        {' '}
                        Collaborative creation of a partnership proposal
                        detailing objectives, responsibilities, resources,
                        timelines, and expected outcomes for both parties.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 3-4</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">Agreement Signing</h4>
                      <p className="process-step-description">
                        {' '}
                        Formalize the partnership through a memorandum of
                        understanding or agreement. Legal review available for
                        both parties to ensure clarity and commitment.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 5-6</span>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-marker"></div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">Program Launch</h4>
                      <p className="process-step-description">
                        {' '}
                        Begin partnership activities with joint planning
                        meetings, regular progress reviews, and impact
                        assessments. Celebrate launch with community event.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <span className="process-step-time">Week 7+</span>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="roles-section">
        <div className="roles-container">
          <div className="roles-header">
            <h2 className="section-title">Volunteer Roles</h2>
            <p className="section-subtitle">
              {' '}
              Discover meaningful ways to contribute your time, skills, and
              passion to empowering Cape Flats youth
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="roles-grid">
            <div className="role-card">
              <div className="role-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              <h3 className="role-title">Youth Mentor</h3>
              <p className="role-description">
                {' '}
                Guide cadets through personal challenges, academic support, and
                life skills development. Build lasting relationships that
                transform lives.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="role-commitment">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>4-6 hours weekly</span>
              </div>
              <div className="role-impact">
                <span className="role-impact-label">Impact:</span>
                <p className="role-impact-text">
                  {' '}
                  Our mentors have helped 85% of cadets improve academic
                  performance and develop stronger self-confidence.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="role-card">
              <div className="role-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              <h3 className="role-title">Program Facilitator</h3>
              <p className="role-description">
                {' '}
                Lead TIBMIT activities, adventure challenges, and creative
                workshops. Help youth discover their leadership potential
                through experiential learning.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="role-commitment">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>6-8 hours weekly</span>
              </div>
              <div className="role-impact">
                <span className="role-impact-label">Impact:</span>
                <p className="role-impact-text">
                  {' '}
                  Program facilitators deliver activities reaching 360+ cadets
                  annually, building essential life skills and confidence.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="role-card">
              <div className="role-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="8" y="2" rx="1" ry="1" width="8" height="4"></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  </g>
                </svg>
              </div>
              <h3 className="role-title">Administrative Support</h3>
              <p className="role-description">
                {' '}
                Assist with registration, record-keeping, communications, and
                event coordination. Your organizational skills keep our programs
                running smoothly.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="role-commitment">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>3-5 hours weekly</span>
              </div>
              <div className="role-impact">
                <span className="role-impact-label">Impact:</span>
                <p className="role-impact-text">
                  {' '}
                  Administrative volunteers help us efficiently serve 36
                  branches and maintain accurate records for all participants.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="role-card">
              <div className="role-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              <h3 className="role-title">Arts &amp; Creativity Coach</h3>
              <p className="role-description">
                {' '}
                Share your artistic talents through facilitation sessions. Teach
                music, visual arts, drama, or creative writing to inspire
                self-expression.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="role-commitment">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>2-4 hours weekly</span>
              </div>
              <div className="role-impact">
                <span className="role-impact-label">Impact:</span>
                <p className="role-impact-text">
                  {' '}
                  Arts coaches help cadets discover hidden talents, building
                  self-esteem and providing creative outlets for emotional
                  expression.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="role-card">
              <div className="role-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
              <h3 className="role-title">Community Outreach</h3>
              <p className="role-description">
                {' '}
                Support soup kitchen initiatives, organize community events, and
                coordinate service projects that connect cadets with their
                communities.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="role-commitment">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>4-6 hours monthly</span>
              </div>
              <div className="role-impact">
                <span className="role-impact-label">Impact:</span>
                <p className="role-impact-text">
                  {' '}
                  Outreach volunteers facilitate projects that have served over
                  2,000 community members and taught cadets compassion through
                  action.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="role-card">
              <div className="role-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </svg>
              </div>
              <h3 className="role-title">Adventure &amp; Hiking Leader</h3>
              <p className="role-description">
                {' '}
                Lead hiking trips, outdoor retreats, and adventure activities
                that connect youth with nature while building resilience and
                teamwork.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="role-commitment">
                <svg
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>1-2 weekends monthly</span>
              </div>
              <div className="role-impact">
                <span className="role-impact-label">Impact:</span>
                <p className="role-impact-text">
                  {' '}
                  Adventure leaders create memorable experiences that push
                  boundaries, develop courage, and foster deep bonds among
                  cadets.
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
      </section>
      <section id="partnership-models" className="partnership-section">
        <div className="partnership-wrapper">
          <div className="partnership-header">
            <h2 className="section-title">Partnership Opportunities</h2>
            <p className="section-subtitle">
              {' '}
              Collaborate with SA Youth Cadets to create lasting impact across
              Cape Flats communities
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="partnership-grid">
            <div className="partnership-card">
              <div className="partnership-badge">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="partnership-card-title">Corporate Sponsorship</h3>
              <p className="partnership-card-description">
                {' '}
                Align your brand with youth development and community
                transformation. Support program costs, equipment, uniforms, or
                branch infrastructure.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="partnership-benefits">
                <h4 className="partnership-benefits-title">
                  Partner Benefits:
                </h4>
                <ul className="partnership-benefits-list">
                  <li>
                    <span>Brand visibility across 36 branches</span>
                  </li>
                  <li>
                    <span>Annual impact reports and success stories</span>
                  </li>
                  <li>
                    <span>Employee volunteer engagement opportunities</span>
                  </li>
                  <li>
                    <span>Tax-deductible contributions</span>
                  </li>
                </ul>
              </div>
              <div className="partnership-outcome">
                <span className="partnership-outcome-label">
                  Expected Outcome:
                </span>
                <p className="partnership-outcome-text">
                  {' '}
                  Sustained program delivery reaching 360+ cadets annually with
                  measurable community impact.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="partnership-card">
              <div className="partnership-badge">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
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
              <h3 className="partnership-card-title">
                Skills Development Partnership
              </h3>
              <p className="partnership-card-description">
                {' '}
                Share your organization&apos;s expertise through workshops,
                training programs, or specialist coaching in technology,
                business, or vocational skills.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="partnership-benefits">
                <h4 className="partnership-benefits-title">
                  Partner Benefits:
                </h4>
                <ul className="partnership-benefits-list">
                  <li>
                    <span>Pipeline for future talent recruitment</span>
                  </li>
                  <li>
                    <span>Meaningful CSI program alignment</span>
                  </li>
                  <li>
                    <span>Direct engagement with youth communities</span>
                  </li>
                  <li>
                    <span>
                      Showcase your organization&apos;s values in action
                    </span>
                  </li>
                </ul>
              </div>
              <div className="partnership-outcome">
                <span className="partnership-outcome-label">
                  Expected Outcome:
                </span>
                <p className="partnership-outcome-text">
                  {' '}
                  Enhanced cadet employability and life skills, creating
                  pathways to economic opportunity.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="partnership-card">
              <div className="partnership-badge">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
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
              <h3 className="partnership-card-title">
                Community Project Collaboration
              </h3>
              <p className="partnership-card-description">
                {' '}
                Co-create and co-deliver community initiatives such as soup
                kitchens, clean-up campaigns, or educational outreach programs.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="partnership-benefits">
                <h4 className="partnership-benefits-title">
                  Partner Benefits:
                </h4>
                <ul className="partnership-benefits-list">
                  <li>
                    <span>Joint branding and publicity</span>
                  </li>
                  <li>
                    <span>Shared resources and networks</span>
                  </li>
                  <li>
                    <span>Amplified community impact</span>
                  </li>
                  <li>
                    <span>Partnership recognition events</span>
                  </li>
                </ul>
              </div>
              <div className="partnership-outcome">
                <span className="partnership-outcome-label">
                  Expected Outcome:
                </span>
                <p className="partnership-outcome-text">
                  {' '}
                  Multiplied community reach and deeper engagement with Cape
                  Flats neighborhoods.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="partnership-card">
              <div className="partnership-badge">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
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
              <h3 className="partnership-card-title">
                Event &amp; Retreat Sponsorship
              </h3>
              <p className="partnership-card-description">
                {' '}
                Fund or co-host special events including hiking trips,
                leadership camps, graduation ceremonies, and youth conferences.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="partnership-benefits">
                <h4 className="partnership-benefits-title">
                  Partner Benefits:
                </h4>
                <ul className="partnership-benefits-list">
                  <li>
                    <span>High-visibility event branding</span>
                  </li>
                  <li>
                    <span>Speaking or presentation opportunities</span>
                  </li>
                  <li>
                    <span>Media coverage and social media reach</span>
                  </li>
                  <li>
                    <span>Direct cadet and family engagement</span>
                  </li>
                </ul>
              </div>
              <div className="partnership-outcome">
                <span className="partnership-outcome-label">
                  Expected Outcome:
                </span>
                <p className="partnership-outcome-text">
                  {' '}
                  Memorable experiences that inspire transformation and
                  strengthen organizational relationships.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="partnership-card">
              <div className="partnership-badge">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                  </g>
                </svg>
              </div>
              <h3 className="partnership-card-title">
                {' '}
                Educational Institution Partnership
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h3>
              <p className="partnership-card-description">
                {' '}
                Schools and universities can integrate SA Youth Cadets programs,
                offer facilities, or create academic credit pathways for cadets.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="partnership-benefits">
                <h4 className="partnership-benefits-title">
                  Partner Benefits:
                </h4>
                <ul className="partnership-benefits-list">
                  <li>
                    <span>Enhanced student development programs</span>
                  </li>
                  <li>
                    <span>Improved student discipline and leadership</span>
                  </li>
                  <li>
                    <span>Access to structured youth programming</span>
                  </li>
                  <li>
                    <span>Community service opportunities for students</span>
                  </li>
                </ul>
              </div>
              <div className="partnership-outcome">
                <span className="partnership-outcome-label">
                  Expected Outcome:
                </span>
                <p className="partnership-outcome-text">
                  {' '}
                  Holistic student development with improved academic
                  performance and social behavior.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="partnership-card">
              <div className="partnership-badge">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m11 17l2 2a1 1 0 1 0 3-3"></path>
                    <path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                    <path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path>
                  </g>
                </svg>
              </div>
              <h3 className="partnership-card-title">
                Faith &amp; Community Group Alliance
              </h3>
              <p className="partnership-card-description">
                {' '}
                Faith-based organizations and community groups can host
                branches, share facilities, or integrate spiritual development
                programs.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="partnership-benefits">
                <h4 className="partnership-benefits-title">
                  Partner Benefits:
                </h4>
                <ul className="partnership-benefits-list">
                  <li>
                    <span>Extended youth ministry reach</span>
                  </li>
                  <li>
                    <span>Shared values and mission alignment</span>
                  </li>
                  <li>
                    <span>Facility utilization optimization</span>
                  </li>
                  <li>
                    <span>Intergenerational community building</span>
                  </li>
                </ul>
              </div>
              <div className="partnership-outcome">
                <span className="partnership-outcome-label">
                  Expected Outcome:
                </span>
                <p className="partnership-outcome-text">
                  {' '}
                  Spiritual and moral development of youth grounded in shared
                  values and community connection.
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
      </section>
      <section className="events-section">
        <div className="events-wrapper">
          <div className="events-header">
            <h2 className="section-title">Upcoming Recruitment Events</h2>
            <p className="section-subtitle">
              {' '}
              Join us at open days, info sessions, and recruitment events to
              learn more and meet our team
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-image">
                <img
                  alt="A large group of uniformed individuals standing in formation outdoors, illustrating discipline and unity."
                  src="https://images.pexels.com/photos/20289754/pexels-photo-20289754.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="event-badge">Open Day</span>
              </div>
              <div className="event-content">
                <div className="event-date">
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>Saturday, March 15, 2025</span>
                </div>
                <h3 className="event-title">Cape Flats Regional Open Day</h3>
                <p className="event-description">
                  {' '}
                  Visit all 36 branches across Cape Flats. Meet cadets, observe
                  training sessions, and speak with our leaders about enrollment
                  opportunities.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-details">
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                    <span>All 36 branches</span>
                  </div>
                </div>
                <button className="btn btn-primary">RSVP Now</button>
              </div>
            </div>
            <div className="event-card">
              <div className="event-image">
                <img
                  alt="A volunteer helps an elderly man in a wheelchair outside, showing community support and care."
                  src="https://images.pexels.com/photos/6646986/pexels-photo-6646986.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="event-badge">Info Session</span>
              </div>
              <div className="event-content">
                <div className="event-date">
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>Thursday, March 20, 2025</span>
                </div>
                <h3 className="event-title">Volunteer Information Evening</h3>
                <p className="event-description">
                  {' '}
                  Learn about volunteer opportunities, training requirements,
                  and the impact you can make. Q&amp;A session with current
                  volunteers.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-details">
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                    <span>Online via Zoom</span>
                  </div>
                </div>
                <button className="btn btn-primary">Register Here</button>
              </div>
            </div>
            <div className="event-card">
              <div className="event-image">
                <img
                  alt="Young Indian NCC cadets in uniform stand at attention during an outdoor parade ceremony."
                  src="https://images.pexels.com/photos/899438/pexels-photo-899438.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="event-badge">Recruitment</span>
              </div>
              <div className="event-content">
                <div className="event-date">
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>Saturday, April 5, 2025</span>
                </div>
                <h3 className="event-title">Youth Cadet Recruitment Drive</h3>
                <p className="event-description">
                  {' '}
                  Youth aged 6-23 welcome to attend with parents/guardians.
                  Demonstrations, meet current cadets, and submit enrollment
                  applications on-site.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-details">
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                    <span>Headquarters, Mitchell&apos;s Plain</span>
                  </div>
                </div>
                <button className="btn btn-primary">RSVP for Family</button>
              </div>
            </div>
            <div className="event-card">
              <div className="event-image">
                <img
                  alt="A group of children volunteering to clean a beach with a 'Save the Earth' sign."
                  src="https://images.pexels.com/photos/9037596/pexels-photo-9037596.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="event-badge">Workshop</span>
              </div>
              <div className="event-content">
                <div className="event-date">
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>Wednesday, April 10, 2025</span>
                </div>
                <h3 className="event-title">
                  Partnership Consultation Workshop
                </h3>
                <p className="event-description">
                  {' '}
                  For organizations interested in partnering with SA Youth
                  Cadets. Explore collaboration models, CSI alignment, and
                  impact opportunities.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-details">
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>2:00 PM - 4:30 PM</span>
                  </div>
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                    <span>Conference Centre, Cape Town</span>
                  </div>
                </div>
                <button className="btn btn-primary">Book Consultation</button>
              </div>
            </div>
            <div className="event-card">
              <div className="event-image">
                <img
                  alt="Ghanaian cadet group practicing military drills in school setting."
                  src="https://images.pexels.com/photos/30575010/pexels-photo-30575010.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="event-badge">Training</span>
              </div>
              <div className="event-content">
                <div className="event-date">
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>Saturday, April 19, 2025</span>
                </div>
                <h3 className="event-title">New Volunteer Training Session</h3>
                <p className="event-description">
                  {' '}
                  Mandatory training for all accepted volunteers. Covers child
                  protection, TIBMIT program, safety protocols, and
                  role-specific skills.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-details">
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                    <span>Training Centre, Athlone</span>
                  </div>
                </div>
                <button className="btn btn-primary">Confirm Attendance</button>
              </div>
            </div>
            <div className="event-card">
              <div className="event-image">
                <img
                  alt="A military officer engages with youth cadets in uniform at an outdoor event."
                  src="https://images.pexels.com/photos/8310452/pexels-photo-8310452.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <span className="event-badge">Info Session</span>
              </div>
              <div className="event-content">
                <div className="event-date">
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
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>Tuesday, April 29, 2025</span>
                </div>
                <h3 className="event-title">
                  Parent &amp; Guardian Info Night
                </h3>
                <p className="event-description">
                  {' '}
                  For parents considering enrollment for their children. Learn
                  about program structure, safety measures, benefits, and hear
                  from current cadet families.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="event-details">
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>6:30 PM - 8:30 PM</span>
                  </div>
                  <div className="event-detail-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
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
                    <span>Community Hall, Hanover Park</span>
                  </div>
                </div>
                <button className="btn btn-primary">Reserve Seats</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="youth-enrollment" className="get-involved-contact-section">
        <div className="contact-wrapper">
          <div className="get-involved-contact-card">
            <div className="contact-content-grid">
              <div className="contact-info">
                <h2 className="section-title">Ready to Get Started?</h2>
                <p className="contact-intro">
                  {' '}
                  Whether you&apos;re a prospective cadet, volunteer, or
                  partner, we&apos;re here to answer your questions and guide
                  you through the next steps.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-method-icon">
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
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <div className="contact-method-details">
                      <span className="contact-method-label">Email</span>
                      <a href="mailto:info@samilitaryyouthcadetts.org?subject=">
                        <div className="contact-method-value">
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
                  <div className="contact-method">
                    <div className="contact-method-icon">
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
                    <div className="contact-method-details">
                      <span className="contact-method-label">Office Hours</span>
                      <span className="contact-method-value">
                        {' '}
                        Monday - Friday: 9 AM - 5 PM
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-method-icon">
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
                    <div className="contact-method-details">
                      <span className="contact-method-label">
                        Branch Locator
                      </span>
                      <a href="https://samilitary-youthcadetts.org.za">
                        <div className="contact-method-value">
                          <span>
                            {' '}
                            Find your nearest branch
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
                <div className="contact-stats">
                  <div className="contact-stat">
                    <span className="contact-stat-number">36</span>
                    <span className="contact-stat-label">Active Branches</span>
                  </div>
                  <div className="contact-stat">
                    <span className="contact-stat-number">360+</span>
                    <span className="contact-stat-label">Current Cadets</span>
                  </div>
                  <div className="contact-stat">
                    <span className="contact-stat-number">6-23</span>
                    <span className="contact-stat-label">Age Range</span>
                  </div>
                </div>
              </div>
              <div className="contact-action">
                <div className="contact-action-content">
                  <h3 className="contact-action-title">
                    Submit Your Application
                  </h3>
                  <p className="contact-action-text">
                    {' '}
                    Choose your pathway and take the first step toward joining
                    the SA Youth Cadets family. We review all applications
                    within 5 business days.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="contact-action-buttons">
                    <button className="btn-lg btn btn-primary">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Enroll as Cadet</span>
                    </button>
                    <button className="btn-lg btn-secondary btn">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
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
                      <span>Volunteer Application</span>
                    </button>
                    <button className="btn-accent btn-lg btn">
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
                          <path d="m11 17l2 2a1 1 0 1 0 3-3"></path>
                          <path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                          <path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path>
                        </g>
                      </svg>
                      <span>Partnership Enquiry</span>
                    </button>
                  </div>
                  <div className="contact-action-footer">
                    <p className="contact-action-note">
                      {' '}
                      Questions? Email us directly or visit our website for
                      comprehensive program information and branch locations.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <a href="https://samilitary-youthcadetts.org.za">
                      <div className="contact-website-link">
                        <span>
                          {' '}
                          Visit samilitary-youthcadetts.org.za
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <svg
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M7 17L17 7M7 7h10v10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="get-involved-container2">
        <div className="get-involved-container3">
          <Script
            html={`<style>
details[open] .process-chevron {
  transform: rotate(180deg);
}
a.contact-method-value:hover {
  color: var(--color-primary);
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="get-involved-container4">
        <div className="get-involved-container5">
          <Script
            html={`<script defer data-name="process-accordion-animation">
(function(){
  const processAccordionItems = document.querySelectorAll(
    ".process-accordion-item"
  )

  processAccordionItems.forEach((item) => {
    const summary = item.querySelector(".process-accordion-summary")

    summary.addEventListener("click", () => {
      processAccordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.hasAttribute("open")) {
          otherItem.removeAttribute("open")
        }
      })
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default GetInvolved
