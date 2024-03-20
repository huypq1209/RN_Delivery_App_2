import { CommonActions, StackActions, createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/type';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const getCurrentRouteName = () => {
  if (navigationRef.current) {
    const currentRoute = navigationRef.current.getCurrentRoute();
    if (currentRoute) {
      return currentRoute.name;
    }
  }
  return null;
};

export function pop() {
  if (navigationRef.current && navigationRef) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack();
  }
}

export function navigateTo(screenName: string) {
  if (navigationRef.current && navigationRef) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(screenName);
  }
}

export const getCurrentRoute = () => {
  if (navigationRef.current) {
    return navigationRef.current.getCurrentRoute();
  }
  return null;
};

export const reloadCurrentRoute = () => {
  const currentRoute = getCurrentRoute();
  const currentRouteName = getCurrentRouteName();

  if (currentRouteName && currentRoute && navigationRef.current) {
    const listTabScreen = ['Welcome', 'Onboarding'];
    if (listTabScreen.includes(currentRouteName)) {
      navigationRef.current.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: currentRouteName }],
        }),
      );
    } else {
      navigationRef.current.dispatch(state => {
        const routes = state.routes.filter(r => r.name !== currentRouteName);

        return CommonActions.reset({
          ...state,
          routes,
          index: routes.length - 1,
        });
      });

      navigationRef.current.navigate(currentRouteName, currentRoute.params);
    }
  }
};

export const replaceNavigator = (nextRouteName: string, params?: any) => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.replace(nextRouteName, params));
  }
};
