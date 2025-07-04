import { useState } from "react";
import {
  Paper,
  Box,
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

import countries from "../../assets/datas/Countries";
import experiences from "../../assets/datas/Experiences";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState(countries[0].name);
  const [countryCode, setCountryCode] = useState(countries[0].code);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");

  const handleCountryChange = (e) => {
    const selected = countries.find((c) => c.name === e.target.value);
    setCountry(selected.name);
    setCountryCode(selected.code);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Name:", firstName, lastName);
    console.log("Submitted Email:", email);
    console.log("Submitted Phone:", phone);
    console.log("Submitted Country:", country);
    console.log("Submitted Experience:", experience);

    alert(`Welcome to HFM, ${firstName} ${lastName}!`);

    // Clear form after submission
    setFirstName("");
    setLastName("");
    setCountry(countries[0].name);
    setCountryCode(countries[0].code);
    setPhone("");
    setEmail("");
    setExperience("");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        bgcolor: "#ffffff",
        maxWidth: 600,
        mt: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} size={6}>
            <TextField
              required
              label="First Name"
              variant="outlined"
              size="small"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6} size={6}>
            <TextField
              required
              label="Last Name"
              variant="outlined"
              size="small"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6} size={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Country</InputLabel>
              <Select
                value={country}
                label="Country"
                onChange={handleCountryChange}
              >
                {countries.map((c) => (
                  <MenuItem key={c.name} value={c.name}>
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} size={6}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                label="Code"
                size="small"
                value={countryCode}
                readOnly={true}
                sx={{ width: 100 }}
              />
              <TextField
                required
                label="Phone"
                type="tel"
                variant="outlined"
                size="small"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} size={6}>
            <TextField
              required
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6} size={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Experience</InputLabel>
              <Select
                required
                value={experience}
                label="Experience"
                onChange={(e) => setExperience(e.target.value)}
              >
                {experiences.map((exp) => (
                  <MenuItem key={exp} value={exp}>
                    {exp}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ mt: 2, mb: 1, display: "flex", justifyContent: "flex-start" }}
        >
          <FormControl required sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                type="checkbox"
                id="acceptTerms"
                required
                style={{
                  marginRight: 8,
                  accentColor: "#fff",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  width: 18,
                  height: 18,
                }}
              />
              <label
                htmlFor="acceptTerms"
                style={{ fontSize: 14, textAlign: "left" }}
              >
                I have read and accepted the <a href="#">Privacy Policy</a> and{" "}
                <a href="#">Terms and Conditions</a>
              </label>
            </Box>
          </FormControl>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#179149",
            mt: 2,
            width: "50%",
            "&:hover": { backgroundColor: "#137a3a" },
          }}
        >
          Join now
        </Button>
      </Box>
    </Paper>
  );
}

export default RegisterForm;
