import {
    Box,
    Button,
    Flex,
    Image,
    SimpleGrid,
    Skeleton,
    Text,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import Navbar from "../components/Navbar";
  import { Sidebar } from "../components/Sidebar";
  import { MdEdit } from "react-icons/md";
  import { RiDeleteBin5Line } from "react-icons/ri";
  import "../styles/pagination.css";
  import ReactPaginate from "react-paginate";
  import { useSearchParams, Link } from "react-router-dom";
  import { useSelector } from "react-redux";
  function getPageFromUrl(value) {
    if (value <= 0 || value === undefined) {
      value = 1;
    }
    value = Number(value);
  
    return value;
  }
  function AddProducts() {
    const { data } = useSelector((store) => store.auth);
    const [searchParams, setSearchParam] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [data1, setData] = useState([
      {
        category: "air_compressor",
        title: "Air Compressor",
      },
      {
        category: "bathroom_accessories",
        title: "Bathroom Accessories",
      },
      {
        category: "commercial_accessories",
        title: "Commercial Accessories",
      },
      {
        category: "drain",
        title: "Drain",
      },
      {
        category: "faucet",
        title: "Faucet & its Accessories",
      },
      {
        category: "garden",
        title: "Garden Products",
      },
      {
        category: "grab_bar",
        title: "Grab Bar",
      },
      {
        category: "health_faucet",
        title: "Health Faucet & Jet Sets",
      },
      {
        category: "mirros",
        title: "Mirrors",
      },
      {
        category: "plumbing",
        title: "Plumbing Accessories",
      },
      {
        category: "residential",
        title: "Residential Accessories",
      },
      {
        category: "rope",
        title: "Rope Hook",
      },
      {
        category: "sanitary_ware",
        title: "Sanitary Ware Accessories",
      },
      {
        category: "shower",
        title: "Shower & Shower Arm",
      },
      {
        category: "special",
        title: "Special/Unique Products",
      },
      {
        category: "mirros",
        title: "Mirrors",
      },
      {
        category: "tile",
        title: "Tile Accessories",
      },
      {
        category: "toilet",
        title: "Toilet Paper Holder",
      },
      {
        category: "water_heater",
        title: "Water Heater (Geyser) Accessories",
      },
    ]);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Flex w="100%">
        <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Box
          w={["100%", "100%", "100%", "80%"]}
          ml={["0px", "0px", "0px", "20%"]}
          mb="60px"
        >
          <Navbar onOpen={onOpen} />
  
          <Box mt="30px" mb="50px">
            <SimpleGrid
              w="80%"
              m="auto"
              marginTop="40px"
              columns={["1", "2", "3", "4"]}
              spacing="15px"
            >
              {loading
                ? [1, 2, 3, 4, 5, 6, 7, 8].map((ele) => {
                    return (
                      <Box key={ele} borderRadius="10px" alignItems="center">
                        <Skeleton m="auto" width="100%" height="200px" />
                      </Box>
                    );
                  })
                : data1?.map((ele) => {
                    return (
                      <Box
                        key={ele._id}
                        borderRadius="10px"
                        alignItems="center"
                        cursor={"pointer"}
                        // onClick={() => handleBoxClick(ele.category)}
                        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                      >
                        <Box
                          bg="#ffd49f"
                          color="#c07700"
                          backgroundSize="100px 24px"
                          borderTopLeftRadius="4px"
                          p="2px 5px"
                          fontSize="15px"
                          borderRadius="10px 10px 0px 0px"
                          mb="10px"
                        >
                          {/* ₹ {ele.mrp}  ({Math.ceil(ele.quantity)}) */}
                        </Box>
                        <Flex
                          p="7px"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {/* <Image h="100px" maxW="100%" src={ele.img1} /> */}
                          <Text
                            noOfLines="1"
                            fontSize="12"
                            fontWeight="500"
                            mt="10px"
                            mb="12px"
                            textOverflow="ellipsis"
                          >
                            <Link to={`/addproduct/${ele.category}`}>
                              {ele.title}
                            </Link>
                          </Text>
                          <Flex gap="30px">
                            <Flex
                              alignItems="center"
                              justifyContent="center"
                              borderRadius="10px"
                              w="40px"
                              p="8px 3px"
                              color="green"
                            ></Flex>
                            {/* <Flex
                              alignItems="center"
                              justifyContent="center"
                              borderRadius="10px"
                              w="40px"
                              p="8px 3px"
                              color="red"
                            >
                              <RiDeleteBin5Line
                                onClick={() => deleteItem(ele._id)}
                                fontSize="20px"
                              />
                            </Flex> */}
                          </Flex>
                        </Flex>
                      </Box>
                    );
                  })}
            </SimpleGrid>
            <Box mb="80px" mt="50px">
              {/* <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          forcePage={page-1}
          breakLabel={"..."}
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={0}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        /> */}
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default AddProducts;
  