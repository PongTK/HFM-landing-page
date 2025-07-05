import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import socialMediaLogo from "/socialMediaLogo.png";
import appstore from "/appstore.png";
import googleplay from "/googleplay.png";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        maxWidth: "100%",
        minHeight: "20vh",
        backgroundColor: "#161616",
        color: "#fff",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 6, md: 10 },
        py: 6,
        gap: 6,
      }}
    >
      {/* Left Box */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mb: isMobile ? 4 : 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, ml: 2 }}>
          Find us on
        </Typography>
        <Box>
          <img
            src={socialMediaLogo}
            alt="Social Media"
            style={{ height: 40 }}
          />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, ml: 2 }}>
          Download HFM App
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", ml: 2, gap: 1 }}>
          <img src={appstore} alt="App Store" style={{ height: 40 }} />
          <img src={googleplay} alt="Google Play" style={{ height: 40 }} />
        </Box>
      </Box>

      {/* Right Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "left",
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "left",
            mb: 1,
          }}
        >
          Risk Warning
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#ffffff",
            fontSize: { xs: "6px", sm: "8px", md: "10px" },
            lineHeight: 1.8,
            opacity: 0.8,
            textAlign: "left",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pLorem ipsum dolor sit
          amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
          enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu p
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
