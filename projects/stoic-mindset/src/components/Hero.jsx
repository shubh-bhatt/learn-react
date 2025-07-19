import styles from "./Hero.module.css";
import shwetabhImg from "../assets/shwetabh.png";
import marcusAureliusImg from "../assets/marcus-aurelius.png";
import senecaImg from "../assets/seneca.jpg";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundPhilosophers}>
        <img
          src={marcusAureliusImg}
          alt="Marcus Aurelius"
          className={styles.philosopherImg}
          style={{ top: "10%", left: "5%" }}
        />
        <img
          src={senecaImg}
          alt="Seneca"
          className={styles.philosopherImg}
          style={{ bottom: "15%", left: "30%" }}
        />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>THE TRUTH DOESN'T CARE ABOUT YOUR FEELINGS.</h1>
          <p>
            Unfiltered advice for a generation that has gone soft. It's time to
            reclaim your mind and build a life of consequence.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>ATTACK MODE</button>
            <button className={styles.secondaryBtn}>
              THE RUDEST BOOK EVER
            </button>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src={shwetabhImg}
            alt="Shwetabh Gangwar"
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
