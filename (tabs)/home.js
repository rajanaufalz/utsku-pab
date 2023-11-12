import { Heading, Center, FlatList, Box, Text, Image, HStack, VStack, ScrollView, Input, FormControl, InputField, Button  } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { Link } from "expo-router";

const Home = () => {
  
  return (
    <>
      <Header title={"CineSkuy"} />
      <ScrollView>
      <Center paddingTop={"$2"} paddingHorizontal={"$4.5"}>
        <Heading fontSize={"$lg"} paddingBottom={"$4.5"}>Form Order</Heading>
        <Box width={"$full"} height={"$96"} borderRadius={"$3xl"} marginBottom={"$3.5"} bg="$white" shadowColor="$black" shadowOpacity={"$20"}>
        <VStack>
        <FormControl width={"$72"} marginLeft={"$4.5"}>
            <Heading fontSize={"$md"}>Name</Heading>
            <Input >
              <InputField />
            </Input>
        </FormControl>
        <FormControl width={"$72"} marginLeft={"$4.5"}>
            <Heading fontSize={"$md"}>Email</Heading>
            <Input >
              <InputField />
            </Input>
        </FormControl>
        <FormControl width={"$72"} marginLeft={"$4.5"}>
            <Heading fontSize={"$md"}>No. Telp</Heading>
            <Input >
              <InputField />
            </Input>
        </FormControl>
        <FormControl width={"$72"} marginLeft={"$4.5"}>
            <Heading fontSize={"$md"}>Total Tiket</Heading>
            <Input >
              <InputField />
            </Input>
        </FormControl>
        <Center>
          <Button size="sm" width={"$48"} marginTop={"$8"} backgroundColor={"$black"}> 
            <Text color="$yellow">Payment</Text>
          </Button>
        </Center>
        </VStack>
        </Box>
      </Center>
      </ScrollView>
    </>
  );
};

export default Home;