import React from "react";
import styles from "./homepage/homepage.module.scss";
import image from "../assets/side-img.avif";

export const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <div>
          <p>Happy Birthday Amor❤</p>
          <img src={image} alt="img" />
        </div>
        <section>
          <h2>My Birthday message,</h2>
          <p>
            Today I get to wish someone who has the most beautiful soul of
            anybody I know a very happy birthday! <br /> <br />
            My dear girlfriend, you are the single most incredible person I know
            and I am so lucky and grateful to have you in my life. Nobody even
            comes close to how kind, thoughtful and caring you are. <br />{" "}
            <br />
            You could’ve chosen anybody to share your life with and I am so
            thankful that you chose me! <br /> <br />
            Wishing you the very happiest birthday with all my love.
            <br />
            <br /> Yours Loving, <br /> ❤
          </p>
        </section>
      </div>
    </div>
  );
};
