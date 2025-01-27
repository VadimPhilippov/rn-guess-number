import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
	return (
		<View style={styles.screen}>
			<TitleText>The Game is Over!</TitleText>
			<View style={styles.imageContainer}>
				<Image
					// source={require('../assets/success.png')}
					source={{
						uri:
							'https://avatars.mds.yandex.net/get-pdb/2359302/0fcfd731-ccea-4c36-be41-acd4969ade41/s1200'
					}}
					style={styles.image}
					resizeMode='cover'
				/>
			</View>
			<View style={styles.resultContainer}>
				<BodyText style={styles.resultText}>
					Your phone needed{' '}
					<Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
					guess the number{' '}
					<Text style={styles.highlight}>{props.userNumber}</Text>.
				</BodyText>
			</View>
			<MainButton onPress={props.onRestart}>NEW GAME</MainButton>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: 'orangered',
		overflow: 'hidden',
		marginVertical: 30
	},
	highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
	},
	resultContainer: {
        marginHorizontal: 50,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;
