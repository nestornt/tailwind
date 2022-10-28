import Grid from "./components/Grid"
import VersionOne from "./components/VersionOne"
import VersionThree from "./components/VersionThree"
import VersionTwo from "./components/VersionTwo"

function App() {

  const titleStyles = "mt-3 text-center text-xl font-bold";

  return (
    <div className="App">
      <h3 className={titleStyles}>Basic article</h3>
      <VersionOne/>
      <hr/>
      <h3 className={titleStyles}>Styled Article</h3>
      <VersionTwo/>
      <hr/>
      <h3 className={titleStyles}>Advanced Article</h3>
      <VersionThree/>
    </div>
  )
}

export default App
