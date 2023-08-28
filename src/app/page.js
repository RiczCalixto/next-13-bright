import React from "react";
import SnippetCode from "../components/snippet-code";
import { snippets } from "../utils/snippets.utils";
import SnippetSection from "../components/snippet-section";

function Home() {
  return (
    <main>
      <h1>Introduction to Python</h1>

      {snippets.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <SnippetSection key={item.id}>
              <SnippetCode>{item.content}</SnippetCode>
            </SnippetSection>
          </div>
        );
      })}
    </main>
  );
}

export default Home;
