import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchSynonyms } from "./api/fetchWords";
import { useGetSynonyms } from "./hooks/useGetSynonyms";

const URL = `https://api.datamuse.com`;

function App() {
  const [word, setWord] = useState("");
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //https://api.datamuse.com/words?rel_jja=yellow
    getSynonyms(word);
  };

  const handleSynonymClicked = (newWord: string) => {
    setWord(newWord);
    getSynonyms(newWord);
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="wordInput">Your word</label>
        <input
          type="text"
          id="wordInput"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ol>
          {synonyms.map((word) => (
            <li key={word.word} onClick={() => handleSynonymClicked(word.word)}>
              {word.word}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
