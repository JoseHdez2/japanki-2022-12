import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>🇯🇵 Hello Japanki 🇯🇵 </h1>
      {["Anki", "Koohii", "Kanji Study"].map((e) => (
        <h2>{e}</h2>
      ))}
    </div>
  );
}
