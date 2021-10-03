import React from "react";
import "./styles/templates.css";

const Templates = ({ templates, setEditMeme }) => {
  return (
    <div className="templates">
      {templates.map((template, index) => {
        return (
          <img
            onClick={() => {
              setEditMeme(template);
            }}
            className="meme-img"
            src={template.url}
            key={template.id}
          ></img>
        );
      })}
    </div>
  );
};

export default Templates;
