import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import {
  StyledButton,
  StyledImage,
  StyledScrollView,
  StyledSvg,
  StyledText,
  StyledView,
} from "../../src/components";
import { Path } from "react-native-svg";
import { useRouter, useSearchParams } from "expo-router";
import { placeItems } from "../../src/components/TravelPlace";
import { packages } from "../../src/components/TravelPackage";
import { ListingItemType } from "../../src/types";
import { SharedElement, nodeFromRef } from "react-native-shared-element";
import { SharedElementTransitionCtx } from "../../src/context";
import { MapPinSvg } from "../../src/assets";
import { StyledComponent } from "nativewind";

const ListingItemDetails = () => {
  const { back } = useRouter();
  const { title, id } = useSearchParams();
  const [content, setContent] = React.useState<ListingItemType | null>(null);

  useEffect(() => {
    if (!title) back();
    const items = [...placeItems, ...packages];

    setContent(() => {
      const foundContent = items.find((item) => item.title === title);
      return foundContent;
    });
  }, []);

  if (content === null) return <StyledText>Loading ...</StyledText>;

  return (
    <StyledScrollView className=" bg-gray-200">
      <StyledView className="relative">
        <StyledView>
          <StyledImage
            sharedTransitionTag={`item-${id}`}
            source={{
              uri: content.imgUri,
            }}
            alt="Flamingo"
            className="rounded-3xl w-full h-96 object-cover shadow-lg"
          />
        </StyledView>

        <StyledView className="flex flex-row items-center justify-between px-5 py-3 absolute top-0 left-0 right-0">
          <StyledButton
            onPress={() => back()}
            className="bg-white rounded-full w-8 h-8 flex justify-center items-center"
          >
            <StyledSvg
              className="w-5 h-5 text-yellow-500 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <Path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </StyledSvg>
          </StyledButton>

          <StyledView className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
            <StyledSvg
              className="w-5 h-5 text-yellow-500 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <Path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </StyledSvg>
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView className="px-7 py-5">
        <StyledView className="flex flex-row items-center justify-between">
          <StyledText className="text-gray-900 font-bold text-2xl">
            Flamingo
            <StyledText className="flex flex-row items-center text-sm text-gray-500 mt-2">
              <StyledComponent
                component={MapPinSvg}
                className="w-4 h-4 mr-1 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                // xmlns="http://www.w3.org/2000/svg"
              />
              South Africa
            </StyledText>
          </StyledText>
          <StyledText className="text-gray-900 font-bold text-2xl">
            $250
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
};

export default ListingItemDetails;
