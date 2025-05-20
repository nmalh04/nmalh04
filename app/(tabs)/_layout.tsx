import { Tabs } from 'expo-router';
import { Trophy, SquarePlay as PlaySquare, Compass, Medal } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarActiveTintColor: '#4361EE',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarLabelStyle: {
          fontFamily: 'System',
          fontSize: 12,
          marginBottom: 4,
        },
        headerStyle: {
          backgroundColor: '#4361EE',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontFamily: 'System',
          fontSize: 20,
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          headerTitle: 'Sports Explorer',
          tabBarIcon: ({ color, size }) => (
            <Compass size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: 'Sports',
          headerTitle: 'All Sports',
          tabBarIcon: ({ color, size }) => (
            <Trophy size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="games"
        options={{
          title: 'Games',
          headerTitle: 'Fun Games',
          tabBarIcon: ({ color, size }) => (
            <PlaySquare size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: 'Rewards',
          headerTitle: 'My Achievements',
          tabBarIcon: ({ color, size }) => (
            <Medal size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}