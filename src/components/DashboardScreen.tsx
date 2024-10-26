import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Color } from "@nativescript/core";

type DashboardScreenProps = {
    route: RouteProp<MainStackParamList, "Dashboard">,
    navigation: FrameNavigationProp<MainStackParamList, "Dashboard">,
};

export function DashboardScreen({ navigation }: DashboardScreenProps) {
    const [appointments, setAppointments] = React.useState(0);
    const [pendingBills, setPendingBills] = React.useState(0);
    const [activePatients, setActivePatients] = React.useState(0);

    return (
        <scrollView className="bg-gray-100">
            {/* Header */}
            <flexboxLayout className="p-4 bg-blue-600">
                <label className="text-2xl font-bold text-white">Dental Clinic Dashboard</label>
            </flexboxLayout>

            {/* Quick Stats */}
            <gridLayout columns="*, *, *" className="p-4">
                <flexboxLayout col="0" className="bg-white rounded-lg p-4 m-1">
                    <label className="text-lg font-bold text-blue-600">{appointments}</label>
                    <label className="text-sm text-gray-600">Today's Appointments</label>
                </flexboxLayout>
                
                <flexboxLayout col="1" className="bg-white rounded-lg p-4 m-1">
                    <label className="text-lg font-bold text-green-600">${pendingBills}</label>
                    <label className="text-sm text-gray-600">Pending Bills</label>
                </flexboxLayout>
                
                <flexboxLayout col="2" className="bg-white rounded-lg p-4 m-1">
                    <label className="text-lg font-bold text-purple-600">{activePatients}</label>
                    <label className="text-sm text-gray-600">Active Patients</label>
                </flexboxLayout>
            </gridLayout>

            {/* Quick Actions */}
            <flexboxLayout className="p-4 flex-direction-column">
                <label className="text-xl font-bold mb-2">Quick Actions</label>
                
                <button 
                    className="bg-blue-500 text-white p-4 rounded-lg mb-2"
                    onTap={() => navigation.navigate('Appointments')}
                >
                    Schedule Appointment
                </button>
                
                <button 
                    className="bg-green-500 text-white p-4 rounded-lg mb-2"
                    onTap={() => navigation.navigate('PatientRecords')}
                >
                    Patient Records
                </button>
                
                <button 
                    className="bg-purple-500 text-white p-4 rounded-lg mb-2"
                    onTap={() => navigation.navigate('Billing')}
                >
                    Billing & Invoices
                </button>
                
                <button 
                    className="bg-orange-500 text-white p-4 rounded-lg mb-2"
                    onTap={() => navigation.navigate('Analytics')}
                >
                    Analytics & Reports
                </button>
            </flexboxLayout>

            {/* Recent Activity */}
            <flexboxLayout className="p-4 flex-direction-column">
                <label className="text-xl font-bold mb-2">Recent Activity</label>
                
                <flexboxLayout className="bg-white rounded-lg p-4 mb-2">
                    <label className="text-blue-600 font-bold">New Appointment</label>
                    <label className="text-gray-600">John Doe - Dental Cleaning</label>
                </flexboxLayout>
                
                <flexboxLayout className="bg-white rounded-lg p-4 mb-2">
                    <label className="text-green-600 font-bold">Payment Received</label>
                    <label className="text-gray-600">$150 - Sarah Smith</label>
                </flexboxLayout>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f3f4f6",
    }
});