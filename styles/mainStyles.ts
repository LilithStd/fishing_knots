import {StyleSheet} from 'react-native';
const mainStyles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 40,
	},
	contentContainer: {
		backgroundColor: 'yellow',
		margin: 10,
		paddingBottom: 60,
	},
	listContainer: {
		marginBottom: 80,
		// paddingBottom: 60,
	},
	mainTitle: {
		padding: 10,
		textAlign: 'center',
	},
	titleCard: {
		textAlign: 'center',
	},
	buttonBase: {
		backgroundColor: '#4CAF50', // Зеленый фон
		paddingVertical: 10, // Вертикальный отступ
		borderRadius: 8, // Закругленные углы
		alignItems: 'center', // Выравнивание текста по горизонтали
		justifyContent: 'center', // Выравнивание текста по вертикали
		marginTop: 10, // Отступ сверху для кнопки
		width: 200,
		top: 40,
		left: 100,
	},
	buttonTextMy: {
		color: '#FFFFFF', // Белый текст
		fontSize: 16, // Размер текста
		fontWeight: 'bold', // Жирный шрифт
		textAlign: 'center', // Центрирование текста
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
	closeButton: {
		backgroundColor: '#007BFF',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
});

export default mainStyles;
