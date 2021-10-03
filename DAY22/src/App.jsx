import React, { useState, useEffect } from "react";
import Templates from "./Components/Templates";
import CreateMeme from "./Components/CreateMeme";
import "./App.css";

function App() {
  const [templates, setTemplates] = useState([]);
  const [editMeme, setEditMeme] = useState(null);
  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        console.log(data.data.memes);
        setTemplates(data.data.memes);
      } catch (err) {
        console.log(err);
      }
    };
    response();
    console.log("templates", templates);
  }, []);

  return (
    <>
      <div className="heading">Meme Generator</div>
      {editMeme === null ? (
        <Templates templates={templates} setEditMeme={setEditMeme} />
      ) : (
        <CreateMeme meme={editMeme} setEditMeme={setEditMeme} />
      )}
    </>
  );
}

export default App;
