import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStackNavigator from './TransactionsStackNavigator';
import SummaryScreen from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Transactions" component={TransactionsStackNavigator} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
