import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial40814Navigator from '../features/Tutorial40814/navigator';
import NotificationList40786Navigator from '../features/NotificationList40786/navigator';
import Settings40785Navigator from '../features/Settings40785/navigator';
import Settings40777Navigator from '../features/Settings40777/navigator';
import UserProfile40775Navigator from '../features/UserProfile40775/navigator';
import Settings40722Navigator from '../features/Settings40722/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Tutorial40814: { screen: Tutorial40814Navigator },
NotificationList40786: { screen: NotificationList40786Navigator },
Settings40785: { screen: Settings40785Navigator },
Settings40777: { screen: Settings40777Navigator },
UserProfile40775: { screen: UserProfile40775Navigator },
Settings40722: { screen: Settings40722Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
