import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./components/pages/login/AuthWrapper";

function App () {
  return (
    <div>
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>
    </div>
  )
}

export default App;