import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./globalStyles"
import { themeDefault } from "./theme"
import { Home } from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { SkuKit } from "./pages/PageKit"
import { SkuCombo } from "./pages/PageCombo"

function App() {

  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sku/kit" element={<SkuKit />} />
          <Route path="/sku/combo" element={<SkuCombo />} />        
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
