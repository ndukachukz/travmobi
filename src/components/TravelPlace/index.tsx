import React from "react";

import { StyledText, StyledView } from "../StyledComponents";
import TravelPlaceItem from "./Item";
import SectionTitle from "../SectionTitle";

const TravelPlace = () => {
  return (
    <StyledView className="mt-8">
      <SectionTitle
        title="travel place"
        actionName="see more"
        actionCb={() => {}}
      />

      <StyledView className="flex flex-row gap-4 my-6 ml-0 justify-between">
        <TravelPlaceItem />
        <TravelPlaceItem />
      </StyledView>
    </StyledView>
  );
};

export default TravelPlace;
