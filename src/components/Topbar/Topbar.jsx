import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  Link,
  Tooltip,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/StayPrimaryPortrait";

import hfmLogo from "/hfm_logo.svg";
import ENFlag from "/en-flag.svg";

const menuItems = [
  "Markets",
  "Trading",
  "Investing",
  "Tools & Education",
  "Company",
];

function Topbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [showTopbar, setShowTopbar] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTopbarMobile = useMediaQuery(theme.breakpoints.down("md")); // topbar display only for desktop

  // Hide topbar on scroll (desktop only)
  useEffect(() => {
    if (!isTopbarMobile) {
      let lastScroll = window.scrollY;
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        setShowTopbar(currentScroll < 10);
        lastScroll = currentScroll;
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowTopbar(false);
    }
  }, [isTopbarMobile]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Top info bar right group for desktop
  const topbarRight = (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button
        variant="outlined"
        color="inherit"
        size="small"
        startIcon={<PhoneIcon />}
        sx={{ textTransform: "none" }}
      >
        Download App
      </Button>
      <Link
        href="#"
        underline="hover"
        color="inherit"
        sx={{ fontSize: 14, mx: 1 }}
      >
        Contact Us
      </Link>
      <Link
        href="#"
        underline="hover"
        color="inherit"
        sx={{ fontSize: 14, mx: 1 }}
      >
        Partner with Us
      </Link>
      <Tooltip title={language === "EN" ? "English" : "ไทย"}>
        <IconButton
          size="small"
          sx={{ ml: 1 }}
          onClick={() => setLanguage(language === "EN" ? "TH" : "EN")}
        >
          <img src={ENFlag} alt="EN" style={{ width: 22, height: 16 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );

  // Mobile drawer items
  const mobileDrawer = (
    <Box
      sx={{ bgcolor: "#161616", color: "#fff", width: "100vw" }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <List>
        {menuItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button variant="outlined" color="error" fullWidth sx={{ mb: 1 }}>
            Login
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="contained" color="success" fullWidth>
            Register
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  // Drawer for desktop (not used, but keep for clarity)
  const drawer = null;
  return (
    <>
      {/* Top info bar: diaplay only for desktop */}
      {!isTopbarMobile && (
        <AppBar
          position="relative"
          elevation={0}
          sx={{
            bgcolor: "#161616",
            color: "#fff",
            height: 36,
            minHeight: 0,
            zIndex: (theme) => theme.zIndex.appBar + 1,
          }}
        >
          <Toolbar
            sx={{
              minHeight: 36,
              px: { xs: 1, sm: 2, md: 10 },
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: 500, fontSize: 14 }}
            >
              Member of HF Markets Group
            </Typography>
            {topbarRight}
          </Toolbar>
        </AppBar>
      )}
      {/* Main navbar */}
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          bgcolor: "#161616",
          color: "#fff",
          height: 100,
          top: showTopbar && !isTopbarMobile ? 36 : 0,
          transition: "top 0.2s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, sm: 2, md: 10 },
            height: 100,
            justifyContent: "space-between",
          }}
        >
          {/* Logo and menu (left) */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={hfmLogo}
              alt="HFM Logo"
              style={{ height: 48, marginRight: 32 }}
            />

            {/* Desktop menu */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    variant={"text"}
                    key={item}
                    color="inherit"
                    sx={{ fontWeight: 300, fontSize: 13, minWidth: 0 }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            )}
          </Box>

          {/* Right side: responsive logic */}
          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="outlined"
                color="error"
                size="small"
                sx={{ minWidth: 70 }}
              >
                Login
              </Button>
              <Tooltip title={language === "EN" ? "English" : "ไทย"}>
                <IconButton
                  size="small"
                  sx={{ ml: 1 }}
                  onClick={() => setLanguage(language === "EN" ? "TH" : "EN")}
                >
                  <img
                    src={ENFlag}
                    alt="EN"
                    style={{ width: 22, height: 16 }}
                  />
                </IconButton>
              </Tooltip>
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button variant="outlined" color="error">
                Login
              </Button>
              <Button variant="contained" color="success">
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
        {/* Hamburger Drawer for mobile/tablet */}
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {mobileDrawer}
        </Drawer>
      </AppBar>
      {/* Spacer for fixed bars */}
      <Box sx={{ height: /* showTopbar && */ !isTopbarMobile ? 76 : 56 }} />
    </>
  );
}

export default Topbar;
