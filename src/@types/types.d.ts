import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamListLogout = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamListLogout>;

type BottomTabStackParamList = {
  BottomTab: undefined;
};

type MyPlantStackParamList = {
  MyPlants: undefined;
};

type DiscoverParamList = {
  Discover: undefined;
};

type UserType = {
  id: string;
};

type MyPlantsType = {
  id: string;
};
