import { Box, Typography, Container } from "@mui/material";

import RegisterForm from "./RegisterForm";
import mainCanvasBG from "/mainCanvasBG.png";

function MainCanvas() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${mainCanvasBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Container
        id="register-form"
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          minHeight: 777,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            px: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Sofia Sans Condensed",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "70px",
              lineHeight: "70px",
              letterSpacing: 0,
              textAlign: "center",
              textTransform: "uppercase",
              pb: "10px",
              background:
                "linear-gradient(90deg, #FCD678 0%, #FCD678 0.01%, #BC8C2F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Trade with us
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Sofia Sans Condensed",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "70px",
              lineHeight: "70px",
              letterSpacing: 0,
              textAlign: "center",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Register now
          </Typography>
          <RegisterForm />
        </Box>
      </Container>
    </Box>
  );
}

export default MainCanvas;
