import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is Taloc?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Taloc is a real estate development/ tech company operating out of California that specializes in providing high quality, affordbale housing.
            We are the first to offer our homes for purchase using crpyto, 100% on the blockchain. 
            The organization also acts as trust, holding different crypto assets in its portfolio. There is a native Taloc Coin for purchase. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How does it work? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Taloc will build your dream home and list it on our app marketplace. At this point Taloc is the owner of the property. 
            Once you see a property you like, you have the option to inspect it and once ready to buy, you initiate the escrow on our app, depositing the purchase price worth in crypto. 
            This all takes place on Taloc's dedicated public blockchain ledger.
            The escrow process is relatively quick compared to traditional real estate. The sole purpose of the escrow is to hold the funds until the title is transfered to your name.
            Once transfered, the funds are sent directly to Taloc, and you are issued a physical deed along with a digital version on the blockchain in the form of an NFT 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Do you follow traditional real estate processes? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Taloc is revolutionizing the real estate indsutry, so we do things differently. 
            Becuase the escrow process is handled through smart contracts automatically on the blockchain, 
            There is no need for intermediaries, closing cost, real estate agents, escrow fee's etc. 
            We cut out all the middle men and save you money! 
            The only manual task involves registering a physical title transfer from Taloc to the new buyer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I re-sell the property on the blockchain to someone else? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            That is our plan, we are working on adding a selling feature for a future release. 
            For our pilot, we are only focusing on the buying portion.
            The goal is to soon allow people 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are the risk ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Since we do not follow the traditional real estate process of contigencies, valuations, contracts and inspections, the property is sold as is.
            It is up to you to make an informed decision when visiting the property in person.
            Once the escrow is opened up, those funds are locked in and cannot be returned, unless there is an issue with the title transfer.
            In which case, we will return 100% of the crypto funds to your wallet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;