//import useSpeechToText from "react-hook-speech-to-text";
import { useState, useEffect } from "react";
import { CardStatus } from "src/types";
import useSpeechToText from "/src/react-hook-speech-to-text/Hooks/index";

function SpeechToText({ updateAction, cards }) {
  const [matchedResult, setMatchedResult] = useState(null);
  const {
    error,
    isRecording,
    results,
    setResults,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    timeout: 10000,
  });
  useEffect(() => {
    if (!matchedResult) {
      const card = cards.find(
        (card) => card.name.toUpperCase() === results[0]?.trim().toUpperCase()
      )
      console.log("results", results);
      console.log("card", card);
      if (card) {
        if (!card.removable) {
          updateAction(card, CardStatus.discard);
        } else {
          setMatchedResult(card);
        }
        setResults([]);
      }
    }

    if (matchedResult &&
      ["removed", "discard"].some((item) => item.includes(results[0]?.trim()))
    ) {
      console.log("found it and action dispatched!", matchedResult, CardStatus[results[0].trim()]);
      updateAction(matchedResult[0], CardStatus[results[0].trim()]);
      setMatchedResult([])
    }
  }, [results]);

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <div>{matchedResult}</div>
    </div>
  );
}

export default SpeechToText;
