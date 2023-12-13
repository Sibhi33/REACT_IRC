import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { Box, Typography, colors } from "@mui/material";
const Footer = () => {
  return (
    <>
    <div className="foot">
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <h2 className="ping">Ping us via:</h2>
          {/* icons */}
          <a href="https://www.instagram.com/"><InstagramIcon /></a>
          <a href="https://twitter.com/"><TwitterIcon /></a>
          <a href="https://www.youtube.com/"><YouTubeIcon /></a>
          <a href="https://www.whatsapp.com/"><WhatsappIcon /></a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          cooked by SIBHI_K
        </Typography>
      </Box>
      </div>
    </>
  );
};

export default Footer;
