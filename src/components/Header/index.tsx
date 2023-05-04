import React from "react";
import { Path } from "react-native-svg";
import {
  StyledImage,
  StyledText,
  StyledView,
  StyledSvg,
} from "../StyledComponents";
import { MapPinSvg, MenuSvg } from "../../assets";
import { styled } from "nativewind";

const StyledMenuSvg = styled(MenuSvg);
const StyledMapPinSvg = styled(MapPinSvg);

const Header = () => {
  return (
    <StyledView className="flex flex-row items-center justify-between ">
      <StyledView className="bg-white shadow-md w-10 h-10 block rounded-full flex-row justify-center items-center">
        <StyledMenuSvg
          className="w-6 h-6 text-yellow-500 cursor-pointer"
          width={24}
          height={24}
        />
      </StyledView>

      <StyledView className="text-center">
        <StyledText className="capitalize text-gray-500 text-sm">
          hallo fadilah
        </StyledText>
        <StyledText className="flex flex-row items-center text-sm font-semibold">
          <MapPinSvg fill="none" stroke={"#2196f3"} width={16} height={16} />
          Jakarta, INA
        </StyledText>
      </StyledView>

      <StyledImage
        source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
        className="rounded-full w-10 h-10"
      />
    </StyledView>
  );
};

export default Header;
