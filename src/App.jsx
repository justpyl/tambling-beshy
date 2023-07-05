import { Flex, Stack, HStack, Input, Text, useToast, Toast } from '@chakra-ui/react'
import './App.css'
import { useState } from 'react';
import ColorModeComponent from './components/ColorModeComponent';
import CardComponent from './components/CardComponent';

function App() {
  
  const [text, setText] = useState("");
  const toast = useToast();
  
  const generateText = () => {
    const trimmedText = text.trim();
    if(trimmedText.length > 0){
      const replacedValue = trimmedText.replace(/\s+/g, " ");
      const newValue = replacedValue.replace(/\s/g, "🤸");
      setText(newValue);
      return newValue;
    }else{
      setText(trimmedText);
    }
  }

  const copyText = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    toast({
      title: "🤸Tamgbling🤸Beshy🤸",
      description: "🤸Na🤸Copy🤸na🤸Beshy",
      status: "success",
      duration: 3000,
      isClosable: false,
    })
  }

  return (
    <>
     <Flex height={"100vh"} width={"100%"} alignItems={"center"} justifyContent={"center"}>
      <Stack>
        <Text fontSize={{base: "4xl", md: "4xl", lg: "6xl"}} fontFamily={"shirkhand, cursive"}>
          🤸 Why 🤸 Naman 🤸 Beshy🤸
        </Text>
        <HStack>
          <Input placeholder='Enter ka Beshy' onChange={(event) => setText(event.target.value)} />
          <ColorModeComponent />
        </HStack>
        {text.length > 0 &&  <CardComponent  text={text} generateText={generateText} copyText={copyText} />}
       
      </Stack>
     </Flex>
    </>
  )
}

export default App
