import React, { useState } from "react";
import questions from "./Components/data";
import data from "./Components/data";
import SingleQuestion from "./Components/Questions";
import "./styles.css";

export default function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
