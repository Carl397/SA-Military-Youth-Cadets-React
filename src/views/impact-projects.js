import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './impact-projects.css'

const ImpactProjects = (props) => {
  return (
    <div className="impact-projects-container1">
      <Helmet>
        <title>Impact-Projects - SA Military Youth Cadets</title>
        <meta
          property="og:title"
          content="Impact-Projects - SA Military Youth Cadets"
        />
        <link
          rel="canonical"
          href="https://www.sa-military-youth-cadets.org.za/impact-projects"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-impact">
        <video
          src="https://videos.pexels.com/video-files/6646705/6646705-hd_1920_1080_24fps.mp4"
          loop="true"
          muted="true"
          poster="https://images.pexels.com/videos/6646705/pictures/preview-0.jpg"
          autoPlay="true"
          playsInline="true"
          className="hero-impact-video"
        ></video>
        <div className="hero-impact-overlay"></div>
        <div className="hero-impact-content">
          <h1 className="hero-title">Creating Lasting Impact Through Action</h1>
          <p className="hero-subtitle">
            {' '}
            Transforming lives across the Cape Flats through community service,
            nature experiences, and youth empowerment programs
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="hero-impact-metrics">
            <div className="hero-impact-metric">
              <span className="hero-impact-metric-value">360+</span>
              <span className="hero-impact-metric-label">Active Cadets</span>
            </div>
            <div className="hero-impact-metric">
              <span className="hero-impact-metric-value">36</span>
              <span className="hero-impact-metric-label">Branches</span>
            </div>
            <div className="hero-impact-metric">
              <span className="hero-impact-metric-value">1000+</span>
              <span className="hero-impact-metric-label">Lives Touched</span>
            </div>
          </div>
          <div className="hero-impact-actions">
            <a href="#projects">
              <div className="btn-lg btn btn-primary">
                <span>Explore Projects</span>
              </div>
            </a>
            <a href="#volunteer">
              <div className="btn-lg btn btn-outline">
                <span>Get Involved</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="features-initiatives">
        <div className="features-initiatives-container">
          <h2 className="section-title">Our Key Initiatives</h2>
          <p className="section-subtitle">
            {' '}
            Community programs that nurture compassion, courage, and commitment
            in our youth
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="features-initiatives-grid">
            <div className="features-initiatives-card">
              <div className="features-initiatives-card-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
              <img
                alt="A volunteer in a t-shirt serving soup at a community event. Helping hand."
                src="https://images.pexels.com/photos/6646987/pexels-photo-6646987.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="features-initiatives-card-image"
              />
              <div className="features-initiatives-card-content">
                <h3 className="features-initiatives-card-title">
                  {' '}
                  Community Soup Kitchen
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="features-initiatives-card-description">
                  {' '}
                  Weekly meal services bringing warmth and nutrition to those in
                  need across the Cape Flats. Our cadets learn compassion
                  through direct service.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="features-initiatives-card-location">
                  {' '}
                  Cape Flats Community Centers
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#soup-kitchen">
                  <div className="btn-secondary btn">
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="features-initiatives-card">
              <div className="features-initiatives-card-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
              <img
                alt="A group of young adults hiking in the outdoors of Kon Tum, Vietnam under a clear blue sky."
                src="https://images.pexels.com/photos/34940369/pexels-photo-34940369.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="features-initiatives-card-image"
              />
              <div className="features-initiatives-card-content">
                <h3 className="features-initiatives-card-title">
                  {' '}
                  Nature Hikes &amp; Adventures
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="features-initiatives-card-description">
                  {' '}
                  Monthly hiking expeditions connecting youth with South
                  Africa&apos;s natural beauty while building physical
                  resilience and team spirit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="features-initiatives-card-location">
                  {' '}
                  Table Mountain, Cape Peninsula
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#hikes">
                  <div className="btn-secondary btn">
                    <span>Join a Hike</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="features-initiatives-card">
              <div className="features-initiatives-card-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </g>
                </svg>
              </div>
              <img
                alt="Couple enjoying a peaceful walk along a grassy cliff overlooking the ocean under a cloudy sky."
                src="https://images.pexels.com/photos/5712930/pexels-photo-5712930.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="features-initiatives-card-image"
              />
              <div className="features-initiatives-card-content">
                <h3 className="features-initiatives-card-title">
                  Spiritual Retreats
                </h3>
                <p className="features-initiatives-card-description">
                  {' '}
                  Quarterly retreats offering space for reflection, personal
                  growth, and spiritual development in peaceful natural
                  settings.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="features-initiatives-card-location">
                  {' '}
                  Western Cape Retreat Centers
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#retreats">
                  <div className="btn-secondary btn">
                    <span>View Schedule</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="features-initiatives-card">
              <div className="features-initiatives-card-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
              <img
                alt="Joyful young woman leaps over a log in a scenic mountainous forest setting, embodying outdoor adventure."
                src="https://images.pexels.com/photos/1816225/pexels-photo-1816225.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
                className="features-initiatives-card-image"
              />
              <div className="features-initiatives-card-content">
                <h3 className="features-initiatives-card-title">
                  Arts Facilitation
                </h3>
                <p className="features-initiatives-card-description">
                  {' '}
                  Creative workshops encouraging self-expression through visual
                  arts, music, and performance, unlocking hidden talents and
                  building confidence.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="features-initiatives-card-location">
                  {' '}
                  Community Arts Centers
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#arts">
                  <div className="btn-secondary btn">
                    <span>Explore Programs</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events-calendar">
        <div className="events-calendar-wrapper">
          <h2 className="section-title">Upcoming Projects &amp; Events</h2>
          <p className="section-subtitle">
            {' '}
            Join us in making a difference through hands-on community action and
            adventure
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="events-calendar-grid">
            <div className="events-calendar-item">
              <div className="events-calendar-item-date">
                <span className="events-calendar-item-day">15</span>
                <span className="events-calendar-item-month">Mar</span>
              </div>
              <div className="events-calendar-item-content">
                <h3 className="events-calendar-item-title">
                  Table Mountain Summit Hike
                </h3>
                <p className="events-calendar-item-description">
                  {' '}
                  Challenge yourself with a guided ascent to the iconic summit,
                  building strength and camaraderie.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="events-calendar-item-meta">
                  <span className="events-calendar-item-time">
                    06:00 AM - 2:00 PM
                  </span>
                  <span className="events-calendar-item-location">
                    {' '}
                    Table Mountain Trail
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <a href="#rsvp">
                  <div className="btn-accent btn-sm btn">
                    <span>RSVP Now</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="events-calendar-item">
              <div className="events-calendar-item-date">
                <span className="events-calendar-item-day">22</span>
                <span className="events-calendar-item-month">Mar</span>
              </div>
              <div className="events-calendar-item-content">
                <h3 className="events-calendar-item-title">
                  {' '}
                  Community Soup Kitchen Service
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="events-calendar-item-description">
                  {' '}
                  Prepare and serve warm meals to our community members in need
                  this Saturday morning.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="events-calendar-item-meta">
                  <span className="events-calendar-item-time">
                    08:00 AM - 12:00 PM
                  </span>
                  <span className="events-calendar-item-location">
                    {' '}
                    Mitchell&apos;s Plain Community Hall
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <a href="#rsvp">
                  <div className="btn-accent btn-sm btn">
                    <span>Volunteer</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="events-calendar-item">
              <div className="events-calendar-item-date">
                <span className="events-calendar-item-day">05</span>
                <span className="events-calendar-item-month">Apr</span>
              </div>
              <div className="events-calendar-item-content">
                <h3 className="events-calendar-item-title">
                  Youth Arts Workshop
                </h3>
                <p className="events-calendar-item-description">
                  {' '}
                  Creative expression through painting and mixed media, guided
                  by local artists.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="events-calendar-item-meta">
                  <span className="events-calendar-item-time">
                    10:00 AM - 3:00 PM
                  </span>
                  <span className="events-calendar-item-location">
                    {' '}
                    Khayelitsha Arts Centre
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <a href="#rsvp">
                  <div className="btn-accent btn-sm btn">
                    <span>Register</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="events-calendar-item">
              <div className="events-calendar-item-date">
                <span className="events-calendar-item-day">12</span>
                <span className="events-calendar-item-month">Apr</span>
              </div>
              <div className="events-calendar-item-content">
                <h3 className="events-calendar-item-title">
                  {' '}
                  Spiritual Leadership Retreat
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="events-calendar-item-description">
                  {' '}
                  Three-day intensive retreat focused on values, leadership, and
                  personal transformation.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="events-calendar-item-meta">
                  <span className="events-calendar-item-time">
                    {' '}
                    Fri 4:00 PM - Sun 3:00 PM
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="events-calendar-item-location">
                    {' '}
                    Hermanus Retreat Center
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <a href="#rsvp">
                  <div className="btn-accent btn-sm btn">
                    <span>Book Spot</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="events-calendar-item">
              <div className="events-calendar-item-date">
                <span className="events-calendar-item-day">26</span>
                <span className="events-calendar-item-month">Apr</span>
              </div>
              <div className="events-calendar-item-content">
                <h3 className="events-calendar-item-title">
                  {' '}
                  Coastal Clean-up &amp; Beach Hike
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="events-calendar-item-description">
                  {' '}
                  Environmental stewardship meets outdoor adventure along the
                  stunning Cape coastline.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="events-calendar-item-meta">
                  <span className="events-calendar-item-time">
                    09:00 AM - 1:00 PM
                  </span>
                  <span className="events-calendar-item-location">
                    Muizenberg Beach
                  </span>
                </div>
                <a href="#rsvp">
                  <div className="btn-accent btn-sm btn">
                    <span>Join Us</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="events-calendar-item">
              <div className="events-calendar-item-date">
                <span className="events-calendar-item-day">03</span>
                <span className="events-calendar-item-month">May</span>
              </div>
              <div className="events-calendar-item-content">
                <h3 className="events-calendar-item-title">
                  TIBMIT Adventure Challenge
                </h3>
                <p className="events-calendar-item-description">
                  {' '}
                  Team-based challenge combining physical obstacles with
                  problem-solving and leadership skills.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="events-calendar-item-meta">
                  <span className="events-calendar-item-time">
                    08:00 AM - 4:00 PM
                  </span>
                  <span className="events-calendar-item-location">
                    {' '}
                    Durbanville Training Grounds
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <a href="#rsvp">
                  <div className="btn-accent btn-sm btn">
                    <span>Sign Up</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-stories">
        <div className="blog-stories-wrapper">
          <h2 className="section-title">Impact Stories</h2>
          <p className="section-subtitle">
            {' '}
            Real transformations from cadets and communities across the Cape
            Flats
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="blog-stories-list">
            <article className="blog-stories-item">
              <div className="blog-stories-item-image">
                <img
                  alt="Positive African American young male in hat standing near white wall and looking at camera with toothy smile"
                  src="https://images.pexels.com/photos/3799772/pexels-photo-3799772.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="blog-stories-item-content">
                <span className="blog-stories-item-category">
                  TIBMIT Program
                </span>
                <h3 className="blog-stories-item-title">
                  {' '}
                  From Doubt to Determination: Thabo&apos;s Journey
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="blog-stories-item-excerpt">
                  {' '}
                  Thabo joined SA Youth Cadets at age 14, struggling with
                  confidence and direction. Through the TIBMIT program&apos;s
                  adventure challenges and mentorship, he discovered his
                  leadership potential. Now 17, Thabo mentors younger cadets and
                  has become a peer leader in his school, showing how structured
                  support and belief can transform a young person&apos;s
                  trajectory.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="blog-stories-item-meta">
                  <span className="blog-stories-item-date">2 months ago</span>
                  <span className="blog-stories-item-location">
                    Mitchell&apos;s Plain
                  </span>
                </div>
              </div>
            </article>
            <article className="blog-stories-item">
              <div className="blog-stories-item-image">
                <img
                  alt="Portrait of a cheerful young woman wearing a gold necklace and sweater indoors with a blurred background."
                  src="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="blog-stories-item-content">
                <span className="blog-stories-item-category">Arts Program</span>
                <h3 className="blog-stories-item-title">
                  {' '}
                  Discovering Voice Through Art: Ayanda&apos;s Story
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="blog-stories-item-excerpt">
                  {' '}
                  Ayanda was quiet and withdrawn when she first attended our
                  arts facilitation sessions. Through painting and creative
                  expression workshops, she found a powerful way to communicate
                  her experiences and emotions. Her artwork now hangs in
                  community centers, and she&apos;s inspiring other young women
                  to embrace their creativity. Art became her bridge to
                  confidence and community connection.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="blog-stories-item-meta">
                  <span className="blog-stories-item-date">3 weeks ago</span>
                  <span className="blog-stories-item-location">
                    Khayelitsha
                  </span>
                </div>
              </div>
            </article>
            <article className="blog-stories-item">
              <div className="blog-stories-item-image">
                <img
                  alt="Joyful group of young adults enjoying a sunset view in a mountainous landscape in Brazil."
                  src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="blog-stories-item-content">
                <span className="blog-stories-item-category">Nature Hikes</span>
                <h3 className="blog-stories-item-title">
                  {' '}
                  Reaching New Heights: The Power of Nature
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="blog-stories-item-excerpt">
                  {' '}
                  When 25 cadets from across Cape Flats branches summited
                  Lion&apos;s Head together last month, it was more than a hike.
                  It represented breaking barriers—many had never left their
                  neighborhoods, let alone climbed a mountain. The experience
                  fostered deep bonds between youth from different communities
                  and showed them the power of persistence. Nature became their
                  classroom for courage and teamwork.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="blog-stories-item-meta">
                  <span className="blog-stories-item-date">1 month ago</span>
                  <span className="blog-stories-item-location">
                    Lion&apos;s Head Trail
                  </span>
                </div>
              </div>
            </article>
            <article className="blog-stories-item">
              <div className="blog-stories-item-image">
                <img
                  alt="A person serves steaming hot soup from a pot into a bowl using a ladle outdoors."
                  src="https://images.pexels.com/photos/29321559/pexels-photo-29321559.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="blog-stories-item-content">
                <span className="blog-stories-item-category">Soup Kitchen</span>
                <h3 className="blog-stories-item-title">
                  {' '}
                  Serving with Purpose: Community Impact in Action
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="blog-stories-item-excerpt">
                  {' '}
                  Every Saturday, our cadets serve over 200 meals at the
                  community soup kitchen. But the impact goes beyond food.
                  Cadets learn empathy, responsibility, and the dignity of
                  service. Parents report their children showing more gratitude
                  at home. Recipients share how the warm welcome matters as much
                  as the meal. This program teaches that small acts of kindness
                  create ripples of change.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="blog-stories-item-meta">
                  <span className="blog-stories-item-date">1 week ago</span>
                  <span className="blog-stories-item-location">
                    {' '}
                    Cape Flats Community Hall
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="testimonials-showcase">
        <div className="testimonials-showcase-wrapper">
          <h2 className="section-title">Voices of Impact</h2>
          <p className="section-subtitle">
            {' '}
            Hear directly from cadets, families, and partners about the
            transformation they&apos;ve experienced
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="testimonials-showcase-grid">
            <div className="testimonials-showcase-card">
              <div className="testimonials-showcase-card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="testimonials-showcase-card-rating">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
              <p className="testimonials-showcase-card-text">
                {' '}
                SA Youth Cadets changed my life completely. I was heading down
                the wrong path, but the discipline, love, and guidance I
                received here showed me I could be so much more. Now I&apos;m a
                senior cadet helping others find their way.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-card-author">
                <img
                  alt="Positive African American young male in hat standing near white wall and looking at camera with toothy smile"
                  src="https://images.pexels.com/photos/3799772/pexels-photo-3799772.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="testimonials-showcase-card-author-info">
                  <span className="testimonials-showcase-card-author-name">
                    {' '}
                    Luthando M.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="testimonials-showcase-card-author-role">
                    {' '}
                    Senior Cadet, Age 19
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonials-showcase-card">
              <div className="testimonials-showcase-card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="testimonials-showcase-card-rating">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
              <p className="testimonials-showcase-card-text">
                {' '}
                As a parent, I&apos;ve watched my daughter transform from a shy
                girl into a confident young woman. The values of honour,
                courage, and commitment have become part of who she is. I&apos;m
                grateful for this program every single day.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-card-author">
                <img
                  alt="Joyful businesswoman with curly hair smiling at camera while using laptop indoors."
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="testimonials-showcase-card-author-info">
                  <span className="testimonials-showcase-card-author-name">
                    Nomsa P.
                  </span>
                  <span className="testimonials-showcase-card-author-role">
                    {' '}
                    Parent, Gugulethu
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonials-showcase-card">
              <div className="testimonials-showcase-card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="testimonials-showcase-card-rating">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
              <p className="testimonials-showcase-card-text">
                {' '}
                The hikes taught me that I&apos;m stronger than I thought. When
                we reached the summit together, I realized that with the right
                support and determination, nothing is impossible. This program
                showed me my potential.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-card-author">
                <img
                  alt="Cheerful schoolboy holding books and smiling in a classroom setting, ready for learning."
                  src="https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="testimonials-showcase-card-author-info">
                  <span className="testimonials-showcase-card-author-name">
                    Sipho K.
                  </span>
                  <span className="testimonials-showcase-card-author-role">
                    {' '}
                    Cadet, Age 15
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonials-showcase-card">
              <div className="testimonials-showcase-card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="testimonials-showcase-card-rating">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
              <p className="testimonials-showcase-card-text">
                {' '}
                Working with SA Youth Cadets has been incredibly rewarding. The
                organization&apos;s commitment to holistic youth development and
                community service aligns perfectly with our mission. Together,
                we&apos;re building a stronger Cape Flats.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-card-author">
                <img
                  alt="Positive young woman in uniform smiling while standing at counter desk in  cafe"
                  src="https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="testimonials-showcase-card-author-info">
                  <span className="testimonials-showcase-card-author-name">
                    {' '}
                    Dr. Sarah Chen
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="testimonials-showcase-card-author-role">
                    {' '}
                    Community Partner Director
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonials-showcase-card">
              <div className="testimonials-showcase-card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="testimonials-showcase-card-rating">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
              <p className="testimonials-showcase-card-text">
                {' '}
                I never knew art could help me express myself so clearly. The
                arts program gave me a voice when I didn&apos;t have words. Now
                I use creativity to inspire other young people facing challenges
                like I did.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-card-author">
                <img
                  alt="Portrait of a cheerful young woman wearing a gold necklace and sweater indoors with a blurred background."
                  src="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="testimonials-showcase-card-author-info">
                  <span className="testimonials-showcase-card-author-name">
                    {' '}
                    Thandiwe N.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="testimonials-showcase-card-author-role">
                    {' '}
                    Arts Program Graduate
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonials-showcase-card">
              <div className="testimonials-showcase-card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="testimonials-showcase-card-rating">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
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
              <p className="testimonials-showcase-card-text">
                {' '}
                The spiritual retreats provided a safe space for deep reflection
                and growth. I learned to understand my values and how to live
                them daily. This program doesn&apos;t just teach discipline, it
                nurtures the whole person.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="testimonials-showcase-card-author">
                <img
                  alt="Smiling young man holding a book and wearing a backpack against a blue background."
                  src="https://images.pexels.com/photos/6238089/pexels-photo-6238089.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
                <div className="testimonials-showcase-card-author-info">
                  <span className="testimonials-showcase-card-author-name">
                    {' '}
                    Michael V.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="testimonials-showcase-card-author-role">
                    {' '}
                    Senior Cadet, Age 21
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
        </div>
      </section>
      <section className="impact---projects-stats-impact">
        <div className="stats-impact-container">
          <h2 className="section-title">Impact by the Numbers</h2>
          <p className="section-subtitle">
            {' '}
            Measurable transformation across the Cape Flats community
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="impact---projects-stats-impact-grid">
            <div className="stats-impact-item">
              <div className="stats-impact-item-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
              <span className="stats-impact-item-value">360+</span>
              <span className="stats-impact-item-label">
                Active Cadets Served
              </span>
            </div>
            <div className="stats-impact-item">
              <div className="stats-impact-item-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
              <span className="stats-impact-item-value">10,400+</span>
              <span className="stats-impact-item-label">
                Meals Served Annually
              </span>
            </div>
            <div className="stats-impact-item">
              <div className="stats-impact-item-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
              <span className="stats-impact-item-value">48</span>
              <span className="stats-impact-item-label">
                Hikes Conducted Yearly
              </span>
            </div>
            <div className="stats-impact-item">
              <div className="stats-impact-item-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </g>
                </svg>
              </div>
              <span className="stats-impact-item-value">36</span>
              <span className="stats-impact-item-label">
                Branches Across Cape Flats
              </span>
            </div>
            <div className="stats-impact-item">
              <div className="stats-impact-item-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
              <span className="stats-impact-item-value">12</span>
              <span className="stats-impact-item-label">
                Spiritual Retreats Held
              </span>
            </div>
            <div className="stats-impact-item">
              <div className="stats-impact-item-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
              <span className="stats-impact-item-value">24</span>
              <span className="stats-impact-item-label">
                Arts Workshops Annually
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="volunteer" className="cta-volunteer">
        <div className="cta-volunteer-wrapper">
          <div className="cta-volunteer-featured">
            <div className="cta-volunteer-featured-content">
              <h2 className="section-title">Be Part of the Transformation</h2>
              <p className="section-content">
                {' '}
                Your time, skills, and support can create lasting change in the
                lives of young people across the Cape Flats. Join us in building
                a generation of ethical leaders through action and compassion.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cta-volunteer-featured-actions">
                <a href="mailto:info@samilitaryyouthcadetts.org?subject=Volunteer%20Inquiry?subject=">
                  <div className="btn-xl btn btn-primary">
                    <span>
                      {' '}
                      Volunteer Today
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="https://samilitary-youthcadetts.org.za">
                  <div className="btn-xl btn-secondary btn">
                    <span>
                      {' '}
                      Learn More
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
            <div className="cta-volunteer-featured-image">
              <img
                alt="A group of young adults hiking in the outdoors of Kon Tum, Vietnam under a clear blue sky."
                src="https://images.pexels.com/photos/34940369/pexels-photo-34940369.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
          </div>
          <div className="cta-volunteer-options">
            <div className="cta-volunteer-option">
              <div className="cta-volunteer-option-icon">
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
              <h3 className="cta-volunteer-option-title">
                Volunteer Your Time
              </h3>
              <p className="cta-volunteer-option-description">
                {' '}
                Join us at soup kitchens, hikes, or workshops and make a direct
                impact.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="mailto:info@samilitaryyouthcadetts.org?subject=Volunteer%20Opportunities?subject=">
                <div className="btn-accent btn">
                  <span>
                    {' '}
                    Sign Up
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
            <div className="cta-volunteer-option">
              <div className="cta-volunteer-option-icon">
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
              <h3 className="cta-volunteer-option-title">
                Support Through Donation
              </h3>
              <p className="cta-volunteer-option-description">
                {' '}
                Financial contributions help us expand programs and reach more
                youth.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="mailto:info@samilitaryyouthcadetts.org?subject=Donation%20Inquiry?subject=">
                <div className="btn-accent btn">
                  <span>
                    {' '}
                    Donate
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
            <div className="cta-volunteer-option">
              <div className="cta-volunteer-option-icon">
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
              <h3 className="cta-volunteer-option-title">Join a Project</h3>
              <p className="cta-volunteer-option-description">
                {' '}
                Participate in upcoming hikes, retreats, or community service
                days.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="#projects">
                <div className="btn-accent btn">
                  <span>View Projects</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="process-planning">
        <div className="process-planning-wrapper">
          <h2 className="section-title">How We Create Impact</h2>
          <p className="section-subtitle">
            {' '}
            Our systematic approach to planning and executing community projects
            with partner support
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="process-planning-steps">
            <div className="process-planning-step">
              <div className="process-planning-step-number">
                <span>01</span>
              </div>
              <div className="process-planning-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
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
              <h3 className="process-planning-step-title">
                Community Needs Assessment
              </h3>
              <p className="process-planning-step-description">
                {' '}
                We identify gaps and opportunities through direct engagement
                with youth, families, and local leaders across the Cape Flats.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="process-planning-step-connector">
              <svg
                width="48"
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
            </div>
            <div className="process-planning-step">
              <div className="process-planning-step-number">
                <span>02</span>
              </div>
              <div className="process-planning-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
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
              <h3 className="process-planning-step-title">
                Strategic Program Design
              </h3>
              <p className="process-planning-step-description">
                {' '}
                Our team designs tailored initiatives aligned with our TIBMIT
                philosophy, integrating adventure, service, and skill-building.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="process-planning-step-connector">
              <svg
                width="48"
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
            </div>
            <div className="process-planning-step">
              <div className="process-planning-step-number">
                <span>03</span>
              </div>
              <div className="process-planning-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
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
              <h3 className="process-planning-step-title">
                Partner Collaboration
              </h3>
              <p className="process-planning-step-description">
                {' '}
                We connect with community organizations, schools, and sponsors
                to pool resources and maximize reach and effectiveness.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="process-planning-step-connector">
              <svg
                width="48"
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
            </div>
            <div className="process-planning-step">
              <div className="process-planning-step-number">
                <span>04</span>
              </div>
              <div className="process-planning-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="process-planning-step-title">
                Implementation &amp; Impact
              </h3>
              <p className="process-planning-step-description">
                {' '}
                Projects launch with cadet participation, mentor support, and
                continuous evaluation to ensure meaningful, lasting
                transformation.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="process-planning-partners">
            <h3 className="process-planning-partners-title">
              {' '}
              Supported By Trusted Partners
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
            <div className="process-planning-partners-list">
              <div className="process-planning-partner">
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
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </g>
                </svg>
                <span>Cape Flats Community Centers</span>
              </div>
              <div className="process-planning-partner">
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
                <span>Local Church Networks</span>
              </div>
              <div className="process-planning-partner">
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
                <span>Youth Development Organizations</span>
              </div>
              <div className="process-planning-partner">
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
                    <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle r="6" cx="12" cy="8"></circle>
                  </g>
                </svg>
                <span>Corporate Social Responsibility Programs</span>
              </div>
              <div className="process-planning-partner">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
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
                <span>Nature Conservation Trusts</span>
              </div>
              <div className="process-planning-partner">
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
                <span>Arts &amp; Culture Foundations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="impact-projects-container2">
        <div className="impact-projects-container3">
          <Script
            html={`<script defer data-name="impact-projects-animations">
(function(){
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const elementsToAnimate = document.querySelectorAll(
    ".features-initiatives-card, .events-calendar-item, .blog-stories-item, .testimonials-showcase-card, .stats-impact-item, .cta-volunteer-option, .process-planning-step"
  )

  elementsToAnimate.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = \`opacity 0.5s ease \${
      index * 0.1
    }s, transform 0.5s ease \${index * 0.1}s\`
    animateOnScroll.observe(el)
  })

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const valueElement = entry.target.querySelector(
          ".stats-impact-item-value"
        )
        const finalValue = valueElement.textContent
        const numericValue = parseInt(finalValue.replace(/\D/g, ""))
        const hasPlus = finalValue.includes("+")
        let currentValue = 0
        const increment = Math.ceil(numericValue / 50)
        const duration = 1500
        const stepTime = duration / (numericValue / increment)

        const counter = setInterval(() => {
          currentValue += increment
          if (currentValue >= numericValue) {
            valueElement.textContent = finalValue
            clearInterval(counter)
          } else {
            valueElement.textContent =
              currentValue.toLocaleString() + (hasPlus ? "+" : "")
          }
        }, stepTime)

        statsObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".stats-impact-item").forEach((item) => {
    statsObserver.observe(item)
  })

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elementsToAnimate.forEach((el) => {
      el.style.opacity = "1"
      el.style.transform = "none"
      el.style.transition = "none"
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

export default ImpactProjects
