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
      console.log("Response:", response.data); // Log the response data
      if (response.data.shortUrl) {
        setShortUrl(response.data);
        setError("");
      } else {
        setError("Error occurred while shortening the URL.");
      }
    } catch (error) {
      console.error("Error:", error); 
      setError("Error occurred while shortening the URL.");
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
      console.error("Copy Error:", error); // Log the copy error
    }
  };

  return (
    <div className="container-fluid">
      <div className="tag">URL Shortener 🔗</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h4 className="longUrl">Long URL :</h4>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Shorten
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {shortUrl && (
        <div className="output-container">
          <h4 className="shortUrl">Short URL:</h4>
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


// import React, { useState } from "react";
// import axios from "axios";
// import "./Shortener.css";

// function Shortener() {
//   const [longUrl, setLongUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [copySuccess, setCopySuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://url-shortener-oo10.onrender.com/url/shorten",
//         { longUrl }
//       );

//       setShortUrl(response.data);
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };

//   const handleCopy = async (e) => {
//     e.preventDefault();
//     try {
//       if (shortUrl) {
//         await navigator.clipboard.writeText(shortUrl.shortUrl);
//         setCopySuccess(true);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="tag">URL Shortener 🔗</div>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//         <h4 className="longUrl"> Long URL :</h4>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Long URL"
//             value={longUrl}
//             onChange={(e) => setLongUrl(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-primary" type="submit">
//           Shorten
//         </button>
//       </form>
//       {error && <div className="error">{error}</div>}
//       {shortUrl && (
//         <div className="output-container">
//           <h4 className="shortUrl"> Short URL : </h4>
//           <a
//             className="short"
//             href={shortUrl.shortUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {shortUrl.shortUrl}
//           </a>
//           <button className="btn btn-success" onClick={handleCopy}>
//             {copySuccess ? "Copied!" : "Copy"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shortener;
