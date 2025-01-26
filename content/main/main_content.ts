import {List_Knots_Type} from './main_types';

const knots_group = {
	1: 'Узлы для привязывания крючков',
	2: 'Узлы для соединения лесок',
	3: 'Узлы для создания петель',
	4: 'Узлы для специальных задач',
	5: 'Универсальные и декоративные узлы',
};

export const knots_list: List_Knots_Type[] = [
	{
		id: '1',
		group: knots_group[1],
		name: 'Паломар (Palomar Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Узел известен своей прочностью и простотой. Возник в США и стал популярен среди рыбаков благодаря универсальности. Отлично подходит для плетеных лесок.',
	},
	{
		id: '2',
		group: knots_group[1],
		name: 'Клинч (Clinch Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Классический узел, часто используемый для монолески. Придуман рыбаками для быстрого и надежного крепления крючков и приманок.',
	},
	{
		id: '3',
		group: knots_group[1],
		name: 'Усиленный клинч (Improved Clinch Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Современная версия клинча, более прочная благодаря дополнительному этапу фиксации. Появился в середине 20 века.',
	},
	{
		id: '4',
		group: knots_group[1],
		name: 'Универсальный узел (Uni Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Прост в освоении и чрезвычайно надежен. Создан как замена многим узлам, чтобы уменьшить путаницу среди новичков.',
	},
	{
		id: '5',
		group: knots_group[1],
		name: 'Снейл (Snell Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Известен со времен раннего рыболовства, когда крючки изготавливались из костей и дерева. Используется для обеспечения правильного угла крючка.',
	},
	{
		id: '6',
		group: knots_group[2],
		name: 'Плоский узел (Square Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Один из древнейших узлов, использовался в парусном деле и рыболовстве. Удобен для временного соединения лесок.',
	},
	{
		id: '7',
		group: knots_group[2],
		name: 'Грейпвайн (Grapevine Knot, Double Fisherman’s Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Придуман альпинистами, но стал популярным у рыбаков благодаря своей прочности.',
	},
	{
		id: '8',
		group: knots_group[2],
		name: 'Узел «Кровавый» (Blood Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Исторически использовался рыбаками в Европе для соединения тонких лесок. Его название связано с прочностью фиксации.',
	},
	{
		id: '9',
		group: knots_group[2],
		name: 'Парусный узел (Surgeon’s Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Произошел из хирургической практики, но оказался удобным для рыбаков благодаря надежности.',
	},
	{
		id: '10',
		group: knots_group[2],
		name: 'Альбрайт (Albright Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Изобретен в 1950-х годах известным рыболовом Джимом Альбрайтом. Используется для соединения лесок разного диаметра.',
	},
	{
		id: '11',
		group: knots_group[3],
		name: 'Узел «Овёс» (Bimini Twist)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Универсальный узел для привязки поводков. Предположительно, возник в 20 веке.',
	},
	{
		id: '12',
		group: knots_group[3],
		name: 'Лидер-луп (Leader Loop)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Произошел из хирургической практики, но оказался удобным для рыбаков благодаря надежности.',
	},
	{
		id: '13',
		group: knots_group[3],
		name: 'Перфекшн-луп (Perfection Loop)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Прост в использовании. История уходит корнями к морским узлам, адаптированным для рыболовства.',
	},
	{
		id: '14',
		group: knots_group[3],
		name: 'Узел капучино (Dropper Loop)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Создан для ловли на несколько приманок одновременно. Появился с развитием спортивного рыболовства.',
	},
	{
		id: '15',
		group: knots_group[3],
		name: 'Узел восьмерка (Figure Eight Loop)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Один из древнейших узлов, использовался моряками и рыбаками для создания петель.',
	},
	{
		id: '16',
		group: knots_group[4],
		name: 'Узел Арбор (Arbor Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Специализирован для крепления лески к катушке. Используется со времен появления первых рыболовных катушек.',
	},
	{
		id: '17',
		group: knots_group[4],
		name: 'Узел трилене (Trilene Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Разработан компанией Berkley для использования с их лесками. Надежен для ловли на тяжелые приманки.',
	},
	{
		id: '18',
		group: knots_group[4],
		name: 'Узел FG (FG Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Современный узел, особенно популярный среди любителей плетеных лесок.',
	},
	{
		id: '19',
		group: knots_group[4],
		name: 'Узел Шепард (Shepherd’s Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Использовался пастухами и рыбаками, хорошо подходит для временных соединений.',
	},
	{
		id: '20',
		group: knots_group[4],
		name: 'Узел бабочка (Butterfly Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Из альпинизма перекочевал в рыболовство благодаря своей универсальности.',
	},
	{
		id: '21',
		group: knots_group[5],
		name: 'Узел констриктор (Constrictor Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Его часто называют «зажимным», использовался для временной фиксации сетей и снастей.',
	},
	{
		id: '22',
		group: knots_group[5],
		name: 'Узел строительный (Builder’s Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Возник как вспомогательный узел в строительстве, стал применяться в рыбалке для крепления сетей.',
	},
	{
		id: '23',
		group: knots_group[5],
		name: 'Узел брюшной (Belly Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description: 'Удобен для закрепления снастей на лодке или снаряжении.',
	},
	{
		id: '24',
		group: knots_group[5],
		name: 'Узел прусик (Prusik Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Сначала применялся альпинистами, но стал полезен для рыбаков, особенно при ловле на скользящей оснастке.',
	},
	{
		id: '25',
		group: knots_group[5],
		name: 'Узел ласточка (Swallow Knot)',
		imagePreview: '../../assets/images/knots/palomar(preview).png',
		imageFull: '../../assets/images/knots/palomar.png',
		description:
			'Декоративный узел, иногда используется для крепления снастей или грузил.',
	},
];
