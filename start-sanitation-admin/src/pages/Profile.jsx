import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";

let initState = {
  title: "",
  mrp: "",
  quantity: "",
  ancestor: [],
  brand: "",
  img1: "",
  img2: "",
  img3: "",
  strike: "",
};
function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data1, setData] = useState(initState);

  const [key, setKey] = useState();
  const [loading, setLoading] = useState(false);
  const { data } = useSelector((store) => store.auth);
  const toast = useToast();
  const { id } = useParams();
  const keysOnlyRef = useRef([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "ancestor") {
      setData({ ...data1, [name]: value.split(",") });
    } else if (name !== "ancestor") {
      setData({ ...data1, [name]: value });
    }
  };

  const handleUpdateObject = async () => {
    setLoading(true);
    const res = await axios.post(
      `https://viking-master.onrender.com/product/${id}`,
      data1,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setLoading(false);
    if (res.data.status) {
      toast({
        title: "Posted Success",
        description: "Product is posted successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Posted Error",
        description: "Something went wrong try again !",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const filterKeys = (obj) => {
          if(Object.keys(obj).length > 0){
            const { _id, __v, ...filteredKeys } = obj;
            return filteredKeys;

          }
        };
        let res = await axios
          .get(`https://viking-master.onrender.com/product/${id}`)
          .finally(() => {
            setLoading(false);
          });
        // if (key) {
    const filteredData = filterKeys(res.data.data?.[0] || {});
    const newKeysOnly = Object.keys(filteredData);
    keysOnlyRef.current = newKeysOnly;

        // handleFilterKeys();
      } catch (error) {
        console.log({ e: error });
      }
    }
    getData();
  }, []);

  // const handleFilterKeys = () => {
   

   
    // renderInputGroups();
  // };

   // Function to render InputGroup components based on keys
   const renderInputGroups = () => {
    return 
  };


  return (
    <Flex w="100%">
      <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box
        w={["100%", "100%", "100%", "80%"]}
        ml={["0px", "0px", "0px", "20%"]}
        mb="60px"
      >
        <Navbar onOpen={onOpen} />
        <Box w="90%" m="auto">
          <Box m="auto" mt="50px" w={["100%", "80%", "60%", "50%"]}>
          {keysOnlyRef.current?.map((key, index) => (
      <InputGroup mt="5px" key={index}>
        <InputLeftAddon
          borderColor="green"
          bg="green"
          color="white"
          fontWeight="500"
          w="30%"
          children={key}
        />
        <Input
          borderColor="green"
          fontSize="13px"
          fontWeight="400"
          focusBorderColor="white"
          type="text"
          value={data1[key]}
          name={key}
          onChange={handleChange}
        />
      </InputGroup>
    ))}


            <Flex
              onClick={handleUpdateObject}
              mt="15px"
              fontWeight="600"
              gap="10px"
              bg="green"
              color="white"
              borderRadius="5px"
              cursor={"pointer"}
              p="10px"
              alignItems="center"
              justifyContent="center"
            >
              <Text>Save</Text>{" "}
              <MdOutlineSecurityUpdate fontWeight="600" color="white" />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Profile;
