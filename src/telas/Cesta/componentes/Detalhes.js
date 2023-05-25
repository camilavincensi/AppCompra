import React from "react";
import Texto from "../../../componentes/texto";
import {Image, StyleSheet, View, TouchableOpacity} from "react-native";
import Botao from "../../../componentes/botao";

export default function Detalhes({nome, nomeFazenda, logoFazenda, descricao, preco, botao}){
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>

        <Texto style={estilos.descicao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <Botao texto={botao} onPress={() => {}} />

    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descicao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    imagemFazenda:{
        width: 32,
        height:32
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },

})