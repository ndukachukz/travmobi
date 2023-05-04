import React from "react";
import { Path } from "react-native-svg";
import { Input } from "@ui-kitten/components";

import {
  StyledSvg,
  StyledText,
  StyledView,
  StyledScrollView,
  TravelPlace,
  TravelPackage,
} from "../src/components";
import { SearchIconSvg } from "../src/assets";

const Index = () => {
  return (
    <StyledScrollView className="w-full" showsVerticalScrollIndicator={false}>
      <StyledText
        className="text-4xl capitalize font-bold mt-10 mb-8 text-gray-900"
        category="h1"
      >
        Take a {"\n"}trip to africa
      </StyledText>

      <StyledView className="flex flex-row justify-between items-center w-full">
        <Input
          style={{
            width: 256,
            borderRadius: 12,
            paddingVertical: 8,
          }}
          accessoryLeft={() => (
            <SearchIconSvg width={16} height={16} stroke={"#9e9e9e"} />
          )}
        />

        <StyledView className="bg-yellow-500 w-10 h-10 rounded-xl block flex items-center justify-center">
          <StyledSvg
            className="w-6 h-6 text-white cursor-pointer"
            stroke="#fff"
          >
            <Path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            ></Path>
            <Path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></Path>
          </StyledSvg>
        </StyledView>
      </StyledView>

      <TravelPlace />

      <TravelPackage />
    </StyledScrollView>
  );
};

export default Index;
