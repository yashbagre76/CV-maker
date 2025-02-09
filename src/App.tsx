import { Box } from "@mui/material";
import UserForm from "./components/UserInfo";

function App() {
  return (
    <Box
      sx={{
        height: "full",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #1976D2 50%, #FFFFFF 50%)",
      }}
    >
      <UserForm />
    </Box>
  );
}

export default App;
