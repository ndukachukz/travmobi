import {
  View,
  ViewProps,
  ImageProps,
  Image,
  ScrollView,
  ScrollViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Text, TextProps } from "@ui-kitten/components";
import Svg, { Path, SvgProps } from "react-native-svg";
import { StyledComponent } from "nativewind";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

export function StyledSafeAreaView({
  children,
  ...props
}: SafeAreaViewProps & { className?: string }) {
  return (
    <StyledComponent component={SafeAreaView} {...props}>
      {children}
    </StyledComponent>
  );
}
export function StyledView({
  children,
  ...props
}: ViewProps & { className?: string }) {
  return (
    <StyledComponent component={View} {...props}>
      {children}
    </StyledComponent>
  );
}

export function StyledScrollView({
  children,
  ...props
}: ScrollViewProps & { className?: string }) {
  return (
    <StyledComponent component={ScrollView} {...props}>
      {children}
    </StyledComponent>
  );
}

export function StyledText({
  children,
  ...props
}: TextProps & { className?: string }) {
  return (
    <StyledComponent component={Text} {...props}>
      {children}
    </StyledComponent>
  );
}
export function StyledButton({
  children,
  ...props
}: TouchableOpacityProps & { className?: string }) {
  return (
    <StyledComponent component={TouchableOpacity} {...props}>
      {children}
    </StyledComponent>
  );
}

export function StyledImage({ ...props }: ImageProps & { className?: string }) {
  return <StyledComponent component={Image} {...props} />;
}

export function StyledSvg({
  children,
  ...props
}: SvgProps & { className: string }) {
  return (
    <StyledComponent component={Svg} {...props}>
      {children}
    </StyledComponent>
  );
}

export function StyledGearIcon({
  className,
}: SvgProps & { className?: string }) {
  return (
    <StyledView className="bg-yellow-500 w-10 h-10 rounded-xl block flex items-center justify-center">
      <StyledSvg className="w-6 h-6 text-white cursor-pointer" stroke="#fff">
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
  );
}
