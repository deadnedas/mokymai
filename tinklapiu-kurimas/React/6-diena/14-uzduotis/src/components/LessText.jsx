import { useState } from "react";

export default function LessText({ text, defaultLength }) {
  const [more, setText] = useState(false);
  const readMore = () => {
    setText(!more);
  };

  return (
    <div>
      <p>
        {more ? (
          <span>
            {text}
            {text.substring(0, 34)}{" "}
            <a href="#" onClick={readMore}>
              read less
            </a>{" "}
          </span>
        ) : (
          <span>
            {text.substring(0, 34)}{" "}
            <a href="#" onClick={readMore}>
              ...read more
            </a>{" "}
          </span>
        )}
      </p>
    </div>
  );
}
