import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";



import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Market from "./pages/market";
import FAQ from "./pages/faq";

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';






const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  
  library.pollingInterval = 8000;
  return library;
};

function App() {
  const [theme, colorMode] = useMode();
  return (
<Web3ReactProvider getLibrary={getLibrary}>

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/market" element={<Market />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>

</Web3ReactProvider>

  );
};

export default App;
