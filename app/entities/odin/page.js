async function handleSend(e) {
  e.preventDefault();
  if (!input.trim() || loading) return;

  const userText = input.trim();

  // UI updates
  setInput("");
  setError("");
  setMessages((prev) => [...prev, { from: "you", text: userText }]);
  setLoading(true);

  try {
    const res = await fetch("/api/odin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // ✅ API expects "question"
      body: JSON.stringify({ question: userText }),
    });

    const data = await res.json().catch(() => ({}));

    // ✅ show real server error when available
    if (!res.ok) {
      throw new Error(data?.error || "Odin is silent. Try again later.");
    }

    setMessages((prev) => [
      ...prev,
      {
        from: "odin",
        // ✅ API returns "answer"
        text: data.answer ?? "I saw the loop, but I will answer later.",
      },
    ]);

    setError(""); // ✅ ensure error cleared on success
  } catch (err) {
    console.error("Odin UI error:", err);
    setError(err?.message || "Something broke in the loop. Please try again.");
  } finally {
    setLoading(false);
  }
}
