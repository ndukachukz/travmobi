import React from "react";
import { StyledText, StyledView } from "../StyledComponents";

const SectionTitle = ({
  title,
  actionName,
  actionCb,
}: {
  title: string;
  actionName: string;
  actionCb?: () => void;
}) => {
  return (
    <StyledView className="flex flex-row items-baseline justify-between">
      <StyledText className="capitalize text-gray-900 font-bold" category="h1">
        {title}
      </StyledText>
      <StyledText
        className="text-gray-500 hover:underline text-xs"
        category="c2"
        onPress={actionCb}
      >
        {actionName}
      </StyledText>
    </StyledView>
  );
};

export default SectionTitle;
