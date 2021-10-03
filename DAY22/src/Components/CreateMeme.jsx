import React from "react";
import { useState } from "react";
import "./styles/createMeme.css";
const CreateMeme = ({ meme, setEditMeme }) => {
  const [post, setPost] = useState({
    template_id: meme.id,
    username: "teasty",
    password: "PPS$Asr52ttCfaF",
    boxes: [],
  });
  const [memePic, setMemePic] = useState(meme.url);
  const createMeme = (e) => {
    e.preventDefault();
    if (post.boxes.length !== meme.box_count) return;
    for (let item of post.boxes) {
      if (item.text === "") {
        return;
      }
    }
    let url = `https://api.imgflip.com/caption_image?template_id=${post.template_id}&username=${post.username}&password=${post.password}`;
    post.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
      return box;
    });
    try {
      const getMeme = async () => {
        const res = await fetch(url);
        const data = await res.json();
        if (data.success) setMemePic(data.data.url);
      };
      getMeme();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="meme-container">
      <img src={memePic} alt="MEME" className="edit-this-meme" />
      <div className="input-container">
        {[...Array(meme.box_count)].map((e, index) => (
          <input
            type="text"
            key={index}
            required
            className="input-box"
            placeholder={`Caption ${index + 1}`}
            onChange={(e) => {
              const newBox = post.boxes;
              newBox[index] = { text: e.target.value };
              setPost({ ...post, boxes: newBox });
            }}
          />
        ))}
      </div>
      <button className="btn" onClick={createMeme}>
        Create Meme
      </button>
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          setEditMeme(null);
        }}
      >
        Templates
      </button>
    </form>
  );
};

export default CreateMeme;
