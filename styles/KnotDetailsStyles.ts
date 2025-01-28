import {StyleSheet} from 'react-native';
const knotElementStyles = StyleSheet.create({
	knotElementContainer: {
		backgroundColor: 'yellow',
		margin: 10,
		paddingBottom: 60,
	},
	knotElementTitle: {
		textAlign: 'center',
	},
	knotElementButton: {
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
	knotElementText: {
		color: '#FFFFFF', // Белый текст
		fontSize: 16, // Размер текста
		fontWeight: 'bold', // Жирный шрифт
		textAlign: 'center', // Центрирование текста
	},
});

export default knotElementStyles;
