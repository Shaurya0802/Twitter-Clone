import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Shaurya Sharma",
      username: "sssSharma",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "data:image/jpeg;base64,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",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="data:image/jpeg;base64,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" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;