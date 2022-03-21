import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Overlay from "../adsOverlay/Overlay";
export default function Home() {
  const [ads, setAds] = useState(false);
  const playAds = () => {
    let timerId = setTimeout(() => {
      setAds(true);
      timerId = setTimeout(() => {
        setAds(false);
      }, 10000);
    }, 3000);
  };
  const endAds = () => {
    setAds(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Ads Project</title>
      </Head>
      <main className={styles.main}>
        <video controls onPlay={playAds} onEnded={endAds} width={"100%"}>
          <source src="https://res.cloudinary.com/kizmelvin/video/upload/v1647620339/Social_Media_-_1360_dkrwhg.mp4" />
        </video>
        {ads && <Overlay setAds={setAds} endAds={endAds} />}
      </main>
    </div>
  );
}
