import React, { useState } from "react";

const handleUpload = () => {};

const handleChange = () => {};

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  return (
    <div>
      {/* I want to have... */}
      {/* - Caption  input*/}
      {/* - File picker*/}
      {/* - Post button*/}

      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption()}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
