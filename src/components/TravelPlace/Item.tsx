import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import {
  StyledImage,
  StyledSvg,
  StyledText,
  StyledView,
} from "../StyledComponents";
import { Path } from "react-native-svg";

const TravelPlaceItem = () => {
  const { width, height } = useWindowDimensions();

  return (
    <StyledView
      className={`bg-white shadow-lg rounded-3xl pb-8`}
      style={{
        width: width / 2 - 32,
      }}
    >
      <StyledView className="p-2.5">
        <StyledImage
          source={{
            uri: "https://images.unsplash.com/photo-1488802484013-f23aca1e2d9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmxhbWluZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          }}
          className="rounded-2xl w-full h-32 object-cover shadow-lg"
        />
      </StyledView>

      <StyledView className="flex flex-row items-center justify-between px-3.5">
        <StyledView>
          <StyledText>Flamingo</StyledText>
          <StyledText className="text-sm text-gray-500 capitalize">
            south africa
          </StyledText>
        </StyledView>

        <StyledView className="bg-yellow-500 rounded-full w-6 h-6 flex flex-row justify-center items-center">
          <StyledSvg
            className="w-3.5 h-3.5 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></Path>
          </StyledSvg>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default TravelPlaceItem;
