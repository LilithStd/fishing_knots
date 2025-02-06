import {StyleSheet} from 'react-native';
const modalStyles = StyleSheet.create({
	closeButton: {
		backgroundColor: '#007BFF',
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
	buttonsContainer: {
		flexDirection: 'row',
		margin: 20,
		gap: 10,
	},
	overlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		width: '80%',
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 10,
		alignItems: 'center',
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	modalMessage: {
		fontSize: 16,
		color: '#333',
		textAlign: 'center',
		marginBottom: 20,
	},
});

export default modalStyles;
