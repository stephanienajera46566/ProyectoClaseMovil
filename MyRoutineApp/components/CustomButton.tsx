import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CustomButtonProps = {
    //tipo de dato: cadena
    title: string;
    //tipo de dato:funcion vacia o metodo
    onPressButton: () => void;
    //tipo: union de literales
    variant?: "primary" | "secundary" | "tertiary"

    //tipo:litera
    //variant: "primary"
}


export default function CustomButton({title, onPressButton, variant}: CustomButtonProps){

    return(
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'navy',
        padding: 12,
        marginTop: 10,
        width: 180,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: '500'
    }
})