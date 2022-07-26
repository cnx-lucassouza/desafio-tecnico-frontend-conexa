import { FunctionComponent } from "react";

import { EmptyStateContainer } from "./styles";
import { NoAttendanceProps } from "./types";

export const NoAttendance: FunctionComponent<NoAttendanceProps> = ({ children }) => {
  return (
    <EmptyStateContainer>
      <p>{children}</p>
    </EmptyStateContainer>
  );
};
