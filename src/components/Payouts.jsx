import {
  Box,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Triangle from "../images/table/Triangle.png";
import dot1 from "../images/table/dot1.png";
import dot2 from "../images/table/dot2.png";
import styled from "styled-components";

const Payouts = () => {
  const data = [
    {
      image: dot1,
      status: "Processing",
      id: 131634495747,
      amount: "₹10,125.00",
      fees: "₹1,125.00",
      total: "₹9,312",
    },
    {
      image: dot2,
      status: "Successful",
      id: 131634495747,
      amount: "₹10,125.00",
      fees: "₹1,125.00",
      total: "₹9,312",
    },
    {
      image: dot2,
      status: "Successful",
      id: 131634495747,
      amount: "₹10,125.00",
      fees: "₹1,125.00",
      total: "₹9,312",
    },
    {
      image: dot2,
      status: "Successful",
      id: 131634495747,
      amount: "₹10,125.00",
      fees: "₹1,125.00",
      total: "₹9,312",
    },
    {
      image: dot2,
      status: "Successful",
      id: 131634495747,
      amount: "₹10,125.00",
      fees: "₹1,125.00",
      total: "₹9,312",
    },
    {
      image: dot2,
      status: "Successful",
      id: 131634495747,
      amount: "₹10,125.00",
      fees: "₹1,125.00",
      total: "₹9,312",
    },
    {
      image: dot2,
      status: "Successful",
      id: 131634495747,
      amount: "₹10,125.00",
      fees: "₹1,125.00",
      total: "₹9,312",
    },
  ];
  return (
    <DIV>
      <Table>
        <Thead>
          <Th>
            <Image src={Triangle} />
          </Th>
          <th>Transaction ID</th>
          <th>Order amount</th>
          <th>Transaction fees</th>
          <th>Total</th>
        </Thead>
        <Tbody>
          {data.map((el) => (
            <Tr key={el.id}>
              <Td
                pl={"200px"}
                display={"flex"}
                alignItems={"center"}
                color={"#1a181e"}
              >
                <Box pr={"5px"}>
                  <Image src={el.image} />
                </Box>
                <Text color={"#1a181e"} fontFamily={"Inter"}>
                  {el.status}
                </Text>
              </Td>
              <Td color={"#4D4D4D"} fontFamily={"Galano Grotesque"}>
                {el.id}
              </Td>
              <Td color={"#1a181e"} fontFamily={"Galano Grotesque"}>
                {el.amount}
              </Td>
              <Td color={"#1a181e"} fontFamily={"Galano Grotesque"}>
                {el.fees}
              </Td>
              <Td color={"#1a181e"} fontFamily={"Galano Grotesque"}>
                {el.total}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </DIV>
  );
};

export default Payouts;

const DIV = styled.div`
  th {
    color: var(--Black-30, #4d4d4d);
    text-align: right;
    padding: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
  thead {
    border-radius: 4px;
    background: var(--Black-95, #f2f2f2);
    padding: 10px var(--Spacing-spacing-05, 12px);
  }
  th {
    text-align: center;
  }
  td {
    text-align: center;
    /* Body 2 / Regular */
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;
