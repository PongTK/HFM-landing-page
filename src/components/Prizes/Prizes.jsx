import {
  Box,
  Typography,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import medal01 from "/medal-01.png";
import medal02 from "/medal-02.png";
import medal03 from "/medal-03.png";

const prizesdList = [
  {
    image: medal01,
    title: "$10000",
    description: "1st Place",
  },
  {
    image: medal02,
    title: "$5000",
    description: "2nd Place",
  },
  {
    image: medal03,
    title: "$2500",
    description: "3rd Place",
  },
];

function Prizes() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        py: { xs: 6, md: 0 },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          minHeight: 777,
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Sofia Sans Condensed",
            fontWeight: 400,
            fontStyle: "regular",
            fontSize: { xs: "32px", sm: "40px", md: "50px" },
            lineHeight: { xs: "36px", sm: "44px", md: "50px" },
            letterSpacing: 0,
            textAlign: "center",
            textTransform: "uppercase",
            pb: 7,
            color: "#000000",
          }}
        >
          Prizes
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mt: 6,
            gap: "20px",
          }}
        >
          {prizesdList.map((item, idx) => (
            <PrizesCard key={idx} {...item} align="center" />
          ))}
        </Box>
        <Box
          sx={{
            mt: 10,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#179149",
              my: 2,
              width: "100%",
              "&:hover": { backgroundColor: "#137a3a" },
            }}
            onClick={() => {
              const el = document.getElementById("register-form");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join now
          </Button>
          <Typography variant="body2" color="text.secondary">
            Terms and conditions apply
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function PrizesCard({ image, title, description, align }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: align,
        textAlign: align,
        height: "100%",
        width: { xs: "200px", sm: "250px", md: "350px" },
        padding: 5,
        borderRadius: 2,
        backgroundColor: "#F4F4F4",
      }}
    >
      <img
        src={image}
        alt={description}
        style={{ width: 100, height: 100, marginBottom: 16 }}
      />
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          fontStyle: "bold",
          fontSize: { xs: "32px", sm: "40px", md: "50px" },
          lineHeight: { xs: "22px", sm: "30px", md: "40px" },
          letterSpacing: 0,
          textAlign: "center",
          textTransform: "uppercase",
          pt: 2,
          pb: 5,
          color: "#000000",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 400,
          fontStyle: "regular",
          fontSize: { xs: "14px", sm: "16px", md: "20px" },
          lineHeight: "100%",
          letterSpacing: 0,
          textAlign: "center",
          color: "#000000",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default Prizes;
