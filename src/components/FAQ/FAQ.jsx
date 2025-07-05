import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import FAQList from "../../assets/datas/FAQList";

function FAQ() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#F4F4F4",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
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
          justifyContent: "flex-start",
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
            py: 6,
            color: "#000000",
          }}
        >
          FAQ
        </Typography>

        {/* FAQ Accordion List */}
        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%" } }}>
          {FAQList.map((faq, idx) => (
            <Accordion key={idx} sx={{ mb: 1, borderRadius: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-content-${idx}`}
                id={`faq-header-${idx}`}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    frontFamily: "open Sans",
                    color: "#000000",
                    textAlign: "left",
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    frontFamily: "open Sans",
                    color: "#000000",
                    textAlign: "left",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FAQ;
