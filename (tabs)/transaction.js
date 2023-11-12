import { Center, Heading, Box, Text, Image, HStack, VStack, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../../components";

const Transaction = () => {
  return (
    <>
      <Header title={"CineSkuy"} />
      <ScrollView>
      <Center paddingTop={"$2"} paddingHorizontal={"$4.5"}>
        <Heading fontSize={"$lg"}>List Ticket</Heading>
        <Box width={"$full"} height={"$40"} borderRadius={"$3xl"} marginBottom={"$3.5"} bg="$trueGray900">
        <VStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Film</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Kage no jitsuryokusha</Heading>
          </HStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Genre</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Action, Horror</Heading>
          </HStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Studio</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">2</Heading>
          </HStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Day</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Monday, 15 Oct 14:50</Heading>
          </HStack>
        </VStack>
        </Box>
        <Box width={"$full"} height={"$40"} borderRadius={"$3xl"} marginBottom={"$3.5"} bg="$trueGray900">
        <VStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Film</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Avanger</Heading>
          </HStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Genre</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Action</Heading>
          </HStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Studio</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">4</Heading>
          </HStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Day</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Sunday, 23 Oct 14:00</Heading>
          </HStack>
        </VStack>
        </Box>
        <Box width={"$full"} height={"$40"} borderRadius={"$3xl"} marginBottom={"$3.5"} bg="$trueGray900">
        <VStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Film</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Itaewon Class</Heading>
          </HStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Genre</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Romance</Heading>
          </HStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Studio</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">1</Heading>
          </HStack>
          <HStack>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Day</Heading>
            <Heading fontSize={"$md"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">:</Heading>
            <Heading fontSize={"$sm"} marginLeft={"$3.5"} marginTop={"$1"} color="#FFC300">Friday, 28 Oct 10:00</Heading>
          </HStack>
        </VStack>
        </Box>
      </Center>
      </ScrollView>
    </>
  );
};

export default Transaction;