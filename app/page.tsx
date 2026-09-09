import Image from 'next/image';
import type { CSSProperties } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Check,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';
import MotionController from './motion-controller';

const services = [
  [
    '01',
    'Daily posting',
    'One professionally prepared feed post every day, published directly to the account.',
  ],
  [
    '02',
    'Content sessions',
    'A scheduled in-store shoot approximately every 1–2 weeks to build a bank of photos and short-form video.',
  ],
  [
    '03',
    'Editing + copy',
    'Image and video editing, captions, product-focused copy and relevant hashtag research.',
  ],
  [
    '04',
    'Flexible approval',
    'Review content before publication, or allow independent posting within the agreed brand direction.',
  ],
  [
    '05',
    'Priority inventory',
    'New arrivals and special pieces can move forward in the schedule, with added photography coordinated as needed.',
  ],
  [
    '06',
    'Sales handoff',
    'Posts encourage DMs, calls and store visits. Pricing, availability, negotiation and closing remain with the business unless separately arranged.',
  ],
];

const projects = [
  {
    category: 'Fine jewelry product content',
    title: 'Heart-Shaped Diamond Pair',
    image: '/portfolio/heart-diamonds.png',
    alt: 'Two heart-shaped diamond rings photographed side by side',
    caption: 'Which one has your heart? Some decisions are harder than others.',
    value:
      'A comparison-style composition designed to invite interaction while keeping the product itself as the visual focus.',
    hashtags:
      '#HeartShapedDiamond #HeartDiamond #DiamondRing #EngagementRing #EngagementRingInspo #DiamondJewelry #FineJewelry #RingInspiration #DiamondLover #LuxuryJewelry #Diamonds #RingGoals',
  },
  {
    category: 'Diamond close-up',
    title: 'Princess-Cut Solitaire',
    image: '/portfolio/princess-solitaire.png',
    alt: 'Princess-cut diamond solitaire ring in yellow gold',
    caption: 'Princess treatment. No crown required.',
    value:
      'A clean macro-style product image that emphasizes facets, fire and contrast—the details that make diamond content difficult to capture well.',
    hashtags:
      '#PrincessCut #PrincessCutDiamond #DiamondRing #SolitaireRing #EngagementRing #EngagementRingInspo #DiamondJewelry #FineJewelry #YellowGoldRing #RingInspiration #DiamondLover #LuxuryJewelry #Diamonds #RingGoals',
  },
  {
    category: 'Luxury lifestyle content',
    title: 'Rolex Datejust + Tennis Bracelet',
    image: '/portfolio/rolex-tennis-bracelet.png',
    alt: 'Two-tone Rolex Datejust styled with a diamond tennis bracelet',
    caption:
      'Some things never go out of style. “Time is the ultimate luxury.” A 28mm two-tone YG/SS Datejust with a silver diamond dial. Reference 279173.',
    value:
      'Natural-light lifestyle styling combines a recognizable luxury watch with diamond jewelry while still communicating concrete inventory information.',
    hashtags:
      '#Rolex #RolexDatejust #Datejust #Rolex28mm #RolexWatch #TwoToneRolex #DiamondDial #LuxuryWatch #LuxuryWatches #SwissWatch #WatchCollector #WatchCommunity #WristCheck #LuxuryJewelry #FineJewelry #DiamondJewelry',
  },
  {
    category: 'On-model jewelry content',
    title: 'Curated Diamond Ear Stack',
    image: '/portfolio/diamond-ear-stack.png',
    alt: 'Curated stack of diamond earrings shown on-model',
    caption:
      'Consider this your sign to add another diamond. Because one is never really enough.',
    value:
      'On-model content demonstrates scale, styling and wearability—giving customers a more immediate sense of how multiple pieces can be worn together.',
    hashtags:
      '#EarStack #DiamondEarrings #DiamondJewelry #FineJewelry #JewelryInspo #DiamondLover #LuxuryJewelry #StackedEarrings #Diamonds',
  },
  {
    category: 'High-value product content',
    title: '9.63 CTW Diamond Earrings',
    image: '/portfolio/diamond-earrings.png',
    alt: '9.63 carat total weight diamond earrings on black stands',
    caption:
      'A statement in diamonds. 9.63 carats total. Designed to shine from every angle. DM for pricing & availability.',
    value:
      'A dark, controlled presentation isolates the diamonds and creates a direct sales post with product weight and a clear inquiry call-to-action.',
    hashtags:
      '#DiamondEarrings #DiamondJewelry #FineJewelry #YellowGold #DiamondStuds #LuxuryJewelry #MiamiJewelry #Diamonds',
  },
];

const skills = [
  'Fine jewelry photography',
  'Diamond-focused image editing',
  'Luxury product styling',
  'Instagram content planning',
  'Caption writing + hashtags',
  'Daily social posting',
  'Content batching + scheduling',
  'Working knowledge: 4Cs + certifications',
  'Pricing + negotiation support',
  'Client communication',
];

export default function Home() {
  return (
    <main>
      <MotionController />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mia Gorbachev, home">
          MG<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-line hero-line-1">
            Jewelry content + social media · South Florida
          </p>
          <h1 className="hero-line hero-line-2">
            Fine jewelry,
            <br />
            <em>photographed</em> to be noticed.
          </h1>
          <p className="hero-intro hero-line hero-line-3">
            Done-for-you content creation and consistent social media management
            for fine jewelry businesses.
          </p>
          <a className="text-link hero-line hero-line-4" href="#work">
            View selected work <ArrowDownRight size={18} />
          </a>
        </div>
        <div className="hero-visual">
          <Image
            src="/portfolio/diamond-earrings.png"
            alt="9.63 carat diamond earrings displayed on black stands"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 52vw"
          />
          <div className="image-note">
            <span>Featured study</span>
            <strong>9.63 CTW Diamond Earrings</strong>
          </div>
        </div>
      </section>

      <section className="intro-band" id="services" data-reveal>
        <p className="section-index">01 / The service</p>
        <h2>
          You provide the jewelry.
          <br />
          <em>I handle the content.</em>
        </h2>
        <p>
          A focused social media service for jewelers who want a polished,
          active Instagram presence—without photographing inventory, editing,
          writing captions, or remembering to post every day.
        </p>
      </section>
      <section className="services-grid" aria-label="Services offered">
        {services.map(([number, title, body], index) => (
          <article
            className="service"
            key={number}
            data-reveal
            style={
              { '--reveal-delay': `${(index % 3) * 50}ms` } as CSSProperties
            }
          >
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="work" id="work">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-index">02 / Selected work</p>
            <h2>
              Content made to
              <br />
              <em>sell the piece.</em>
            </h2>
          </div>
          <p>Photography · Editing · Copywriting · Hashtag Research</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article
              className={`project ${index % 2 ? 'project-reverse' : ''}`}
              key={project.title}
              data-reveal
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 58vw"
                />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-copy">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <div className="project-detail">
                  <span>Caption concept</span>
                  <p>{project.caption}</p>
                </div>
                <div className="project-detail">
                  <span>Content value</span>
                  <p>{project.value}</p>
                </div>
                <details>
                  <summary>View hashtag strategy</summary>
                  <p>{project.hashtags}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="process-title" data-reveal>
          <p className="section-index">03 / Working model</p>
          <h2>
            One focused shoot.
            <br />
            <em>Weeks of content.</em>
          </h2>
        </div>
        <div className="process-steps" data-reveal>
          <article>
            <Camera aria-hidden="true" />
            <span>Step 01</span>
            <h3>Capture</h3>
            <p>
              An in-store session approximately every 1–2 weeks creates a bank
              of photos and short-form video.
            </p>
          </article>
          <article>
            <Sparkles aria-hidden="true" />
            <span>Step 02</span>
            <h3>Refine</h3>
            <p>
              Each piece is edited, written and organized into a focused content
              schedule around your brand direction.
            </p>
          </article>
          <article>
            <ArrowUpRight aria-hidden="true" />
            <span>Step 03</span>
            <h3>Publish</h3>
            <p>
              Content is posted remotely on a consistent daily schedule, with
              priority pieces moved forward when needed.
            </p>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-lead" data-reveal>
          <p className="section-index">04 / About + experience</p>
          <h2>
            Jewelry knowledge meets
            <br />
            <em>content creation.</em>
          </h2>
          <p className="about-intro">
            My approach is built around the product first. Fine
            jewelry—especially diamonds—can look flat, dark or lifeless on
            camera when lighting, angle and editing are not handled carefully.
            Working directly in jewelry sales gives me an understanding of what
            customers notice and what information matters in a jewelry post.
          </p>
        </div>
        <div className="about-columns">
          <div className="experience">
            <p className="column-label">Relevant experience</p>
            <article>
              <span>Apr 2026 – Present</span>
              <h3>Ron&apos;s Diamonds</h3>
              <h4>
                Fine Jewelry & Diamond Sales · International Jewelers Exchange,
                Aventura, FL
              </h4>
              <p>
                Support clients shopping for natural diamonds, loose stones and
                finished jewelry. Apply a developing knowledge of the 4Cs,
                grading reports, product presentation, pricing conversations and
                negotiation in a luxury retail setting.
              </p>
            </article>
            <article>
              <span>Independent portfolio development</span>
              <h3>Jewelry Content + Social Media</h3>
              <h4>South Florida</h4>
              <p>
                Create jewelry-specific photography and content samples; edit
                images to keep diamonds clear and dimensional; write captions
                and targeted hashtags; plan content banks for consistent daily
                social posting.
              </p>
            </article>
            <div className="education">
              <p className="column-label">Education</p>
              <h3>NYIAD — Interior Design</h3>
              <p>
                Online studies emphasizing visual composition, materials,
                presentation and refined aesthetics.
              </p>
              <h3>James Madison High School</h3>
              <p>Graduated with Honors · Class of 2024 · GPA 4.0</p>
            </div>
          </div>
          <div className="skills">
            <p className="column-label">Core skills</p>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>
                  <Check size={15} aria-hidden="true" /> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div data-reveal>
          <p className="section-index">05 / Let&apos;s work together</p>
          <h2>
            Ready for content that makes your jewelry{' '}
            <em>impossible to ignore?</em>
          </h2>
        </div>
        <div className="contact-actions" data-reveal>
          <a href="tel:+13054918787" aria-label="Call Mia at 305-491-8787">
            <Phone aria-hidden="true" />
            <span>
              <small>Call</small>305-491-8787
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="sms:+13054918787" aria-label="Text Mia at 305-491-8787">
            <MessageCircle aria-hidden="true" />
            <span>
              <small>Text</small>Send a message
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="mailto:mia.gorbachev@icloud.com">
            <Mail aria-hidden="true" />
            <span>
              <small>Email</small>mia.gorbachev@icloud.com
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <footer>
        <div className="footer-name">Mia Gorbachev</div>
        <p>Jewelry Content & Social Media · South Florida</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
