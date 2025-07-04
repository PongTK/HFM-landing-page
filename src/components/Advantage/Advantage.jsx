import {
  Box,
  Typography,
  Container,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import mobilePhoneFrame from "/mobilePhoneFrame.png";
import candlestickChart from "/candlestickChart.png";
import profileAccount from "/profileAccount.png";
import deposit from "/deposit.png";

const advantageList = [
  {
    image: profileAccount,
    description: "Your funds are safe with us.",
  },
  {
    image: deposit,
    description: "Deposit funds quickly and easily.",
  },
  {
    image: candlestickChart,
    description: "Analyze with advanced tools.",
  },
  {
    image: profileAccount,
    description: "Your funds are safe with us.",
  },
];

function Advantage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Split advantageList for desktop layout
  const leftList = advantageList.slice(0, 2);
  const rightList = advantageList.slice(2, 4);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#F4F4F4",
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
          justifyContent: "flex-end",
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
          Advantages of Trading with HFM
        </Typography>

        {/* Responsive layout */}
        {!isMobile ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mt: 6,
              gap: 6,
            }}
          >
            {/* Left advantages */}
            <Stack spacing={4} sx={{ flex: 1, alignItems: "flex-end" }}>
              {leftList.map((item, idx) => (
                <AdvantageCard key={idx} {...item} align="center" />
              ))}
            </Stack>

            {/* Center phone frame */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img
                src={mobilePhoneFrame}
                alt="Mobile Phone Frame"
                style={{ maxHeight: 880, width: "auto", maxWidth: 530 }}
              />
            </Box>

            {/* Right advantages */}
            <Stack spacing={4} sx={{ flex: 1, alignItems: "flex-start" }}>
              {rightList.map((item, idx) => (
                <AdvantageCard key={idx} {...item} align="center" />
              ))}
            </Stack>
          </Box>
        ) : (
          <Stack spacing={4} sx={{ width: "100%", mt: 4 }}>
            {advantageList.map((item, idx) => (
              <AdvantageCard key={idx} {...item} align="center" />
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}

// Card for each advantage
function AdvantageCard({ image, description, align }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: align,
        textAlign: align,
      }}
    >
      <img
        src={image}
        alt={description}
        style={{ width: 100, height: 100, marginBottom: 16 }}
      />
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}

export default Advantage;
