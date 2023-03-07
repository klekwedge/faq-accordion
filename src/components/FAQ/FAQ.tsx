import {
  Flex,
  Image,
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import data from '../../data';

function FAQ() {
  return (
    <Flex p="20px" background="white" borderRadius="10px">
      {/* <Image/> */}
      <Flex flexDirection="column">
        <Heading mb="20px" as='h1' fontSize='20px' fontWeight='700'>FAQ</Heading>
        <Accordion allowToggle>
          {data.map((item) => (
            <AccordionItem key={uuidv4()} mb="10px" maxW="300px">
              <Heading mb="5px">
                <AccordionButton
                  background="transparent"
                  _expanded={{ color: 'hsl(237, 12%, 33%)' }}
                  color="hsl(240, 6%, 50%)"
                >
                  <Box as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon color="#f47b54" />
                </AccordionButton>
              </Heading>
              <AccordionPanel>{item.desc}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default FAQ;
