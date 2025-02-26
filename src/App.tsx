import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Stack, Container } from "@mui/material";

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const launchDate = new Date("2026-01-01").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box  sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", textAlign: "center", bgcolor: "#121212", color: "white" }}>
      <Box>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Coming Soon
        </Typography>
        <Typography variant="body1" color="gray" gutterBottom>
          We're working hard to bring something amazing!
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ my: 2, fontSize: "1.5rem", fontWeight: "bold" }}>
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 3 }}>
          <TextField 
            variant="outlined" 
            placeholder="Enter your email" 
            sx={{ bgcolor: "#333", borderRadius: "4px", input: { color: "white" } }}
          />
          <Button variant="contained" color="primary">Notify Me</Button>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 3, fontSize: "1.5rem" }}>
          <a href="#" style={{ color: "#1DA1F2" }}>🔵</a>
          <a href="#" style={{ color: "#1DA1F2" }}>🐦</a>
          <a href="#" style={{ color: "#1DA1F2" }}>📸</a>
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
