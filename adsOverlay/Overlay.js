import styles from "./Overlay.module.css";
function Overlay({ setAds, endAds }) {
  return (
    <div className={styles.overlay}>
      <video controls={false} autoPlay muted onEnded={endAds}>
        <source src="https://res.cloudinary.com/kizmelvin/video/upload/v1647619418/ads_zt8s6i.mov" />
      </video>

      <div className={styles.btn}>
        <div>
          <p>Make up to 20% profit when you invest with us</p>
          <a href="https://hackmamba.io/" target={"_blank"} rel="noreferrer">
            Get Started
          </a>
        </div>
        <div>
          <button onClick={() => setAds(false)}>X</button>
        </div>
      </div>
    </div>
  );
}
export default Overlay;
