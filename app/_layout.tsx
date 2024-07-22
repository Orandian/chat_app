import { Slot, useRouter, useSegments } from "expo-router";
import { MenuProvider } from "react-native-popup-menu";

// Import your global CSS file
import "../global.css";
import { AuthContextProvider, useAuth } from "@/context/authContext";
import { useEffect } from "react";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") return;
    const inApp = segments[0] == "(app)";

    if (isAuthenticated && !inApp) {
      router.replace("Home");
    } else if (isAuthenticated == false) {
      router.replace("SignIn");
    }
  }, [isAuthenticated]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <MenuProvider>
      <AuthContextProvider>
        <MainLayout />
      </AuthContextProvider>
    </MenuProvider>
  );
};

export default RootLayout;
