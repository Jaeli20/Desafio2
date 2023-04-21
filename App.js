import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Button,
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

//dimenciones de la pantalla de cada telefono
const windowHeight = Dimensions.get("screen").height;

export default function App() {
  //hooker para guardar la url de la api
  const [foto, setFoto] = useState("");

  //funcion asincrona para evitar que se repita una y otra vez
  async function pedirFoto() {
    await fetch("https://dog.ceo/api/breeds/image/random") // se espera a que se haga el fetch
      .then((res) => res.json()) //se convierte a json la respuesta del fetch
      .then((resjason) => setFoto(resjason.message)); //se guarda en el hook y con el . se entra a la propiedad requerida
  }
  console.log(foto);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.textoContenedor}>
        <Text style={styles.textoHeader}>
          Peticion get a una api de imagenes random
        </Text>
      </View>

      <View style={styles.container}>
        <Image style={styles.imagen} source={{ uri: foto }} />
        <TouchableOpacity style={styles.boton} onPress={pedirFoto}>
          <Text style={styles.textoBoton}>Random imagen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imagen: {
    height: windowHeight / 2,
    margin: 10,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
  },
  textoHeader: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  textoContenedor: {
    top: windowHeight / 5,
    alignItems: "center",
  },
  safeArea: {
    top: -100,
  },
  container: {
    justifyContent: "center",
    top: windowHeight / 4,
  },

  textoBoton: {
    textAlign: "center",
    color: "white",
  },

  boton: {
    backgroundColor: "#7a7cff",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
