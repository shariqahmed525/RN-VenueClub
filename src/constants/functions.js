import { NavigationActions, StackActions } from "react-navigation";

export const RESET_ROUTE = (rtName) => {
    return resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: rtName })],
    });
}
/* How to use it */
// this.props.navigation.dispatch(RESET_ROUTE('Home'))