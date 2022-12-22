import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.half}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.half}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    half: {
        flex: 1
    },
    mid: {
        alignItems: 'center'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#4e0329",
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    buttonsContainer: {
        flexDirection: "row",
        // flex: 1
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: 'center'

    }
})