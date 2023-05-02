import React, { useState } from "react";
import axios from "axios";
import "./Shortener.css";

function Shortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://url-shortener-oo10.onrender.com/url/shorten",
        { longUrl }
      );

      setShortUrl(response.data);
    } catch (error) {
      // setError(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      if (shortUrl) {
        await navigator.clipboard.writeText(shortUrl.shortUrl);
        setCopySuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid   form">
      <div className="tag"> URL Shortener 🔗</div>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          <h4 className="longUrl"> Enter Long URL :</h4>
          <input
            className="form-control"
            type="text"
            placeholder=" 🔗Enter Long  URL:"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </label>
        <br />
        <button className="btn btn-primary" type="submit">
          Shorten
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {shortUrl && (
        <div>
          <h4 className="shortUrl"> Short URL : </h4>

          <a
            className="short"
            href={shortUrl.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortUrl.shortUrl}
          </a>

          <button className="btn btn-success" onClick={handleCopy}>
            {copySuccess ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Shortener;
