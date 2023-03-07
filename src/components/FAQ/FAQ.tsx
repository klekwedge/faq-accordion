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
    <Flex p="20px" background="white" borderRadius="10px" gap="30px" flexWrap="wrap" justifyContent="center">
      <Flex position="relative">
        <Image
          src="/public/images/illustration-woman-online-desktop.svg"
          position="relative"
          w="300px"
          top="50%"
          left="-50px"
          transform="translateY(-50%)"
        />
        <Image
          src="/public/images/bg-pattern-desktop.svg"
          w="300px"
          position="absolute"
          top="55%"
          left="-50px"
          transform="translateY(-55%)"
        />
        <Image
          src="/public/images/illustration-box-desktop.svg"
          w="130px"
          position="absolute"
          top="80px"
          left="-80px"
        />
      </Flex>
      <Flex flexDirection="column">
        <Heading mb="20px" as="h1" fontSize="20px" fontWeight="700">
          FAQ
        </Heading>
        <Accordion allowToggle>
          {data.map((item) => (
            <AccordionItem key={uuidv4()} mb="10px" w="270px">
              <Heading mb="5px" as="h2">
                <AccordionButton
                  background="transparent"
                  _expanded={{ color: 'hsl(237, 12%, 33%)', fontWeight: 700 }}
                  color="hsl(240, 6%, 50%)"
                >
                  <Box as="span" flex="1" textAlign="left" fontSize="12px">
                    {item.title}
                  </Box>
                  <AccordionIcon color="#f47b54" />
                </AccordionButton>
              </Heading>
              <AccordionPanel fontSize="12px">{item.desc}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default FAQ;
