import React from 'react';
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

import heroImg from "../media/hero-section-illustration.png";
import Navbar from './navBar/Navbar';

const FooterContent = [
  "ABOUT", "THE COMPANY", "THE TEAM", "THE SHAREHOLDERS", "THE OPERATING UNITS",
  "INITIATIVES", "MEMBERSHIPS", "PARTNERSHIPS", "PROJECTS", "SERVICES", "PUBLICATIONS",
  "CONVERGENCE", "SKOPE", "EVENTS", "ICSET", "TECHATHLON", "PAATSHALA", "FAQ",
  "CHANNELS", "ARCHIVES", "CAREERS", "INTERNSHIPS", "PRIVACY POLICY", "PROGRAM TERMS"
];

const ContactInfo = [
  "+91 75 940 51437", "info@ictkerala.org", "\\ictkerala", "Head Quarters",
  "G1, Ground Floor, Thejaswini, Technopark Campus", "Thiruvananthapuram, Kerala, India - 695 581",
  "Office: +91 471 270 0811", "Regional Centre (North)", "2nd Floor, UL Cyberpark Building, Nellikode Post",
  "Kozhikode, Kerala, India - 673 016", "Regional Centre (Central)", "B-Wing, Kanikonna Villa, Infopark Campus",
  "Koratty, Thrissur, Kerala, India - 680 308"
];

const Main = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
        <Container>
          <Navbar />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginTop: 3,
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box sx={{ flex: "1" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 5,
                  mb: 4,
                }}
              >
                Welcome to ICTAK Internship Portal
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "40px", sm: "64px" },
                  color: "#000336",
                  fontWeight: "bold",
                  margin: "32px 0",
                }}
              >
                Build your Career with ICTAK <br />
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", mb: 4, textAlign: "justify" }}
              >
                ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.
              </Typography>
            </Box>

            <Box sx={{ flex: "1.25" }}>
              <img
                src={heroImg}
                alt="heroImg"
                style={{ maxWidth: "100%", marginBottom: "30px", marginTop: "60px" }}
              />
            </Box>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              padding: "20px",
              backgroundColor: "#fff",
              color: "#000",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {FooterContent.map((section, index) => (
              <Typography key={index} variant="body1" sx={{ flex: "0 0 33.333%", textAlign: "center", py: 1 }}>
                {section}
              </Typography>
            ))}
          </Box>

          {/* Contact Information */}
          <Box
            sx={{
              padding: "20px",
              backgroundColor: "#fff",
              color: "#000",
              textAlign: "center",
              mt: 3,
            }}
          >
            {ContactInfo.map((info, index) => (
              <Typography key={index} variant="body2" sx={{ display: "block", py: 1 }}>
                {info}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Main;
