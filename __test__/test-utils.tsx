import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../src/context/UserContext";
import { TaskProvider } from "../src/context/TaskContext";
import { ProjectProvider } from "../src/context/ProjectContext";
import { TimeLogProvider } from "../src/context/TimelogContext";
import { InvoiceProvider } from "../src/context/InvoiceContext";

const AllTheProviders = ({ children }: Props) => {
  return (
    <ChakraProvider>
      <InvoiceProvider>
        <TaskProvider>
          <ProjectProvider>
            <TimeLogProvider>
              <UserProvider>{children}</UserProvider>
            </TimeLogProvider>
          </ProjectProvider>
        </TaskProvider>
      </InvoiceProvider>
    </ChakraProvider>
  );
};

export const customRender = (ui: any) =>
  render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from "@testing-library/react";

// override render method
// export { customRender as render };
