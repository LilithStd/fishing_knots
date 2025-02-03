import { Tabs } from 'expo-router';
import { HomeIcon, HeartIcon } from 'react-native-heroicons/outline';

export default function Layout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'index') {
                        return <HomeIcon color={color} size={size} />;
                    } else if (route.name === 'favorites') {
                        return <HeartIcon color={color} size={size} />;
                    }
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tabs.Screen name="index" options={{ title: 'Главная' }} />
            <Tabs.Screen name="favorites" options={{ title: 'Избранное' }} />
        </Tabs>
    );
}
