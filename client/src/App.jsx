import React from "react";
import AppRoutes from "./routes/AppRoutes";
import SidebarProvider from "./components/Sidebar/SidebarContext";

function App() {
  return (
    <div className="App">
      <SidebarProvider>
        <AppRoutes />
      </SidebarProvider>
    </div>
  );
}

export default App;
