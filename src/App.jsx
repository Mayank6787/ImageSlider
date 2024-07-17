import "./App.css";
import ImageSlider from "./components/ImageSlider.jsx";
import Container from "./components/Container.jsx";

function App() {
  return (
    <>
      <Container>
        <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={"10"} />
      </Container>
    </>
  );
}

export default App;
