import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "12px" }}>
            Can I enroll in multiple courses at once?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! You can enroll in multiple courses simultaneously and
            access them at your convenience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ fontSize: "12px" }}>
            Can I enroll in multiple courses at once?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! You can enroll in multiple courses simultaneously and
            access them at your convenience.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
