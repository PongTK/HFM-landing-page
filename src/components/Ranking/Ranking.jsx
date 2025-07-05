import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Divider,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import trophy01 from "/trophy-01.png";
import trophy02 from "/trophy-02.png";
import trophy03 from "/trophy-03.png";
import goldenBelt from "/goldenBelt.png";

const traderList = [
  {
    name: "John Smith",
    id: "1234567890",
    gain: "16344%",
  },
  {
    name: "Alice Johnson",
    id: "9823746521",
    gain: "15200%",
  },
  {
    name: "Michael Lee",
    id: "5647382910",
    gain: "14050%",
  },
  {
    name: "Emily Davis",
    id: "8473629150",
    gain: "13200%",
  },
  {
    name: "David Kim",
    id: "2938475610",
    gain: "12500%",
  },
  {
    name: "Sophia Brown",
    id: "6758493021",
    gain: "11900%",
  },
  {
    name: "James Wilson",
    id: "3847561920",
    gain: "11200%",
  },
  {
    name: "Olivia Martinez",
    id: "9182736450",
    gain: "10500%",
  },
  {
    name: "William Anderson",
    id: "7362819450",
    gain: "9900%",
  },
  {
    name: "Isabella Thomas",
    id: "5647389201",
    gain: "9300%",
  },
  {
    name: "Benjamin Taylor",
    id: "8473621905",
    gain: "8700%",
  },
  {
    name: "Mia Moore",
    id: "1928374650",
    gain: "8100%",
  },
  {
    name: "Alexander Harris",
    id: "3748291056",
    gain: "7500%",
  },
];

function Ranking() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Top 3 traders for cards
  const top3 = traderList.slice(0, 3);
  // Next 10 for list
  const next10 = traderList.slice(3, 13);
  // All 13 for mobile
  const all13 = traderList.slice(0, 13);
  // Trophy images and prize
  const trophyImgs = [trophy01, trophy02, trophy03];
  const prizes = ["$10000", "$5000", "$2500"];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F4F4F4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        py: 6,
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
            fontFamily: "open Sans",
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
          Ranking
        </Typography>
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
            {/* 3 Cards */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1,
                gap: 2,
              }}
            >
              {top3.map((trader, idx) => (
                <RankingCard
                  key={trader.id}
                  rank={idx + 1}
                  name={trader.name}
                  id={trader.id}
                  gain={trader.gain}
                  trophy={trophyImgs[idx]}
                  belt={goldenBelt}
                  prize={prizes[idx]}
                />
              ))}
            </Box>

            {/* List 10 รายการ */}
            <Box
              sx={{
                flex: 1,
                minWidth: 320,
                maxWidth: 500,
                p: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  frontFamily: "open Sans",
                  fontWeight: 700,
                  fontStyle: "bold",
                  fontSize: "25px",
                  color: "#000000",
                  textAlign: "left",
                  mb: 10,
                }}
              >
                Aliquam lorem ant
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb: 1,
                  borderBottom: "2px solid #eee",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: "#CD0511",
                    textTransform: "uppercase",
                  }}
                >
                  Name
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: "#CD0511",
                    textTransform: "uppercase",
                  }}
                >
                  Gain
                </Typography>
              </Box>
              {next10.map((trader, idx) => (
                <Box key={trader.id}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontStyle: "Regular",
                        fontSize: "16px",
                        color: "#000000",
                      }}
                    >
                      {trader.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 700, color: "#000000" }}
                    >
                      {trader.gain}
                    </Typography>
                  </Box>
                  {idx !== next10.length - 1 && <Divider />}
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          // Mobile/tablet: list 13 รายการ
          <Box
            sx={{
              width: "100%",
              mt: 6,
              p: 2,
              maxWidth: 480,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                frontFamily: "open Sans",
                fontWeight: 700,
                fontStyle: "bold",
                fontSize: "25px",
                color: "#000000",
                textAlign: "center",
                mb: 10,
              }}
            >
              Aliquam lorem ant
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: 1,
                borderBottom: "2px solid #eee",
                px: 3,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  color: "#CD0511",
                  textTransform: "uppercase",
                }}
              >
                Name
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  color: "#CD0511",
                  textTransform: "uppercase",
                }}
              >
                Gain
              </Typography>
            </Box>
            {all13.map((trader, idx) => (
              <Box key={trader.id}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 3,
                    py: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontStyle: "Regular",
                        fontSize: "16px",
                        color: "#000000",
                      }}
                    >
                      {trader.name}
                    </Typography>
                    {idx < 3 && (
                      <img
                        src={[trophy01, trophy02, trophy03][idx]}
                        alt={`Trophy ${idx + 1}`}
                        style={{ width: 20, height: 20, marginLeft: 4 }}
                      />
                    )}
                  </Box>
                  <Typography
                    variant="body1"
                    color="success.main"
                    sx={{ fontWeight: 700, color: "#000000" }}
                  >
                    {trader.gain}
                  </Typography>
                </Box>
                {idx !== all13.length - 1 && <Divider />}
              </Box>
            ))}
          </Box>
        )}
        <Box
          sx={{
            mt: 6,
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

function RankingCard({ rank, name, id, gain, trophy, belt, prize }) {
  return (
    <Box
      id="ranking-card-wrapper"
      sx={{
        position: "relative",
        bgcolor: "#fff",
        borderRadius: 3,
        boxShadow: 2,
        px: 4,
        minWidth: 400,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 200,
        overflow: "visible",
      }}
    >
      {/* GoldenBelt (layer 2) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <img
          src={belt}
          alt="Golden Belt"
          style={{
            width: 100,
            height: 100,
          }}
        />
      </Box>

      {/* Prize (layer 3) */}
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: 52,
          right: 0,
          zIndex: 3,
          fontWeight: 400,
          color: "#ffffff",
          transform: "rotate(45deg)",
          transformOrigin: "right top",
        }}
      >
        {prize}
      </Typography>
      {/* Left Trophy */}
      <Box sx={{ mr: 2, flexShrink: 0 }}>
        <img
          src={trophy}
          alt={`Trophy ${rank}`}
          style={{ width: 96, height: 96 }}
        />
      </Box>
      {/* Center Info */}
      <Box sx={{ flex: 1, textAlign: "left" }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: "open Sans",
            fontWeight: 700,
            fontStyle: "bold",
            fontSize: "18px",
            lineHeight: "100%",
            pb: 2,
            background:
              "linear-gradient(90deg, #FCD678 0%, #FCD678 0.01%, #BC8C2F 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          JANUARY {rank} WINNER
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "open Sans",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
            mb: 0.5,
            color: "#000000",
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          {id}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "open Sans",
            fontWeight: 700,
            fontStyle: "bold",
            fontSize: "18px",
            lineHeight: "100%",
            pt: 2,
            color: "#000000",
          }}
        >
          TOTAL GAIN OF{" "}
          <Box component="span" sx={{ color: "red", fontWeight: 700 }}>
            {gain}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default Ranking;
