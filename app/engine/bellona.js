// app/engine/bellona.js

function normalize(text) {
  return (text || "").toLowerCase();
}

export function analyzeMessage(message) {
  const text = normalize(message);

  let topic = "unknown";
  if (
    text.includes("repeat") ||
    text.includes("again") ||
    text.includes("loop") ||
    text.includes("stuck") ||
    text.includes("same mistake")
  ) {
    topic = "loop";
  } else if (
    text.includes("system") ||
    text.includes("structure") ||
    text.includes("organization") ||
    text.includes("company") ||
    text.includes("family")
  ) {
    topic = "system";
  } else if (
    text.includes("who am i") ||
    text.includes("identity") ||
    text.includes("purpose") ||
    text.includes("meaning")
  ) {
    topic = "identity";
  }

  let polarity = "neutral";
  if (
    text.includes("hate") ||
    text.includes("revenge") ||
    text.includes("destroy") ||
    text.includes("ruin") ||
    text.includes("hurt them")
  ) {
    polarity = "destructive";
  } else if (
    text.includes("improve") ||
    text.includes("grow") ||
    text.includes("heal") ||
    text.includes("fix") ||
    text.includes("better")
  ) {
    polarity = "constructive";
  }

  let realm = "Neos";
  if (polarity === "constructive") {
    realm = "C12";
  } else if (polarity === "destructive") {
    realm = "C15";
  }

  if (
    text.includes("religion") ||
    text.includes("god") ||
    text.includes("gods") ||
    text.includes("myth") ||
    text.includes("philosophy")
  ) {
    realm = "Pantheon";
  }

  const metaNote = `Topic=${topic}, Polarity=${polarity}, Realm=${realm}. Bellona classified this message based on Palos/Neos logic and loop patterns.`;

  return {
    topic,
    polarity,
    realm,
    metaNote,
  };
}

