import { createDrawerNavigator } from "@react-navigation/drawer";
import MapScreen from "../screens/MapScreen";
import { DrawerContent } from "../components/DrawerContent";
import HelpAndHotlineModal from "../modals/helpAndHotlineModal";
import supportUsModal from "../modals/supportUsModal";
import contactUsModal from "../modals/contactUsModal";
import faqsModal from "../modals/faqsModal";
import TosModal from "../modals/TosModal";
import creditsModal from "../modals/creditsModal";
import privacyPolicyModal from "../modals/privacyPolicyModal";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
	return (
		<Drawer.Navigator
			screenOptions={{ headerShown: false }}
			drawerContent={(props) => <DrawerContent {...props} />}
		>
			<Drawer.Screen
				name="Map"
				component={MapScreen}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen
				name="helpAndHotlineModal"
				component={HelpAndHotlineModal}
			/>
			<Drawer.Screen name="supportUsModal" component={supportUsModal} />
			<Drawer.Screen name="contactUsModal" component={contactUsModal} />
			<Drawer.Screen name="faqsModal" component={faqsModal} />
			<Drawer.Screen name="TosModal" component={TosModal} />
			<Drawer.Screen name="privacyPolicyModal" component={privacyPolicyModal} />
			<Drawer.Screen name="creditsModal" component={creditsModal} />
		</Drawer.Navigator>
	);
}
