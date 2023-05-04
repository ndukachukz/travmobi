import React from "react";
import { Platform } from "react-native";
import { Tabs } from "expo-router";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import LottieView from "lottie-react-native";

import { BottomTabs, Header, StyledSafeAreaView } from "../src/components";
import { HomeSvg } from "../src/assets";

const AppLayout = () => {
  const [isReady, setReady] = React.useState(false);
  const animation = React.useRef(null);

  React.useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StyledSafeAreaView className="flex-1 bg-gray-200 p-5 w-screen">
          {!isReady && Platform.OS !== "web" ? (
            <LottieView
              autoPlay
              ref={animation}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={require("../src/assets/lottie/Comp 1.json")}
            />
          ) : (
            <Tabs
              sceneContainerStyle={{
                backgroundColor: "transparent",
              }}
              tabBar={(props) => <BottomTabs {...props} />}
              screenOptions={{}}
            >
              <Tabs.Screen
                name="index"
                options={{
                  header: Header,
                  tabBarIcon: ({ color, focused, size }) => (
                    <HomeSvg
                      width={size}
                      height={size}
                      stroke={color}
                      className={focused ? "text-yellow-500" : "w-5 h-5"}
                    />
                  ),
                }}
              />
            </Tabs>
          )}
        </StyledSafeAreaView>
      </ApplicationProvider>
    </>
  );
};

export default AppLayout;
