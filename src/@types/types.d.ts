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
  SeeDiscover: undefined;
};

type DiscoverNavigationProp = NativeStackNavigationProp<DiscoverParamList>;

type UserType = {
  id: string;
};

type MyPlantsType = {
  id: string;
  name: string;
  surname: string;
  imageUrl: string;
  plantId: string;
};

type DiscoverType = {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  environment: string;
  size: string;
  description: string;
  water: string;
  frequency: string;
  temperature: string;
  lighting: string;
  image: string;
};
