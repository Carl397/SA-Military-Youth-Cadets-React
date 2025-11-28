import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './programs-activities.css'

const ProgramsActivities = (props) => {
  return (
    <div className="programs-activities-container1">
      <Helmet>
        <title>Programs-Activities - SA Military Youth Cadets</title>
        <meta
          property="og:title"
          content="Programs-Activities - SA Military Youth Cadets"
        />
        <link
          rel="canonical"
          href="https://www.sa-military-youth-cadets.org.za/programs-activities"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-programs">
        <div className="hero-programs-video-wrapper">
          <video
            src="https://videos.pexels.com/video-files/8937702/8937702-hd_1280_720_25fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/8937702/pictures/preview-0.jpeg"
            autoPlay="true"
            playsInline="true"
            className="hero-programs-video"
          ></video>
          <div className="hero-programs-overlay"></div>
        </div>
        <div className="hero-programs-content">
          <div className="hero-programs-inner">
            <h1 className="hero-programs-title hero-title">
              Transform Through Action
            </h1>
            <p className="hero-subtitle hero-programs-subtitle">
              {' '}
              Empowering youth aged 6-23 through TIBMIT, adventure challenges,
              nature expeditions, and creative expression
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-programs-badges">
              <div className="hero-programs-badge">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
                <span>36 Branches</span>
              </div>
              <div className="hero-programs-badge">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
                <span>360+ Cadets</span>
              </div>
              <div className="hero-programs-badge">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
                <span>Ages 6-23</span>
              </div>
            </div>
            <div className="hero-programs-cta">
              <a href="#tibmit-program">
                <div className="btn-lg btn btn-primary">
                  <span>
                    {' '}
                    Explore Programs
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="#join-process">
                <div className="btn-lg btn-secondary btn">
                  <span>
                    {' '}
                    Join a Branch
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
      </section>
      <section id="tibmit-program" className="tibmit-program">
        <div className="tibmit-program-wrapper">
          <div className="tibmit-program-header">
            <h2 className="tibmit-program-title section-title">
              TIBMIT Program
            </h2>
            <p className="section-subtitle tibmit-program-subtitle">
              {' '}
              Transforming Intuitive Behavioural Management Initiative Thinking
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="tibmit-program-accordion">
            <details className="tibmit-program-item">
              <summary className="tibmit-program-summary">
                <div className="tibmit-program-summary-content">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
                  <span className="tibmit-program-summary-title">
                    {' '}
                    Program Goals &amp; Mission
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                  className="tibmit-program-chevron"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="tibmit-program-content">
                <p className="section-content">
                  {' '}
                  The TIBMIT program is the cornerstone of SA Youth Cadets&apos;
                  transformative approach to youth development. Our mission is
                  to cultivate future ethical leaders who embody our core values
                  of Honour, Courage, and Commitment. Through this comprehensive
                  initiative, we guide young South Africans from historically
                  disadvantaged backgrounds to discover their full potential and
                  become positive change agents in their communities.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  We aim to bridge generational divides, uniting parents and
                  youth in a shared journey towards personal excellence and
                  community service. Each cadet learns to navigate life&apos;s
                  challenges with integrity, develop resilience in the face of
                  adversity, and cultivate a deep sense of responsibility
                  towards their peers and nation.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="tibmit-program-item">
              <summary className="tibmit-program-summary">
                <div className="tibmit-program-summary-content">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                      <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                      <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                      <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                      <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                      <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                    </g>
                  </svg>
                  <span className="tibmit-program-summary-title">
                    {' '}
                    Mental Development Pillar
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                  className="tibmit-program-chevron"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="tibmit-program-content">
                <p className="section-content">
                  {' '}
                  Our mental development curriculum focuses on building critical
                  thinking skills, emotional intelligence, and decision-making
                  capabilities. Cadets engage in problem-solving exercises,
                  strategic planning activities, and group discussions that
                  challenge their cognitive abilities and expand their
                  worldview.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Through structured workshops and mentorship sessions,
                  participants learn conflict resolution, effective
                  communication, and leadership principles. We emphasize the
                  importance of education, encourage academic excellence, and
                  provide study skills training to support their formal
                  schooling. Mental resilience training prepares cadets to
                  handle stress, overcome obstacles, and maintain a growth
                  mindset in all circumstances.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="tibmit-program-item">
              <summary className="tibmit-program-summary">
                <div className="tibmit-program-summary-content">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
                  <span className="tibmit-program-summary-title">
                    {' '}
                    Physical Development Pillar
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                  className="tibmit-program-chevron"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="tibmit-program-content">
                <p className="section-content">
                  {' '}
                  Physical fitness is a fundamental component of cadet
                  development. Our semi-military inspired training regimen
                  includes structured physical exercises, endurance training,
                  and team sports that build strength, stamina, and
                  coordination. Cadets participate in drill formations, obstacle
                  courses, and fitness challenges designed to push their limits
                  safely.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  We teach the importance of personal health, nutrition, and
                  maintaining an active lifestyle. Physical activities are
                  carefully structured to be age-appropriate and inclusive,
                  ensuring every cadet can participate and experience progress.
                  Through physical challenges, cadets learn discipline,
                  perseverance, and the connection between bodily health and
                  mental wellbeing.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="tibmit-program-item">
              <summary className="tibmit-program-summary">
                <div className="tibmit-program-summary-content">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
                  <span className="tibmit-program-summary-title">
                    {' '}
                    Spiritual Development Pillar
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                  className="tibmit-program-chevron"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="tibmit-program-content">
                <p className="section-content">
                  {' '}
                  Spiritual development forms the moral compass that guides our
                  cadets. Through reflective practices, values-based
                  discussions, and community service, participants explore
                  questions of purpose, meaning, and connection. We respect
                  diverse backgrounds while fostering universal principles of
                  compassion, integrity, and service to others.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Cadets engage in meditation, gratitude practices, and ethical
                  discussions that deepen their understanding of themselves and
                  their place in the world. We encourage them to develop a
                  personal value system aligned with our core principles while
                  respecting their individual beliefs. Spiritual growth is
                  measured not by religious adherence but by the development of
                  character, empathy, and a commitment to making a positive
                  difference.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="tibmit-program-item">
              <summary className="tibmit-program-summary">
                <div className="tibmit-program-summary-content">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
                  <span className="tibmit-program-summary-title">
                    {' '}
                    Moral Development Pillar
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                  className="tibmit-program-chevron"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="tibmit-program-content">
                <p className="section-content">
                  {' '}
                  Moral development teaches cadets to distinguish right from
                  wrong and to act with integrity even when no one is watching.
                  Through real-world scenarios, role-playing exercises, and
                  ethical case studies, participants learn to navigate complex
                  moral situations with wisdom and courage.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  We instill a strong sense of social responsibility, teaching
                  cadets about justice, fairness, and the impact of their
                  choices on others. Community service projects provide hands-on
                  experience in putting values into action, from soup kitchen
                  volunteering to environmental stewardship. Cadets develop
                  accountability, learn to take responsibility for their
                  actions, and understand the importance of being positive role
                  models in their schools and communities.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="tibmit-program-item">
              <summary className="tibmit-program-summary">
                <div className="tibmit-program-summary-content">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="8"
                        y="2"
                        rx="1"
                        ry="1"
                        width="8"
                        height="4"
                      ></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    </g>
                  </svg>
                  <span className="tibmit-program-summary-title">
                    {' '}
                    Session Structure &amp; Weekly Activities
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                  className="tibmit-program-chevron"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="tibmit-program-content">
                <p className="section-content">
                  {' '}
                  Each TIBMIT session follows a structured format designed to
                  maximize learning and engagement. Sessions typically run for
                  2-3 hours and include a balanced mix of physical training,
                  skills workshops, group discussions, and recreational
                  activities. We begin with opening formations and team
                  check-ins, proceed through focused learning modules, and
                  conclude with reflection time.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Weekly activities rotate through our four development pillars,
                  ensuring comprehensive growth across all dimensions. Cadets
                  participate in drill practice, leadership rotations,
                  project-based learning, and peer mentoring. We incorporate
                  games, challenges, and creative exercises to keep sessions
                  dynamic and engaging. Regular assessments help track
                  individual progress, and badges are awarded as cadets master
                  new skills and demonstrate core values.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
            <details className="tibmit-program-item">
              <summary className="tibmit-program-summary">
                <div className="tibmit-program-summary-content">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
                  <span className="tibmit-program-summary-title">
                    {' '}
                    Cadet Outcomes &amp; Success Stories
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                  className="tibmit-program-chevron"
                >
                  <path
                    d="m6 9l6 6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="tibmit-program-content">
                <p className="section-content">
                  {' '}
                  Graduates of the TIBMIT program demonstrate measurable
                  improvements across all development areas. Cadets report
                  increased self-confidence, better academic performance,
                  stronger family relationships, and enhanced social skills.
                  Many become school leaders, peer mentors, and community
                  volunteers, actively applying their training to make a
                  difference.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p className="section-content">
                  {' '}
                  Parents consistently observe positive behavioral changes,
                  improved discipline, and greater respect for authority. Cadets
                  develop practical life skills including time management, goal
                  setting, public speaking, and teamwork that serve them well
                  beyond the program. Our alumni network includes university
                  students, young professionals, and community leaders who
                  credit their cadet experience as foundational to their
                  success. The TIBMIT program doesn&apos;t just prepare youth
                  for the future—it transforms them into the ethical leaders
                  South Africa needs today.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="adventure-challenges">
        <div className="adventure-challenges-wrapper">
          <div className="adventure-challenges-header">
            <h2 className="adventure-challenges-title section-title">
              {' '}
              Adventure Challenges
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle adventure-challenges-subtitle">
              {' '}
              Building confidence and leadership through dynamic physical
              activities
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="adventure-challenges-grid">
            <div className="adventure-challenges-card">
              <div className="adventure-challenges-image-wrapper">
                <img
                  alt="Cheerleaders perform an aerial stunt in a gym setting, showcasing teamwork and skill."
                  src="https://images.pexels.com/photos/7339112/pexels-photo-7339112.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="adventure-challenges-image"
                />
                <div className="adventure-challenges-overlay-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
              </div>
              <div className="adventure-challenges-content">
                <h3 className="adventure-challenges-card-title">
                  Obstacle Courses
                </h3>
                <p className="section-content adventure-challenges-card-text">
                  {' '}
                  Designed to test physical endurance and mental resilience, our
                  obstacle courses challenge cadets to push beyond perceived
                  limits. From rope climbs to balance beams, wall scaling to
                  tire runs, each element builds strength, agility, and
                  determination. Courses are age-appropriate and progressively
                  challenging, ensuring every cadet experiences growth and
                  achievement.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="adventure-challenges-benefits">
                  <span className="adventure-challenges-benefit">
                    Physical Fitness
                  </span>
                  <span className="adventure-challenges-benefit">
                    Problem Solving
                  </span>
                  <span className="adventure-challenges-benefit">
                    Perseverance
                  </span>
                </div>
              </div>
            </div>
            <div className="adventure-challenges-card">
              <div className="adventure-challenges-image-wrapper">
                <img
                  alt="Group of young athletes joining hands in a gym, symbolizing teamwork and unity."
                  src="https://images.pexels.com/photos/6203640/pexels-photo-6203640.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="adventure-challenges-image"
                />
                <div className="adventure-challenges-overlay-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
              </div>
              <div className="adventure-challenges-content">
                <h3 className="adventure-challenges-card-title">
                  Leadership Tasks
                </h3>
                <p className="section-content adventure-challenges-card-text">
                  {' '}
                  Team-based leadership challenges place cadets in scenarios
                  requiring strategic thinking, clear communication, and
                  collaborative decision-making. From planning group missions to
                  coordinating rescue simulations, these activities develop
                  essential leadership qualities. Cadets rotate through leader
                  and follower roles, learning both to guide and to support
                  effectively.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="adventure-challenges-benefits">
                  <span className="adventure-challenges-benefit">
                    Team Leadership
                  </span>
                  <span className="adventure-challenges-benefit">
                    Communication
                  </span>
                  <span className="adventure-challenges-benefit">Strategy</span>
                </div>
              </div>
            </div>
            <div className="adventure-challenges-card">
              <div className="adventure-challenges-image-wrapper">
                <img
                  alt="Male coach in a gym engaging with a group of children, wearing casual sportswear."
                  src="https://images.pexels.com/photos/7207546/pexels-photo-7207546.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="adventure-challenges-image"
                />
                <div className="adventure-challenges-overlay-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
              </div>
              <div className="adventure-challenges-content">
                <h3 className="adventure-challenges-card-title">
                  Confidence Exercises
                </h3>
                <p className="section-content adventure-challenges-card-text">
                  {' '}
                  Specialized activities designed to build self-belief and
                  overcome fear. Public speaking drills, trust exercises, height
                  challenges, and performance tasks help cadets step outside
                  comfort zones in a supportive environment. Experienced leaders
                  provide encouragement and constructive feedback, celebrating
                  every step of progress and building unshakeable confidence.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="adventure-challenges-benefits">
                  <span className="adventure-challenges-benefit">
                    Self-Confidence
                  </span>
                  <span className="adventure-challenges-benefit">
                    Public Speaking
                  </span>
                  <span className="adventure-challenges-benefit">
                    Trust Building
                  </span>
                </div>
              </div>
            </div>
            <div className="adventure-challenges-card">
              <div className="adventure-challenges-image-wrapper">
                <img
                  alt="A diverse group of adults wearing TEAM shirts standing in a park."
                  src="https://images.pexels.com/photos/7551426/pexels-photo-7551426.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="adventure-challenges-image"
                />
                <div className="adventure-challenges-overlay-badge">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
              </div>
              <div className="adventure-challenges-content">
                <h3 className="adventure-challenges-card-title">
                  {' '}
                  Safety &amp; Objectives
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="section-content adventure-challenges-card-text">
                  {' '}
                  Every adventure challenge prioritizes cadet safety while
                  maximizing developmental impact. Certified trainers supervise
                  all activities, proper safety equipment is mandatory, and
                  medical personnel are on standby. Our objectives extend beyond
                  physical achievement to cultivate courage, resilience,
                  teamwork, and the understanding that true strength comes from
                  supporting one another through challenges.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="adventure-challenges-benefits">
                  <span className="adventure-challenges-benefit">
                    Certified Safety
                  </span>
                  <span className="adventure-challenges-benefit">
                    Proper Equipment
                  </span>
                  <span className="adventure-challenges-benefit">
                    Medical Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hikes-retreats">
        <div className="hikes-retreats-container">
          <div className="hikes-retreats-header">
            <h2 className="section-title hikes-retreats-title">
              Hikes &amp; Retreats
            </h2>
            <p className="section-subtitle hikes-retreats-subtitle">
              {' '}
              Connecting youth with nature while building essential outdoor
              skills
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="hikes-retreats-list">
            <article className="hikes-retreats-item">
              <div className="hikes-retreats-item-image">
                <img
                  alt="Two young scouts read and play ukulele at an outdoor camp, enjoying nature."
                  src="https://images.pexels.com/photos/9303772/pexels-photo-9303772.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="hikes-retreats-item-content">
                <div className="hikes-retreats-item-meta">
                  <span className="hikes-retreats-item-badge">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>
                      {' '}
                      Mountain Expeditions
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="hikes-retreats-item-age">Ages 10-23</span>
                </div>
                <h3 className="hikes-retreats-item-title">
                  Weekend Hiking Adventures
                </h3>
                <p className="section-content hikes-retreats-item-description">
                  {' '}
                  Our weekend hiking trips take cadets into South Africa&apos;s
                  stunning natural landscapes, from Table Mountain trails to
                  coastal paths. These expeditions teach navigation skills,
                  environmental awareness, and physical endurance. Cadets learn
                  to read maps, use compasses, identify local flora and fauna,
                  and practice Leave No Trace principles. Each hike includes
                  team-building challenges and opportunities for reflection and
                  connection with nature.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hikes-retreats-item-details">
                  <div className="hikes-retreats-item-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span>Navigation &amp; Orienteering</span>
                  </div>
                  <div className="hikes-retreats-item-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Monthly Departures</span>
                  </div>
                </div>
              </div>
            </article>
            <article className="hikes-retreats-item">
              <div className="hikes-retreats-item-image">
                <img
                  alt="Close-up of a scout uniform showcasing badges and a neckerchief."
                  src="https://images.pexels.com/photos/9302735/pexels-photo-9302735.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="hikes-retreats-item-content">
                <div className="hikes-retreats-item-meta">
                  <span className="hikes-retreats-item-badge">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>
                      {' '}
                      Survival Skills
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="hikes-retreats-item-age">Ages 13-23</span>
                </div>
                <h3 className="hikes-retreats-item-title">
                  Wilderness Survival Camps
                </h3>
                <p className="section-content hikes-retreats-item-description">
                  {' '}
                  Multi-day wilderness camps immerse cadets in intensive
                  survival skills training. Participants learn shelter building,
                  fire making, water purification, wild edible identification,
                  and emergency first aid. Under expert supervision, cadets
                  develop self-reliance, resourcefulness, and respect for
                  nature. These transformative experiences build confidence and
                  create lasting bonds through shared challenges and triumphs.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hikes-retreats-item-details">
                  <div className="hikes-retreats-item-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Certified Wilderness Instructors</span>
                  </div>
                  <div className="hikes-retreats-item-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Quarterly Expeditions</span>
                  </div>
                </div>
              </div>
            </article>
            <article className="hikes-retreats-item">
              <div className="hikes-retreats-item-image">
                <img
                  alt="A group of young girl scouts in uniform standing on a staircase indoors."
                  src="https://images.pexels.com/photos/10643534/pexels-photo-10643534.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="hikes-retreats-item-content">
                <div className="hikes-retreats-item-meta">
                  <span className="hikes-retreats-item-badge">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>
                      {' '}
                      Leadership Retreat
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="hikes-retreats-item-age">Ages 15-23</span>
                </div>
                <h3 className="hikes-retreats-item-title">
                  {' '}
                  Leadership Development Retreats
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="section-content hikes-retreats-item-description">
                  {' '}
                  Specialized retreats for senior cadets focus on advanced
                  leadership development in natural settings. These intensive
                  programs combine outdoor challenges with workshops on
                  mentorship, strategic planning, and organizational leadership.
                  Participants engage in deep discussions about personal values,
                  community impact, and their roles as future leaders. Retreats
                  include team projects, peer teaching opportunities, and
                  one-on-one mentorship sessions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hikes-retreats-item-details">
                  <div className="hikes-retreats-item-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Peer Mentorship Training</span>
                  </div>
                  <div className="hikes-retreats-item-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Annual Event</span>
                  </div>
                </div>
              </div>
            </article>
            <article className="hikes-retreats-item">
              <div className="hikes-retreats-item-image">
                <img
                  alt="A cheerleading team gathers for practice in a brightly lit gymnasium."
                  src="https://images.pexels.com/photos/7335861/pexels-photo-7335861.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="hikes-retreats-item-content">
                <div className="hikes-retreats-item-meta">
                  <span className="hikes-retreats-item-badge">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>
                      {' '}
                      Family Hikes
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="hikes-retreats-item-age">All Ages</span>
                </div>
                <h3 className="hikes-retreats-item-title">
                  {' '}
                  Registration &amp; Upcoming Expeditions
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="section-content hikes-retreats-item-description">
                  {' '}
                  Ready to explore the outdoors? Registration for hikes and
                  retreats opens six weeks before each event. All equipment is
                  provided, including backpacks, sleeping bags, and safety gear.
                  We offer different difficulty levels to accommodate various
                  fitness and experience levels. Family participation is
                  encouraged for select hikes, strengthening bonds through
                  shared outdoor adventures. Visit our branch offices or contact
                  us online to register for upcoming expeditions and receive
                  detailed itineraries, packing lists, and preparation
                  guidelines.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="hikes-retreats-item-details">
                  <div className="hikes-retreats-item-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>info@samilitaryyouthcadetts.org</span>
                  </div>
                  <div className="hikes-retreats-item-detail">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                    <span>Register 6 Weeks in Advance</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="arts-facilitation">
        <div className="arts-facilitation-wrapper">
          <div className="arts-facilitation-header">
            <h2 className="arts-facilitation-title section-title">
              {' '}
              Arts &amp; Creative Expression
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle arts-facilitation-subtitle">
              {' '}
              Fostering creativity, confidence, and cultural connection through
              the arts
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="arts-facilitation-carousel-container">
            <button
              aria-label="Previous slide"
              className="arts-facilitation-prev arts-facilitation-nav"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
              >
                <path
                  d="m12 19l-7-7l7-7m7 7H5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="arts-facilitation-carousel">
              <div className="arts-facilitation-carousel-track">
                <div className="arts-facilitation-slide">
                  <div className="arts-facilitation-card">
                    <div className="arts-facilitation-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
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
                    <h3 className="arts-facilitation-card-title">
                      {' '}
                      Visual Arts Workshops
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="arts-facilitation-card-text section-content">
                      {' '}
                      Cadets explore painting, drawing, sculpture, and mixed
                      media under the guidance of professional artists. These
                      sessions encourage self-expression, develop fine motor
                      skills, and provide a therapeutic outlet for emotions.
                      From creating personal emblems to collaborative murals
                      celebrating community heritage, visual arts help cadets
                      discover their unique creative voice and build confidence
                      in sharing their perspectives with the world.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="arts-facilitation-outcomes">
                      <span className="arts-facilitation-outcome">
                        Self-Expression
                      </span>
                      <span className="arts-facilitation-outcome">
                        Cultural Identity
                      </span>
                      <span className="arts-facilitation-outcome">
                        {' '}
                        Confidence Building
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="arts-facilitation-slide">
                  <div className="arts-facilitation-card">
                    <div className="arts-facilitation-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 18V5l12-2v13"></path>
                          <circle r="3" cx="6" cy="18"></circle>
                          <circle r="3" cx="18" cy="16"></circle>
                        </g>
                      </svg>
                    </div>
                    <h3 className="arts-facilitation-card-title">
                      {' '}
                      Music &amp; Performing Arts
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="arts-facilitation-card-text section-content">
                      {' '}
                      Musical training includes traditional African instruments,
                      contemporary music, choir singing, and performance arts.
                      Cadets learn rhythm, melody, harmony, and stagecraft while
                      connecting with South African musical heritage. Regular
                      performances at community events and cadet ceremonies
                      build public speaking skills and stage confidence. Music
                      sessions emphasize collaboration, discipline, and the joy
                      of creating beauty together.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="arts-facilitation-outcomes">
                      <span className="arts-facilitation-outcome">
                        Musical Skills
                      </span>
                      <span className="arts-facilitation-outcome">
                        Stage Presence
                      </span>
                      <span className="arts-facilitation-outcome">
                        Teamwork
                      </span>
                    </div>
                  </div>
                </div>
                <div className="arts-facilitation-slide">
                  <div className="arts-facilitation-card">
                    <div className="arts-facilitation-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="arts-facilitation-card-title">
                      {' '}
                      Creative Writing &amp; Storytelling
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="arts-facilitation-card-text section-content">
                      {' '}
                      Writing workshops empower cadets to share their stories
                      through poetry, essays, short fiction, and personal
                      narratives. Facilitated by published authors and
                      educators, these sessions develop literacy, critical
                      thinking, and emotional intelligence. Cadets explore
                      themes of identity, community, and aspiration while honing
                      communication skills. Selected works are featured in our
                      annual cadet anthology and shared at community readings.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="arts-facilitation-outcomes">
                      <span className="arts-facilitation-outcome">
                        {' '}
                        Literacy Development
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="arts-facilitation-outcome">
                        Critical Thinking
                      </span>
                      <span className="arts-facilitation-outcome">
                        {' '}
                        Emotional Expression
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="arts-facilitation-slide">
                  <div className="arts-facilitation-card">
                    <div className="arts-facilitation-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
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
                    <h3 className="arts-facilitation-card-title">
                      {' '}
                      Drama &amp; Theatre Arts
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </h3>
                    <p className="arts-facilitation-card-text section-content">
                      {' '}
                      Theatre programs teach improvisation, character
                      development, script work, and ensemble performance.
                      Through dramatic play and structured productions, cadets
                      develop empathy, public speaking skills, and emotional
                      intelligence. Annual theatrical productions showcase cadet
                      talent to families and communities, celebrating their
                      growth and creativity. Drama exercises also enhance
                      communication skills valuable in all areas of life.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="arts-facilitation-outcomes">
                      <span className="arts-facilitation-outcome">
                        Public Speaking
                      </span>
                      <span className="arts-facilitation-outcome">Empathy</span>
                      <span className="arts-facilitation-outcome">
                        {' '}
                        Performance Skills
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="arts-facilitation-slide">
                  <div className="arts-facilitation-card">
                    <div className="arts-facilitation-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
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
                    <h3 className="arts-facilitation-card-title">
                      Showcase Exhibitions
                    </h3>
                    <p className="arts-facilitation-card-text section-content">
                      {' '}
                      Our bi-annual arts showcase celebrates cadet creativity
                      with exhibitions, performances, and galleries open to
                      families and the public. These events provide recognition,
                      build confidence, and demonstrate the transformative power
                      of the arts. Featured works span all disciplines and age
                      groups, highlighting individual achievement and collective
                      creativity. Digital galleries on our website extend the
                      reach of cadet artistry, inspiring pride and community
                      connection.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="arts-facilitation-outcomes">
                      <span className="arts-facilitation-outcome">
                        {' '}
                        Public Recognition
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="arts-facilitation-outcome">
                        {' '}
                        Portfolio Building
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="arts-facilitation-outcome">
                        Community Pride
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              aria-label="Next slide"
              className="arts-facilitation-next arts-facilitation-nav"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="arts-facilitation-indicators">
            <button
              aria-label="Go to slide 1"
              className="arts-facilitation-indicator arts-facilitation-indicator-active"
            ></button>
            <button
              aria-label="Go to slide 2"
              className="arts-facilitation-indicator"
            ></button>
            <button
              aria-label="Go to slide 3"
              className="arts-facilitation-indicator"
            ></button>
            <button
              aria-label="Go to slide 4"
              className="arts-facilitation-indicator"
            ></button>
            <button
              aria-label="Go to slide 5"
              className="arts-facilitation-indicator"
            ></button>
          </div>
        </div>
      </section>
      <section id="join-process" className="join-process">
        <div className="join-process-container">
          <div className="join-process-header">
            <h2 className="join-process-title section-title">How to Join</h2>
            <p className="section-subtitle join-process-subtitle">
              {' '}
              Your journey to becoming a cadet starts here
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="join-process-steps">
            <div className="join-process-step">
              <div className="join-process-step-number">
                <span>1</span>
              </div>
              <div className="join-process-step-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
              <h3 className="join-process-step-title">Check Eligibility</h3>
              <p className="join-process-step-text section-content">
                {' '}
                Open to youth aged 6-23 from all backgrounds. Participants must
                demonstrate commitment to personal growth and community values.
                Parental consent required for cadets under 18.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="join-process-connector"></div>
            <div className="join-process-step">
              <div className="join-process-step-number">
                <span>2</span>
              </div>
              <div className="join-process-step-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="join-process-step-title">Find Your Branch</h3>
              <p className="join-process-step-text section-content">
                {' '}
                With 36 branches across the Cape Flats, there&apos;s a cadet
                community near you. Contact our headquarters or visit our
                website to locate your nearest branch and meeting times.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="join-process-connector"></div>
            <div className="join-process-step">
              <div className="join-process-step-number">
                <span>3</span>
              </div>
              <div className="join-process-step-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
              <h3 className="join-process-step-title">Complete Registration</h3>
              <p className="join-process-step-text section-content">
                {' '}
                Submit the registration form with required documents: ID/birth
                certificate, proof of residence, emergency contacts, and medical
                information. Forms available online or at branch offices.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="join-process-connector"></div>
            <div className="join-process-step">
              <div className="join-process-step-number">
                <span>4</span>
              </div>
              <div className="join-process-step-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
              <h3 className="join-process-step-title">Pay Enrollment Fee</h3>
              <p className="join-process-step-text section-content">
                {' '}
                Minimal annual fees cover program materials and activities.
                Financial assistance and scholarships available for families in
                need. No cadet is turned away due to inability to pay.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="join-process-connector"></div>
            <div className="join-process-step">
              <div className="join-process-step-number">
                <span>5</span>
              </div>
              <div className="join-process-step-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
              <h3 className="join-process-step-title">Attend Orientation</h3>
              <p className="join-process-step-text section-content">
                {' '}
                New cadets and parents attend an orientation session introducing
                program structure, expectations, values, and key personnel. Meet
                fellow cadets, receive your welcome pack, and learn the cadet
                code.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="join-process-cta">
            <a href="mailto:info@samilitaryyouthcadetts.org?subject=">
              <div className="btn-lg btn btn-primary">
                <span>
                  {' '}
                  Start Your Application
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
      </section>
      <section className="programs---activities-testimonials-section">
        <div className="testimonials-section-container">
          <div className="testimonials-section-header">
            <h2 className="testimonials-section-title section-title">
              {' '}
              Voices of Transformation
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle testimonials-section-subtitle">
              {' '}
              Hear from our cadets, parents, and leaders about the impact of our
              programs
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="testimonials-section-carousel-wrapper">
            <button
              aria-label="Previous testimonial"
              className="testimonials-section-prev testimonials-section-nav"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
              >
                <path
                  d="m12 19l-7-7l7-7m7 7H5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="testimonials-section-carousel">
              <div className="testimonials-section-track">
                <div className="testimonials-section-slide">
                  <div className="testimonials-section-card">
                    <div className="testimonials-section-quote-icon">
                      <svg
                        fill="currentColor"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewbox="0 0 24 24"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
                      </svg>
                    </div>
                    <p className="section-content testimonials-section-quote">
                      {' '}
                      Joining SA Youth Cadets changed my life completely. I used
                      to struggle with confidence and direction, but through
                      TIBMIT and the adventure challenges, I discovered my
                      leadership potential. Now I&apos;m a peer mentor, helping
                      younger cadets find their path just like my leaders helped
                      me. The values I learned here guide every decision I make.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="testimonials-section-author">
                      <div className="testimonials-section-author-info">
                        <span className="testimonials-section-author-name">
                          {' '}
                          Thando Mbeki
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="testimonials-section-author-role">
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
                </div>
                <div className="testimonials-section-slide">
                  <div className="testimonials-section-card">
                    <div className="testimonials-section-quote-icon">
                      <svg
                        fill="currentColor"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewbox="0 0 24 24"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
                      </svg>
                    </div>
                    <p className="section-content testimonials-section-quote">
                      {' '}
                      As a parent, I&apos;ve watched my daughter transform from
                      a shy, withdrawn child into a confident young woman with
                      clear goals and strong values. The discipline and
                      structure of the cadet program complemented our parenting
                      beautifully. The leaders genuinely care about each
                      child&apos;s development, and the hiking trips created
                      memories we cherish as a family.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="testimonials-section-author">
                      <div className="testimonials-section-author-info">
                        <span className="testimonials-section-author-name">
                          {' '}
                          Mrs. Ntombi Dlamini
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="testimonials-section-author-role">
                          {' '}
                          Parent, Gugulethu Branch
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
                <div className="testimonials-section-slide">
                  <div className="testimonials-section-card">
                    <div className="testimonials-section-quote-icon">
                      <svg
                        fill="currentColor"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewbox="0 0 24 24"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
                      </svg>
                    </div>
                    <p className="section-content testimonials-section-quote">
                      {' '}
                      The arts facilitation program gave me an outlet I never
                      knew I needed. Through poetry and creative writing, I
                      found my voice and learned to express feelings I
                      couldn&apos;t put into words before. My teachers
                      encouraged me to submit my work to competitions, and
                      I&apos;ve won awards that boosted my confidence
                      immeasurably. This program showed me that my story
                      matters.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="testimonials-section-author">
                      <div className="testimonials-section-author-info">
                        <span className="testimonials-section-author-name">
                          {' '}
                          Sipho Khumalo
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="testimonials-section-author-role">
                          {' '}
                          Cadet &amp; Published Poet, Age 16
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
                <div className="testimonials-section-slide">
                  <div className="testimonials-section-card">
                    <div className="testimonials-section-quote-icon">
                      <svg
                        fill="currentColor"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewbox="0 0 24 24"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
                      </svg>
                    </div>
                    <p className="section-content testimonials-section-quote">
                      {' '}
                      Leading this program for over a decade has been my
                      greatest honor. I&apos;ve witnessed countless young people
                      overcome adversity, discover hidden talents, and become
                      the ethical leaders our communities desperately need. The
                      TIBMIT framework gives us tools to address the whole
                      person—mind, body, spirit, and character. Every graduation
                      ceremony reminds me why this work matters.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="testimonials-section-author">
                      <div className="testimonials-section-author-info">
                        <span className="testimonials-section-author-name">
                          {' '}
                          Captain Mandla Zulu
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="testimonials-section-author-role">
                          {' '}
                          Regional Program Director
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
                <div className="testimonials-section-slide">
                  <div className="testimonials-section-card">
                    <div className="testimonials-section-quote-icon">
                      <svg
                        fill="currentColor"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewbox="0 0 24 24"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
                      </svg>
                    </div>
                    <p className="section-content testimonials-section-quote">
                      {' '}
                      The wilderness survival camp was the hardest thing
                      I&apos;ve ever done, but also the most rewarding. Learning
                      to build shelter, make fire, and navigate by stars taught
                      me that I&apos;m capable of far more than I believed.
                      Those skills and that confidence transferred directly to
                      school—I went from failing grades to honor roll. This
                      program saved my future.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <div className="testimonials-section-author">
                      <div className="testimonials-section-author-info">
                        <span className="testimonials-section-author-name">
                          {' '}
                          Lerato Mokoena
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="testimonials-section-author-role">
                          {' '}
                          Cadet &amp; Honor Student, Age 15
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
            </div>
            <button
              aria-label="Next testimonial"
              className="testimonials-section-next testimonials-section-nav"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="testimonials-section-indicators">
            <button
              aria-label="Go to testimonial 1"
              className="testimonials-section-indicator-active testimonials-section-indicator"
            ></button>
            <button
              aria-label="Go to testimonial 2"
              className="testimonials-section-indicator"
            ></button>
            <button
              aria-label="Go to testimonial 3"
              className="testimonials-section-indicator"
            ></button>
            <button
              aria-label="Go to testimonial 4"
              className="testimonials-section-indicator"
            ></button>
            <button
              aria-label="Go to testimonial 5"
              className="testimonials-section-indicator"
            ></button>
          </div>
        </div>
      </section>
      <section className="cta-final">
        <div className="cta-final-container">
          <div className="cta-final-featured">
            <h2 className="cta-final-title section-title">
              {' '}
              Ready to Transform Your Future?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-content cta-final-text">
              {' '}
              Join over 360 cadets across 36 branches who are building
              character, developing leadership, and making a difference in their
              communities. Your journey to becoming an ethical leader starts
              today.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="cta-final-primary-actions">
              <a href="mailto:info@samilitaryyouthcadetts.org?subject=">
                <div className="btn-xl btn btn-primary">
                  <span>
                    {' '}
                    Join Our Program
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
          <div className="cta-final-secondary">
            <div className="cta-final-card">
              <div className="cta-final-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="cta-final-card-title">Find a Branch</h3>
              <p className="cta-final-card-text section-content">
                {' '}
                Locate your nearest SA Youth Cadets branch and meeting schedule.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="mailto:info@samilitaryyouthcadetts.org?subject=Branch Locations?subject=">
                <div className="btn btn-link">
                  <span>
                    {' '}
                    Contact for Locations
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
            <div className="cta-final-card">
              <div className="cta-final-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
              <h3 className="cta-final-card-title">Download Forms</h3>
              <p className="cta-final-card-text section-content">
                {' '}
                Get registration documents and information packets for new
                cadets.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="mailto:info@samilitaryyouthcadetts.org?subject=Registration Forms?subject=">
                <div className="btn btn-link">
                  <span>
                    {' '}
                    Request Forms
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
            <div className="cta-final-card">
              <div className="cta-final-card-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
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
              <h3 className="cta-final-card-title">Volunteer &amp; Support</h3>
              <p className="cta-final-card-text section-content">
                {' '}
                Make a difference by volunteering your time or supporting our
                mission.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href="mailto:info@samilitaryyouthcadetts.org?subject=Volunteer Opportunities?subject=">
                <div className="btn btn-link">
                  <span>
                    {' '}
                    Get Involved
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
          <div className="cta-final-contact">
            <div className="cta-final-contact-item">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
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
              <a href="mailto:info@samilitaryyouthcadetts.org?subject=">
                <div>
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
            <div className="cta-final-contact-item">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewbox="0 0 24 24"
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
              <a
                href="https://samilitary-youthcadetts.org.za"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div rel="noopener noreferrer" target="_blank">
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
      </section>
      <div className="programs-activities-container4">
        <div className="programs-activities-container5">
          <Script
            html={`<script defer data-name="carousels-functionality">
(function(){
  const artsCarousel = document.querySelector(
    ".arts-facilitation-carousel-track"
  )
  const artsSlides = document.querySelectorAll(".arts-facilitation-slide")
  const artsPrevBtn = document.querySelector(".arts-facilitation-prev")
  const artsNextBtn = document.querySelector(".arts-facilitation-next")
  const artsIndicators = document.querySelectorAll(
    ".arts-facilitation-indicator"
  )

  let artsCurrentIndex = 0

  function updateArtsCarousel() {
    const offset = -artsCurrentIndex * 100
    artsCarousel.style.transform = \`translateX(\${offset}%)\`

    artsIndicators.forEach((indicator, index) => {
      if (index === artsCurrentIndex) {
        indicator.classList.add("arts-facilitation-indicator-active")
      } else {
        indicator.classList.remove("arts-facilitation-indicator-active")
      }
    })
  }

  artsNextBtn.addEventListener("click", () => {
    artsCurrentIndex = (artsCurrentIndex + 1) % artsSlides.length
    updateArtsCarousel()
  })

  artsPrevBtn.addEventListener("click", () => {
    artsCurrentIndex =
      (artsCurrentIndex - 1 + artsSlides.length) % artsSlides.length
    updateArtsCarousel()
  })

  artsIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      artsCurrentIndex = index
      updateArtsCarousel()
    })
  })

  const testimonialsCarousel = document.querySelector(
    ".testimonials-section-track"
  )
  const testimonialsSlides = document.querySelectorAll(
    ".testimonials-section-slide"
  )
  const testimonialsPrevBtn = document.querySelector(
    ".testimonials-section-prev"
  )
  const testimonialsNextBtn = document.querySelector(
    ".testimonials-section-next"
  )
  const testimonialsIndicators = document.querySelectorAll(
    ".testimonials-section-indicator"
  )

  let testimonialsCurrentIndex = 0

  function updateTestimonialsCarousel() {
    const offset = -testimonialsCurrentIndex * 100
    testimonialsCarousel.style.transform = \`translateX(\${offset}%)\`

    testimonialsIndicators.forEach((indicator, index) => {
      if (index === testimonialsCurrentIndex) {
        indicator.classList.add("testimonials-section-indicator-active")
      } else {
        indicator.classList.remove("testimonials-section-indicator-active")
      }
    })
  }

  testimonialsNextBtn.addEventListener("click", () => {
    testimonialsCurrentIndex =
      (testimonialsCurrentIndex + 1) % testimonialsSlides.length
    updateTestimonialsCarousel()
  })

  testimonialsPrevBtn.addEventListener("click", () => {
    testimonialsCurrentIndex =
      (testimonialsCurrentIndex - 1 + testimonialsSlides.length) %
      testimonialsSlides.length
    updateTestimonialsCarousel()
  })

  testimonialsIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      testimonialsCurrentIndex = index
      updateTestimonialsCarousel()
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

export default ProgramsActivities
