import "./styles.css";
import styled from "styled-components";

const SkyBg = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(7,7,93,1) 47%, rgba(29,55,150,1) 77%, rgba(150,211,252,1) 100%);
  width: 100vw;
  height: 100vh;
`;

const MainCard = styled.div`
  border: 3px dotted orange;
  background: palegoldenrod;
  width: 50rem;
  margin: auto;
`;

export default function App() {
  return (
    <div className="App">
      <SkyBg>
        <MainCard>
          <h1>🇯🇵 Hello Japanki 🇯🇵 </h1>
          {["Anki", "Koohii", "Kanji Study"].map((e) => (
            <h2>{e}</h2>
          ))}
        </MainCard>
      </SkyBg>
    </div>
  );
}
