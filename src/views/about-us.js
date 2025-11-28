import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container1">
      <Helmet>
        <title>About-Us - SA Military Youth Cadets</title>
        <meta
          property="og:title"
          content="About-Us - SA Military Youth Cadets"
        />
        <link
          rel="canonical"
          href="https://www.sa-military-youth-cadets.org.za/about-us"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-mission">
        <video
          src="https://videos.pexels.com/video-files/17654759/17654759-hd_1920_1080_30fps.mp4"
          loop="true"
          muted="true"
          poster="https://images.pexels.com/videos/17654759/pictures/preview-0.jpeg"
          autoPlay="true"
          playsInline="true"
          className="hero-mission-video"
        ></video>
        <div className="hero-mission-overlay"></div>
        <div className="hero-mission-content">
          <h1 className="hero-title hero-mission-title">
            {' '}
            Shaping Tomorrow&apos;s Leaders Today
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <p className="hero-mission-subtitle hero-subtitle">
            {' '}
            Empowering South African youth through Honour, Courage, and
            Commitment
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="hero-mission-values">
            <div className="hero-mission-value">
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
              <span>Honour</span>
            </div>
            <div className="hero-mission-value">
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
              <span>Courage</span>
            </div>
            <div className="hero-mission-value">
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
              <span>Commitment</span>
            </div>
          </div>
          <button className="btn-lg hero-mission-cta btn btn-primary">
            {' '}
            Discover Our Mission
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </button>
        </div>
      </section>
      <section className="features-values">
        <div className="features-values-container">
          <h2 className="features-values-title section-title">
            Our Guiding Principles
          </h2>
          <p className="section-subtitle features-values-subtitle">
            {' '}
            The foundation of everything we do at SA Youth Cadets
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="features-values-grid">
            <div className="features-values-card">
              <div className="features-values-icon">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="6" cx="12" cy="12"></circle>
                    <circle r="2" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="features-values-card-title">Our Mission</h3>
              <p className="features-values-card-text">
                {' '}
                To sculpt the leaders of tomorrow by blending adventure with
                camaraderie in a supportive environment. We empower young South
                Africans from historically disadvantaged backgrounds to develop
                mental, physical, spiritual, and moral strength through
                transformative semi-military, spiritual, and recreational
                activities.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="features-values-card">
              <div className="features-values-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="features-values-card-title">Our Vision</h3>
              <p className="features-values-card-text">
                {' '}
                A united community on the Cape Flats where young leaders embrace
                our core values and proudly represent SA Youth Cadets in schools
                and communities. We envision a new generation of proud South
                African citizens who bridge generational divides and inspire
                positive change through love and discipline.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="features-values-card-honour features-values-card">
              <div className="features-values-icon">
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
              <h3 className="features-values-card-title">Honour</h3>
              <p className="features-values-card-text">
                {' '}
                We uphold integrity, respect, and ethical conduct in all our
                actions. Honour means treating others with dignity, being
                truthful, and taking responsibility for our choices. Our cadets
                learn to act with moral courage and represent their families and
                communities with pride.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="features-values-card-list">
                <span>Integrity in action</span>
                <span>Respect for all</span>
                <span>Ethical leadership</span>
              </div>
            </div>
            <div className="features-values-card-courage features-values-card">
              <div className="features-values-icon">
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
              <h3 className="features-values-card-title">Courage</h3>
              <p className="features-values-card-text">
                {' '}
                We foster bravery to face challenges, overcome obstacles, and
                step outside comfort zones. Courage is about standing up for
                what is right, trying new things, and persevering through
                adversity. Our programs build confidence and resilience in every
                cadet.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="features-values-card-list">
                <span>Face fears boldly</span>
                <span>Stand for justice</span>
                <span>Embrace challenges</span>
              </div>
            </div>
            <div className="features-values-card-commitment features-values-card">
              <div className="features-values-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
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
              <h3 className="features-values-card-title">Commitment</h3>
              <p className="features-values-card-text">
                {' '}
                We demonstrate dedication to personal growth, team success, and
                community service. Commitment means showing up consistently,
                following through on promises, and giving your best effort. Our
                cadets learn the power of perseverance and loyalty to their
                goals and peers.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="features-values-card-list">
                <span>Dedicated excellence</span>
                <span>Consistent presence</span>
                <span>Service to others</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-philosophy">
        <div className="about-philosophy-header">
          <h2 className="about-philosophy-title section-title">
            {' '}
            Our Leadership Philosophy
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <p className="section-subtitle about-philosophy-subtitle">
            {' '}
            A holistic approach to youth development grounded in spiritual
            guidance and ethical transformation
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="about-philosophy-timeline">
          <div className="about-philosophy-item">
            <div className="about-philosophy-marker"></div>
            <div className="about-philosophy-content">
              <div className="about-philosophy-image">
                <img
                  alt="A diverse group of adults wearing TEAM shirts standing in a park."
                  src="https://images.pexels.com/photos/7551426/pexels-photo-7551426.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="about-philosophy-text">
                <h3 className="about-philosophy-content-title">
                  Spiritual Foundation
                </h3>
                <p className="about-philosophy-content-description">
                  {' '}
                  At the heart of SA Youth Cadets is a deep spiritual foundation
                  that guides all our activities. We believe in nurturing the
                  soul alongside the body and mind, helping young people
                  discover their purpose and connect with values greater than
                  themselves. Our spiritual guidance provides a moral compass
                  for decision-making and fosters compassion, empathy, and
                  service to others.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="about-philosophy-item about-philosophy-item-reverse">
            <div className="about-philosophy-marker"></div>
            <div className="about-philosophy-content">
              <div className="about-philosophy-image">
                <img
                  alt="Two young scouts read and play ukulele at an outdoor camp, enjoying nature."
                  src="https://images.pexels.com/photos/9303772/pexels-photo-9303772.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="about-philosophy-text">
                <h3 className="about-philosophy-content-title">
                  TIBMIT Program
                </h3>
                <p className="about-philosophy-content-description">
                  {' '}
                  The Transforming Intuitive Behavioural Management Initiative
                  Thinking Program (TIBMIT) is our signature developmental
                  approach. This innovative methodology combines adventure
                  challenges, creative exploration, and structured reflection to
                  develop essential life skills. Through TIBMIT, cadets learn
                  problem-solving, emotional intelligence, teamwork, and
                  critical thinking in experiential settings that make learning
                  memorable and meaningful.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="about-philosophy-item">
            <div className="about-philosophy-marker"></div>
            <div className="about-philosophy-content">
              <div className="about-philosophy-image">
                <img
                  alt="A soccer coach gives tactical advice to a youth team indoors on artificial turf."
                  src="https://images.pexels.com/photos/6077804/pexels-photo-6077804.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="about-philosophy-text">
                <h3 className="about-philosophy-content-title">
                  {' '}
                  Semi-Military Structure
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="about-philosophy-content-description">
                  {' '}
                  Our semi-military framework provides discipline, structure,
                  and a sense of belonging that many young people crave. This
                  approach teaches respect for authority, punctuality, teamwork,
                  and personal accountability. The structured environment
                  creates clear expectations while building confidence,
                  leadership skills, and the ability to work effectively within
                  hierarchical systems essential for future success.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="about-philosophy-item about-philosophy-item-reverse">
            <div className="about-philosophy-marker"></div>
            <div className="about-philosophy-content">
              <div className="about-philosophy-image">
                <img
                  alt="Male coach in a gym engaging with a group of children, wearing casual sportswear."
                  src="https://images.pexels.com/photos/7207546/pexels-photo-7207546.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="about-philosophy-text">
                <h3 className="about-philosophy-content-title">
                  Holistic Development
                </h3>
                <p className="about-philosophy-content-description">
                  {' '}
                  We develop the whole person through integrated programs
                  addressing mental, physical, spiritual, and moral growth.
                  Physical activities build strength and endurance, intellectual
                  challenges sharpen the mind, spiritual practices deepen
                  values, and moral education shapes character. This
                  comprehensive approach ensures cadets emerge as well-rounded
                  individuals prepared for life&apos;s complexities and
                  opportunities.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="about-philosophy-item">
            <div className="about-philosophy-marker"></div>
            <div className="about-philosophy-content">
              <div className="about-philosophy-image">
                <img
                  alt="Cheerleaders perform an aerial stunt in a gym setting, showcasing teamwork and skill."
                  src="https://images.pexels.com/photos/7339112/pexels-photo-7339112.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  loading="lazy"
                />
              </div>
              <div className="about-philosophy-text">
                <h3 className="about-philosophy-content-title">
                  Community Connection
                </h3>
                <p className="about-philosophy-content-description">
                  {' '}
                  Leadership extends beyond personal achievement to serving
                  others and strengthening communities. Through soup kitchen
                  initiatives, community service projects, and engagement with
                  local organizations, our cadets learn that true leadership
                  means lifting others up. We foster a sense of responsibility
                  to use their growing skills and confidence to make positive
                  contributions to the Cape Flats and beyond.
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
      <section className="process-history">
        <div className="process-history-container">
          <h2 className="process-history-title section-title">
            Our Journey of Growth
          </h2>
          <p className="section-subtitle process-history-subtitle">
            {' '}
            Milestones that shaped SA Youth Cadets into the transformative
            organization we are today
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="process-history-steps">
            <div className="process-history-step">
              <div className="process-history-step-number">
                <span>01</span>
              </div>
              <div className="process-history-step-icon">
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
              <h3 className="process-history-step-title">The Vision Born</h3>
              <p className="process-history-step-year">2008</p>
              <p className="process-history-step-text">
                {' '}
                Dr. Capt. Rev. Randall Petersen founded SA Youth Cadets with a
                powerful vision: to transform the lives of young people from
                historically disadvantaged backgrounds on the Cape Flats.
                Starting with a handful of dedicated youth, the dream was to
                create leaders grounded in Honour, Courage, and Commitment.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="process-history-step">
              <div className="process-history-step-number">
                <span>02</span>
              </div>
              <div className="process-history-step-icon">
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
              <h3 className="process-history-step-title">Community Roots</h3>
              <p className="process-history-step-year">2010-2012</p>
              <p className="process-history-step-text">
                {' '}
                The organization established its first three branches across the
                Cape Flats, each tailored to serve local communities. With over
                40 initial cadets, programs focused on building trust,
                discipline, and a sense of belonging among youth aged 6-23 who
                needed positive role models and structured guidance.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="process-history-step">
              <div className="process-history-step-number">
                <span>03</span>
              </div>
              <div className="process-history-step-icon">
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
              </div>
              <h3 className="process-history-step-title">TIBMIT Launch</h3>
              <p className="process-history-step-year">2014</p>
              <p className="process-history-step-text">
                {' '}
                The groundbreaking TIBMIT program was introduced,
                revolutionizing youth development through experiential learning.
                Combining adventure challenges, creative exploration, and
                behavioral transformation, this initiative became the
                cornerstone of our approach, setting SA Youth Cadets apart from
                conventional youth programs.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="process-history-step">
              <div className="process-history-step-number">
                <span>04</span>
              </div>
              <div className="process-history-step-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="process-history-step-title">Regional Expansion</h3>
              <p className="process-history-step-year">2016-2019</p>
              <p className="process-history-step-text">
                {' '}
                Growing demand led to rapid expansion across Western Cape
                communities. From 3 branches to 20, and from 40 cadets to over
                200, SA Youth Cadets established hiking programs, community soup
                kitchens, and arts facilitation sessions. Parent involvement
                grew as families witnessed transformative changes in their
                children.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="process-history-step">
              <div className="process-history-step-number">
                <span>05</span>
              </div>
              <div className="process-history-step-icon">
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
              <h3 className="process-history-step-title">
                Today&apos;s Impact
              </h3>
              <p className="process-history-step-year">2020-Present</p>
              <p className="process-history-step-text">
                {' '}
                With 36 branches and over 360 dedicated cadets, SA Youth Cadets
                stands as a beacon of hope and transformation. Our alumni serve
                as mentors, community leaders, and role models. Under Dr.
                Petersen&apos;s continued guidance, we&apos;re bridging
                generational divides and shaping a generation of ethical,
                courageous leaders committed to building a better South Africa.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-impact">
        <div className="stats-impact-container">
          <h2 className="stats-impact-title section-title">
            Our Reach and Impact
          </h2>
          <p className="section-subtitle stats-impact-subtitle">
            {' '}
            Numbers that reflect our commitment to transforming lives across
            South Africa
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="stats-impact-grid">
            <div className="stats-impact-card">
              <div className="stats-impact-icon">
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
                    <path d="M8 2v4m8-4v4"></path>
                    <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                    <path d="M3 10h18"></path>
                  </g>
                </svg>
              </div>
              <div className="stats-impact-number">
                <span>36</span>
              </div>
              <div className="stats-impact-label">
                <span>Active Branches</span>
              </div>
              <p className="stats-impact-description">
                {' '}
                Established across the Cape Flats and Western Cape communities,
                each branch serves as a hub for youth development and community
                engagement.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="stats-impact-card">
              <div className="stats-impact-icon">
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
              <div className="stats-impact-number">
                <span>360+</span>
              </div>
              <div className="stats-impact-label">
                <span>Active Cadets</span>
              </div>
              <p className="stats-impact-description">
                {' '}
                Young leaders actively participating in our programs, developing
                skills, building character, and making a difference in their
                communities.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="stats-impact-card">
              <div className="stats-impact-icon">
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
                    <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle r="6" cx="12" cy="8"></circle>
                  </g>
                </svg>
              </div>
              <div className="stats-impact-number">
                <span>6-23</span>
              </div>
              <div className="stats-impact-label">
                <span>Age Range Served</span>
              </div>
              <p className="stats-impact-description">
                {' '}
                From young children to young adults, we provide age-appropriate
                programs that grow with our cadets throughout their
                developmental journey.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="stats-impact-additional">
            <div className="stats-impact-additional-item">
              <h3 className="stats-impact-additional-title">
                Community Initiatives
              </h3>
              <p className="stats-impact-additional-text">
                {' '}
                Regular soup kitchen programs, hiking expeditions, nature
                retreats, and arts facilitation sessions that connect youth with
                their communities and environment.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="stats-impact-additional-item">
              <h3 className="stats-impact-additional-title">
                Skills Development
              </h3>
              <p className="stats-impact-additional-text">
                {' '}
                Through TIBMIT and structured activities, cadets develop
                leadership, problem-solving, teamwork, emotional intelligence,
                and critical thinking skills.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="stats-impact-additional-item">
              <h3 className="stats-impact-additional-title">
                Family Engagement
              </h3>
              <p className="stats-impact-additional-text">
                {' '}
                We bridge generational divides by involving parents and families
                in our mission, creating a unified approach to youth development
                and community building.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team-leadership">
        <div className="team-leadership-header">
          <h2 className="team-leadership-title section-title">
            Leadership Team
          </h2>
          <p className="section-subtitle team-leadership-subtitle">
            {' '}
            Dedicated leaders guiding our mission to transform young lives
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="team-leadership-grid">
          <div className="team-leadership-card">
            <div className="team-leadership-image">
              <img
                alt="A male conductor leads a boys' choir rehearsal in a serene church setting."
                src="https://images.pexels.com/photos/7567410/pexels-photo-7567410.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="team-leadership-info">
              <h3 className="team-leadership-name">
                Dr. Capt. Rev. Randall Petersen
              </h3>
              <p className="team-leadership-role">
                Founder &amp; Visionary Leader
              </p>
              <p className="team-leadership-bio">
                {' '}
                The visionary behind SA Youth Cadets, Dr. Petersen has dedicated
                his life to empowering youth from disadvantaged backgrounds. His
                unique blend of spiritual guidance, military discipline, and
                compassionate leadership has shaped the organization&apos;s
                transformative approach to youth development.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-leadership-card">
            <div className="team-leadership-image">
              <img
                alt="A sports coach in a red cap and blue jacket engages with students in a gym setting."
                src="https://images.pexels.com/photos/7207557/pexels-photo-7207557.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="team-leadership-info">
              <h3 className="team-leadership-name">Captain Marcus Williams</h3>
              <p className="team-leadership-role">Chief Training Officer</p>
              <p className="team-leadership-bio">
                {' '}
                With over 15 years of experience in youth development and
                military training, Captain Williams oversees all TIBMIT programs
                and ensures our semi-military structure remains effective, safe,
                and transformative for every cadet across our 36 branches.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-leadership-card">
            <div className="team-leadership-image">
              <img
                alt="A group of young girl scouts in uniform standing on a staircase indoors."
                src="https://images.pexels.com/photos/10643534/pexels-photo-10643534.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="team-leadership-info">
              <h3 className="team-leadership-name">Lieutenant Sarah Mbatha</h3>
              <p className="team-leadership-role">Programs Director</p>
              <p className="team-leadership-bio">
                {' '}
                An alumna of SA Youth Cadets herself, Sarah now leads program
                development, coordinates community initiatives, and ensures our
                values of Honour, Courage, and Commitment are integrated into
                every activity and interaction with our cadets.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-leadership-card">
            <div className="team-leadership-image">
              <img
                alt="Close-up of a scout uniform showcasing badges and a neckerchief."
                src="https://images.pexels.com/photos/9302735/pexels-photo-9302735.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="team-leadership-info">
              <h3 className="team-leadership-name">Chaplain David Johnson</h3>
              <p className="team-leadership-role">
                Spiritual Guidance Coordinator
              </p>
              <p className="team-leadership-bio">
                {' '}
                Chaplain Johnson provides the spiritual foundation that
                underpins all SA Youth Cadets activities. He leads reflective
                sessions, mentors cadets facing personal challenges, and ensures
                our programs nurture the moral and spiritual growth of every
                young person.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-leadership-card">
            <div className="team-leadership-image">
              <img
                alt="Young woman holding a tablet with 'INVESTMENTS' text in a modern office setting."
                src="https://images.pexels.com/photos/6913225/pexels-photo-6913225.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="team-leadership-info">
              <h3 className="team-leadership-name">Officer Nomsa Dlamini</h3>
              <p className="team-leadership-role">
                Community Engagement Manager
              </p>
              <p className="team-leadership-bio">
                {' '}
                Nomsa builds bridges between SA Youth Cadets and the broader
                community. She coordinates soup kitchens, organizes parent
                engagement sessions, and develops partnerships with schools and
                local organizations to expand our reach and impact.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="team-leadership-card">
            <div className="team-leadership-image">
              <img
                alt="Male coach in a gym engaging with a group of children, wearing casual sportswear."
                src="https://images.pexels.com/photos/7207546/pexels-photo-7207546.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="team-leadership-info">
              <h3 className="team-leadership-name">Sergeant Thabo Mokoena</h3>
              <p className="team-leadership-role">
                Youth Development Specialist
              </p>
              <p className="team-leadership-bio">
                {' '}
                Thabo specializes in adolescent psychology and adventure-based
                learning. He designs and facilitates the experiential components
                of TIBMIT, from hiking expeditions to creative arts sessions,
                ensuring each activity builds essential life skills and
                confidence.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-voices">
        <div className="testimonials-voices-container">
          <h2 className="section-title testimonials-voices-title">
            {' '}
            Voices of Transformation
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <p className="section-subtitle testimonials-voices-subtitle">
            {' '}
            Stories from cadets, parents, and community partners who have
            witnessed our impact firsthand
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="testimonials-voices-carousel">
            <div className="testimonials-voices-track">
              <div className="testimonials-voices-card">
                <div className="testimonials-voices-quote">
                  <svg
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
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
                <p className="testimonials-voices-text">
                  {' '}
                  SA Youth Cadets completely changed my life. When I joined at
                  14, I was struggling with anger and had no direction. Through
                  the TIBMIT program and the guidance of our leaders, I learned
                  discipline, respect, and most importantly, that I have value.
                  Today I&apos;m 19, a senior cadet, and mentoring younger kids
                  who remind me of my past self.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-voices-author">
                  <div className="testimonials-voices-author-info">
                    <p className="testimonials-voices-author-name">
                      Sipho Ndlovu
                    </p>
                    <p className="testimonials-voices-author-role">
                      {' '}
                      Senior Cadet, 5 Years
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonials-voices-card">
                <div className="testimonials-voices-quote">
                  <svg
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
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
                <p className="testimonials-voices-text">
                  {' '}
                  As a single mother, I was worried about my son falling into
                  the wrong crowd. SA Youth Cadets gave him structure, positive
                  role models, and activities that kept him engaged. I&apos;ve
                  watched him grow from a shy 10-year-old into a confident,
                  respectful young man. The change in his behavior at home and
                  school has been remarkable.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-voices-author">
                  <div className="testimonials-voices-author-info">
                    <p className="testimonials-voices-author-name">
                      Grace Khumalo
                    </p>
                    <p className="testimonials-voices-author-role">
                      {' '}
                      Parent, Mitchells Plain
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonials-voices-card">
                <div className="testimonials-voices-quote">
                  <svg
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
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
                <p className="testimonials-voices-text">
                  {' '}
                  The values taught at SA Youth Cadets—Honour, Courage, and
                  Commitment—are exactly what we try to instill in our school.
                  The cadets from this program consistently demonstrate
                  leadership, help other students, and approach challenges with
                  maturity beyond their years. They are assets to our school
                  community.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-voices-author">
                  <div className="testimonials-voices-author-info">
                    <p className="testimonials-voices-author-name">
                      Mr. Johan van Wyk
                    </p>
                    <p className="testimonials-voices-author-role">
                      {' '}
                      Principal, Hanover Park Secondary
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonials-voices-card">
                <div className="testimonials-voices-quote">
                  <svg
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
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
                <p className="testimonials-voices-text">
                  {' '}
                  I joined when I was just 6 years old, and now at 16, SA Youth
                  Cadets is like my second family. The hiking trips taught me to
                  push through challenges, the community service showed me the
                  importance of helping others, and the mentorship helped me
                  dream bigger. I want to become a teacher so I can give back
                  like my leaders gave to me.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-voices-author">
                  <div className="testimonials-voices-author-info">
                    <p className="testimonials-voices-author-name">
                      Ayanda Mkhize
                    </p>
                    <p className="testimonials-voices-author-role">
                      Cadet, 10 Years
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonials-voices-card">
                <div className="testimonials-voices-quote">
                  <svg
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
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
                <p className="testimonials-voices-text">
                  {' '}
                  Our community soup kitchen partners with SA Youth Cadets
                  monthly, and seeing these young people serve with such
                  dedication and respect is inspiring. They don&apos;t just hand
                  out food—they engage with community members, listen to
                  stories, and treat everyone with dignity. Dr. Petersen has
                  raised a generation of compassionate leaders.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-voices-author">
                  <div className="testimonials-voices-author-info">
                    <p className="testimonials-voices-author-name">
                      Pastor Linda Jacobs
                    </p>
                    <p className="testimonials-voices-author-role">
                      {' '}
                      Community Partner, Cape Town
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
            <div className="testimonials-voices-controls">
              <button
                aria-label="Previous testimonial"
                className="testimonials-voices-button-prev testimonials-voices-button"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m15 18l-6-6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="Next testimonial"
                className="testimonials-voices-button-next testimonials-voices-button"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 18l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="testimonials-voices-indicators">
              <button
                aria-label="View testimonial 1"
                className="testimonials-voices-indicator-active testimonials-voices-indicator"
              ></button>
              <button
                aria-label="View testimonial 2"
                className="testimonials-voices-indicator"
              ></button>
              <button
                aria-label="View testimonial 3"
                className="testimonials-voices-indicator"
              ></button>
              <button
                aria-label="View testimonial 4"
                className="testimonials-voices-indicator"
              ></button>
              <button
                aria-label="View testimonial 5"
                className="testimonials-voices-indicator"
              ></button>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-join">
        <div className="cta-join-overlay"></div>
        <div className="cta-join-content">
          <div className="cta-join-featured">
            <h2 className="cta-join-title section-title">Join the Movement</h2>
            <p className="cta-join-subtitle section-subtitle">
              {' '}
              Be part of shaping South Africa&apos;s future leaders through
              Honour, Courage, and Commitment
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className="cta-join-description">
              {' '}
              Whether you&apos;re a young person seeking purpose and growth, a
              parent looking for positive guidance for your child, or a
              community partner wanting to make a difference, SA Youth Cadets
              welcomes you. Together, we can transform lives and build a united,
              stronger Cape Flats community.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="cta-join-actions">
              <button className="btn-xl btn btn-primary">
                Get Involved Today
              </button>
              <button className="btn-xl btn btn-outline">Contact Us</button>
            </div>
          </div>
          <div className="cta-join-info">
            <div className="cta-join-info-item">
              <div className="cta-join-info-icon">
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
              <h3 className="cta-join-info-title">For Youth &amp; Parents</h3>
              <p className="cta-join-info-text">
                {' '}
                Explore our programs for ages 6-23 and discover how SA Youth
                Cadets can provide structure, mentorship, and transformative
                experiences.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="cta-join-info-item">
              <div className="cta-join-info-icon">
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
              <h3 className="cta-join-info-title">Volunteer &amp; Support</h3>
              <p className="cta-join-info-text">
                {' '}
                Join our team of dedicated volunteers, become a mentor, or
                support our mission through donations and partnerships.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="cta-join-info-item">
              <div className="cta-join-info-icon">
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
              <h3 className="cta-join-info-title">Community Partners</h3>
              <p className="cta-join-info-text">
                {' '}
                Schools, businesses, and organizations: partner with us to
                expand our reach and impact across Western Cape communities.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="about-us-container2">
        <div className="about-us-container3">
          <Script
            html={`<style>
        @keyframes heroFadeUp {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="about-us-container4">
        <div className="about-us-container5">
          <Script
            html={`<script defer data-name="testimonials-carousel">
(function(){
  const track = document.querySelector(".testimonials-voices-track")
  const cards = document.querySelectorAll(".testimonials-voices-card")
  const prevButton = document.querySelector(".testimonials-voices-button-prev")
  const nextButton = document.querySelector(".testimonials-voices-button-next")
  const indicators = document.querySelectorAll(".testimonials-voices-indicator")

  let currentIndex = 0
  const totalCards = cards.length

  function updateCarousel() {
    const offset = -currentIndex * 100
    track.style.transform = \`translateX(\${offset}%)\`

    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("testimonials-voices-indicator-active")
      } else {
        indicator.classList.remove("testimonials-voices-indicator-active")
      }
    })
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards
    updateCarousel()
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards
    updateCarousel()
  }

  nextButton.addEventListener("click", nextSlide)
  prevButton.addEventListener("click", prevSlide)

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index
      updateCarousel()
    })
  })

  let autoplayInterval = setInterval(nextSlide, 5000)

  const carousel = document.querySelector(".testimonials-voices-carousel")
  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoplayInterval)
  })

  carousel.addEventListener("mouseleave", () => {
    autoplayInterval = setInterval(nextSlide, 5000)
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

export default AboutUs
