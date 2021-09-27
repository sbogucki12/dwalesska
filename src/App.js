import "./App.css";
import Routing from "./utils/Routing";
import { LanguageProvider } from "./utils/LanguageProvider";

function App() {
  return (
    <div>
      <LanguageProvider>
        <Routing />
      </LanguageProvider>
    </div>
  );
}

export default App;
