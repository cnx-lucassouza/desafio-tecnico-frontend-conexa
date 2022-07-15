import { FC } from "react";

import { EmptyStateContainer } from "./styles";
import { NoAttendanceProps } from "./types";

export const NoAttendance: FC<NoAttendanceProps> = ({ children }) => {
  return (
    <EmptyStateContainer>
      <p>{children}</p>
    </EmptyStateContainer>
  );
};
