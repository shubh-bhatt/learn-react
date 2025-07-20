import styles from "./Hero.module.css";
import heroBust from "../assets/marcus-aurelius.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* VERTICAL SIDE TEXT */}
      <div className={`${styles.sideText} ${styles.left}`}>
        <span>Philosophy & Self-Mastery</span>
      </div>
      <div className={`${styles.sideText} ${styles.right}`}>
        <span>The Shwetabh Gangwar Experience</span>
      </div>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>SG</div>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className={styles.menuIcon}>&#8942;</div>
        </nav>

        <div className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <img
              src={heroBust}
              alt="Stoic Philosopher Bust"
              className={styles.heroBust}
            />
            {/* This div creates the yellow glow effect */}
            <div className={styles.glow}></div>
          </div>

          <h1 className={styles.mainHeading}>STOICISM</h1>
        </div>

        {/* Placeholder for the "General Practices" section from the reference */}
        <div className={styles.placeholderSection}>
          <h2>General Practices</h2>
          <p>More content will go here...</p>
        </div>
      </main>
    </div>
  );
};

export default Hero;
