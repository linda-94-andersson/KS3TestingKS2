import React from "react";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { customRender } from "../test-utils";
import "@testing-library/jest-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

describe("Test chakra table", () => {
  it("Table render", () => {
    const tableData = "Test data";
    customRender(
      <TableContainer>
        <Table>
          <TableCaption>Testing</TableCaption>
          <Thead>
            <Tr>
              <Th>TestName</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{tableData}</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>TestName</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    );
    const tableScreen = screen.getByText(tableData);
    screen.debug();
    expect(tableScreen).toBeInTheDocument();
  });
});
