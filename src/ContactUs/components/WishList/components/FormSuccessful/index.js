import { ImgWrapper, SuccessPageWrapper, WatchImg } from "./style.js";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
export default function FormSuccessful() {
  const history = useHistory();
  const [secondsLeft, setSecondsLeft] = useState(6);
  useEffect(() => {
    setTimeout(function () {
      history.push("/");
    }, 6000);
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      setSecondsLeft(null);
    }
    if (!secondsLeft) return;
    const intervalId = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [secondsLeft]);

  return (
    <SuccessPageWrapper>
      <ImgWrapper>
        <WatchImg
          src="https://southwest-watches-media.s3.amazonaws.com/Cigars_and_Watches_A_Classic_Combination_That_Will_Never_Go_Out_of_Style_a407e785-d8b0-492e-aae2-bbadc90b9cf1_1024x1024.png"
          alt="diamond-watch"
          height="100%"
          max-width="30vw"
        />
      </ImgWrapper>
      <h1>
        Thank you for contacting us. We shall be reaching out to you as soon as
        possible.
      </h1>
      <h3>{`You will be redirected to the home page in ${secondsLeft} seconds. Have a great day!`}</h3>
      <h5>
        If you do not get redirected in time, please click
        <a href="/"> here</a>
      </h5>
    </SuccessPageWrapper>
  );
}
