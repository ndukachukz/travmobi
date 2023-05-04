import React from "react";
import {
  StyledImage,
  StyledSvg,
  StyledText,
  StyledView,
} from "../StyledComponents";
import { Path } from "react-native-svg";

export default function TravelPackageItem() {
  return (
    <StyledView className="bg-white shadow-lg rounded-xl p-2.5 mr-2">
      <StyledView className="flex flex-row items-center justify-between">
        <StyledImage
          source={{
            uri: "https://images.unsplash.com/photo-1615380100633-c0bcc60b7686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1012&q=80",
          }}
          className="rounded-2xl w-20 h-24 object-cover shadow-lg"
        />
        <StyledView>
          <StyledView className="pl-4 pr-2.5">
            <StyledText className="font-semibold">Mesir</StyledText>
            <StyledText className="text-sm text-gray-500 capitalize">
              Pyramid, Cairo
            </StyledText>

            <StyledView className="flex flex-row items-center mt-5 w-44">
              <StyledSvg
                className="w-3 h-3 text-yellow-500"
                fill="#f59e0b"
                stroke="currentColor"
                viewBox="0 0 24 24"
                // xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></Path>
              </StyledSvg>
              <StyledText className="text-gray-500 text-xs mx-2.5">
                4.5
              </StyledText>
              <StyledText /* href="#" */ className="text-blue-500 text-xs">
                See details
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
