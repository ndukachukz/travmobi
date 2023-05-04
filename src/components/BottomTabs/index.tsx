import React from "react";
import { View, Text } from "react-native";
import { StyledButton, StyledView } from "../StyledComponents";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const BottomTabs = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <StyledView className="z-50 flex flex-row items-center justify-between bg-gray-900 text-gray-400 rounded-full py-5 px-10 ">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        if (options.tabBarIcon)
          var TabBarIcon = options.tabBarIcon({
            focused: isFocused,
            color: isFocused ? "#ffeb3b" : "#9e9e9e",
            size: 25,
          });

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <StyledButton
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className={`${
              isFocused ? "bg-gray-800" : ""
            } w-8 h-8 p-5 rounded-full flex justify-center items-center cursor-pointer`}
          >
            {TabBarIcon && TabBarIcon}
          </StyledButton>
        );
      })}
    </StyledView>
  );
};

export default BottomTabs;
