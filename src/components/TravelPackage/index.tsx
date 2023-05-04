import React from "react";
import { StyledScrollView, StyledText, StyledView } from "../StyledComponents";
import TravelPackageItem from "./Item";
import SectionTitle from "../SectionTitle";

const TravelPackage = () => {
  return (
    <StyledView className="mt-8">
      <SectionTitle
        title="travel package"
        actionName="see more"
        actionCb={() => {}}
      />

      <StyledScrollView
        className="flex gap-4 my-6 ml-0 py-2 bg-inherit"
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
      >
        <TravelPackageItem />
        <TravelPackageItem />
        <TravelPackageItem />
        <TravelPackageItem />
      </StyledScrollView>
    </StyledView>
  );
};

export default TravelPackage;
