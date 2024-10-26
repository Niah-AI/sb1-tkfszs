import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { DashboardScreen } from "./DashboardScreen";
import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#3b82f6",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    title: "Dental Clinic"
                }}
            />
            <StackNavigator.Screen
                name="One"
                component={ScreenOne}
            />
            <StackNavigator.Screen
                name="Two"
                component={ScreenTwo}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);