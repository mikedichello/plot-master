const Crops = [
	{
		name: 'Tomato',
		description:
			'Top crop of choice for home gardens. Produces beautiful and tasty red fleshy fruit. Used for slicing, salads, or cooking into sauces. Warmer climates may allow for 2nd season in fall',
		plantIndoors: 42, //days prior to last frost to time with transplant time
		daysToGerminate: 14, //number of days it takes for seed to germinate
		transplantDate: '1 week after last frost', //earliest date to transplant into ground outside (number of days after last frost)
		daysToMaturity: 70, //number of days (average) after transplant when plant can be harvested
		harvest:
			'Pick regularly as soon as the fruits turn color but are still firm. Store at room temperature.', //harvest tips
		sunRequirement: 'Full-Sun', //Full-sun partial-sun shade
		spacing: 24, //inches needed between plants
		companionPlants: [
			'Marigold',
			'Broccoli',
			'Chives',
			'Mint',
			'Borage',
			'Parsley',
			'Basil',
			'Pepper',
			'Asparagus',
			'Monarda',
			'Lettuce',
			'Garlic',
			'Dill',
			'Calendula',
		], //grows well near these plants
		perennial: false, //false= annual true=perennial
		img:
			'https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg', //image of plant
		icon: 'https://image.flaticon.com/icons/png/512/135/135702.png', // icon of plant
	},
	{
		name: 'Basil',
		description:
			'Culinary herb, highly prized for its strong flavor. Used in a lot of Italian dishes such as Pesto.',
		plantIndoors: 21,
		daysToGerminate: 14,
		transplantDate: '2 weeks after last frost',
		daysToMaturity: 30,
		harvest:
			'Harvest leaves a few at a time as you need them in the kitchen. In midsummer, cut plants back by half to stimulate new growth, and make big batches of pesto with the trimmings.',
		sunRequirement: 'Full Sun',
		spacing: 12,
		companionPlants: ['Tomato', 'Pepper', 'Lettuce'],
		perennial: false,
		img:
			'https://www.miraclegro.com/sites/g/files/oydgjc111/files/styles/scotts_asset_image_720_440/public/asset_images/basil1.png?itok=PsMbxblv', //image of plant
		icon: 'https://image.flaticon.com/icons/png/512/616/616410.png', // icon of plant
	},
	{
		name: 'Bell Peppers',
		description:
			'Produces bright red fruit that can be eaten raw or cooked. Great with Ranch dip.',
		plantIndoors: 56,
		daysToGerminate: 20,
		transplantDate: '1 week after last frost when ground warms up.',
		daysToMaturity: 75,
		harvest:
			'Peppers can be harvested when they are still green, though their flavor improves as they ripen to red, yellow, or orange.',
		sunRequirement: 'Full Sun',
		spacing: 12,
		companionPlants: [
			'Basil',
			'Marjoram',
			'Oregano',
			'Carrot',
			'Tomato',
			'Borage',
			'Dill',
		],
		perennial: false,
		img:
			'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/03/iStock-530253685-400x267.jpg', //image of plant
		icon: 'https://image.flaticon.com/icons/png/512/766/766020.png', // icon of plant
	},
	{
		name: 'Wild Garden Lettuce Mix',
		description:
			'More than 60 different varieties of lettuce. A huge variety of colors, shapes, sizes, and textures. Great for salads!',
		plantIndoors: 30,
		daysToGerminate: 6,
		transplantDate:
			'2 weeks before last frost or sew directly after last frost',
		daysToMaturity: 45,
		harvest:
			'You can pick individual leaves, use scissor or a knife to harvest handfuls of baby lettuce, or grow plants at proper spacing to get large, loose heads.',
		sunRequirement: 'Partial Shade',
		spacing: 4,
		companionPlants: [
			'Garlic',
			'Beet',
			'Dill',
			'Chives',
			'Basil',
			'Carrot',
			'Strawberry',
			'Radish',
			'Spinach',
			'Lettuce',
			'Cabbage',
			'Scallions',
			'Onion',
		],
		perennial: false,
		img: 'https://www.wildgardenseed.com/images/WildGardenLettuce.jpg', //image of plant
		icon: 'https://image.flaticon.com/icons/png/512/424/424227.png', // icon of plant
	},
	{
		name: 'Eggplant',
		description:
			'Plant produces plump purple fruit. Great for frying, pickling, or pureeing',
		plantIndoors: 56,
		daysToGerminate: 14,
		transplantDate: '2 weeks after last frost',
		daysToMaturity: 65,
		harvest:
			'Use pruning shears to cut fruits from the stem. Perfect fruits have shiny skins and only a few immature seeds inside.',
		sunRequirement: 'Full sun',
		spacing: 16,
		companionPlants: ['Catnip', 'Marigold', 'Beans', 'Pepper'],
		perennial: false,
		img:
			'https://s3.eu-west-2.amazonaws.com/growinginteractive/blog/eggplant-patio-baby-CREDIT-All-America-Selections-2x.jpg', //image of plant
		icon: 'https://image.flaticon.com/icons/png/512/590/590780.png', // icon of plant
	},
	{
		name: 'Carrot',
		description:
			'The famous sweet orange root veggie that grows in cool weather, early spring and fall months, and even through winter in warm climates.',
		plantIndoors: 'n/a',
		daysToGerminate: 5,
		transplantDate: 'Direct sow outdoors',
		daysToMaturity: 65,
		harvest:
			'Can be harvested over a long period, but the longer plants are left in the ground, the more likely they are to be injured by insects or animals.',
		sunRequirement: 'Sun with partial afternoon shade',
		spacing: 4,
		companionPlants: [
			'Chives',
			'Potatoes',
			'Leek',
			'Lettuce',
			'Peas',
			'Radish',
			'Rosemary',
			'Sage',
			'Tomato',
			'Onion',
		],
		perennial: false,
		img:
			'https://www.promixgardening.com/sites/promix/files/inline-images/PromixGardening_How%20To%20Grow%20Carrots_03_1.jpg', //image of plant
		icon: 'https://image.flaticon.com/icons/png/512/135/135687.png', // icon of plant
	},
	{
		name: 'Sugar Snap Peas',
		description:
			'Pod producing vines containing sweet green peas. Quick growing, high producing.',
		plantIndoors: 14,
		daysToGerminate: 7,
		transplantDate: 'As soon as soil can be worked.',
		daysToMaturity: 70,
		harvest:
			'Gather snap peas when the pods become plump yet are still glossy and filled with sweet-tasting peas.',
		sunRequirement: 'Full Sun',
		spacing: 4,
		companionPlants: [
			'Chives',
			'Mint',
			'Alyssum',
			'Carrot',
			'Corn',
			'Cucumber',
			'Radish',
			'Turnip',
			'Beans',
		],
		perennial: false,
		img:
			'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dwa65e45a7/Images/Product%20Images/prod000793/prod000793.jpg?sw=320&sh=378&sm=fit', //image of plant
		icon: 'https://image.flaticon.com/icons/png/512/1998/1998131.png', // icon of plant
	},
	{
		name: 'Garlic',
		description:
			'Aromatic bulbs grown underground. Essential for most cuisine. Planted in fall and harvested in following spring/summer',
		plantIndoors: 'n/a',
		daysToGerminate: 'n/a',
		transplantDate: 'Direct sow in fall',
		daysToMaturity: 300,
		harvest:
			'Dig up bulbs in summer when one third of the leaves become dry and lose their green color. Shake off soil, and cure whole plants dry in a warm, shady place for two weeks before trimming and storing the garlic bulbs.',
		sunRequirement: 'Sunny',
		spacing: 6,
		companionPlants: [
			'Tomato',
			'Apple',
			'Apricot',
			'Plum',
			'Cherry',
			'Pear',
			'Peach',
			'Raspberry',
		],
		perennial: false,
		img:
			'https://gardenerspath.com/wp-content/uploads/2019/12/How-to-Grow-Garlic-FB-Image.jpg',
		icon: 'https://image.flaticon.com/icons/png/512/1652/1652082.png',
	},
	{
		name: 'Chives',
		description:
			'Grow indoors or outdoors for year-round onion flavoring. Use chopped leaves and young flowers to add flavor and decorative garnish to salads.',
		plantIndoors: 60,
		daysToGerminate: 14,
		transplantDate: 'After last frost, or grow indoors',
		daysToMaturity: 80,
		harvest:
			'Use scissors to gather handfuls of leaves from early spring onward. Rinse, pat dry, and snip or cut into smaller pieces.',
		sunRequirement: 'Full Sun to partial afternoon shade',
		spacing: 8,
		companionPlants: ['Carrot', 'Apple', 'Garlic', 'Onion'],
		perennial: false,
		img:
			'https://d1nw62gticy6e9.cloudfront.net/uploads/Organic-Standard-Chives.jpg',
		icon: 'https://image.flaticon.com/icons/png/512/135/135691.png',
	},
	{
		name: 'Cilantro',
		description:
			'Widely used in cuisines from around the world. Plants are most often harvested in the leafy stage of their development (cilantro) or the mature seed stage (coriander). Roots, flowers, and mmature seeds are also tasty. Plant monthly successions. Difficult to start in hot weather- sow in shade, or keep soil covered and cool until seedlings emerge. Self-sows in cool weather',
		plantIndoors: 30,
		daysToGerminate: 7,
		transplantDate: 'After last Frost',
		daysToMaturity: 30,
		harvest:
			'As soon as plants are 6 inches tall, pick individual leaves as you need them in the kitchen.',
		sunRequirement: 'Full Sun',
		spacing: 8,
		companionPlants: ['Potatoes', 'Basil', 'Mint'],
		perennial: false,
		img:
			'https://gardenerspath.com/wp-content/uploads/2018/06/Cilantro-Growing-Tips.jpg',
		icon: 'https://image.flaticon.com/icons/png/512/1398/1398238.png',
	},
	{
		name: 'Jalepeño',
		description:
			'The jalapeño is a medium-sized chili pepper pod type cultivar of the species Capsicum annuum. A mature jalapeño chili is 5–10 cm long and hangs down with a round, firm, smooth flesh of 25–38 mm wide. It can have a range of pungency, with Scoville heat units of 3,500 to 3,600.',
		plantIndoors: 56,
		daysToGerminate: 20,
		transplantDate: '1 week after last frost when ground warms up.',
		daysToMaturity: 75,
		harvest:
			'Chili peppers can be harvested when they are immature, but pungency increases with ripeness. Wear protective gloves when handling hot chilis, which can be dried or frozen for future use.',
		sunRequirement: 'Full Sun',
		spacing: 12,
		companionPlants: [
			'Basil',
			'Marjoram',
			'Oregano',
			'Carrot',
			'Tomato',
			'Borage',
			'Dill',
		],
		perennial: false,
		img:
			'https://mobileimages.lowes.com/product/converted/715339/715339011374.jpg?size=xl', //image of plant
		icon: 'https://image.flaticon.com/icons/png/512/390/390147.png', // icon of plant
	},
	{
		name: 'Pumpkin',
		description:
			'A pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and most often deep yellow to orange in coloration. The thick shell contains the seeds and pulp.',
		plantIndoors: 30,
		daysToGerminate: 14,
		transplantDate: '1 month after last frost',
		daysToMaturity: 110,
		harvest:
			'When the plant die back or before freezing weather, cut pumpkins leaving a stub of stem attached. Wipe clean and store indoors.',
		sunRequirement: 'Full Sun',
		spacing: 35,
		companionPlants: [
			'Corn',
			'Melon',
			'Beans',
			'Nasturtium',
			'Oregano',
			'Marigold',
		],
		perennial: false,
		img:
			'https://media.treehugger.com/assets/images/2019/06/plant-pumpkin.jpg.860x0_q70_crop-scale.jpg',
		icon: 'https://image.flaticon.com/icons/png/512/1230/1230882.png',
	},
	{
		name: 'Strawberry',
		description:
			'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.',
		plantIndoors: 'n/a',
		daysToGerminate: 14,
		transplantDate: 'Direct sow outside after last frost',
		daysToMaturity: 42,
		harvest:
			'Gather ripe fruits in the morning, when they are cool, and refrigerate immediately. Wash in cool water just before eating.',
		sunRequirement: 'Full Sun',
		spacing: 24,
		companionPlants: ['Beans', 'Lettuce', 'Spinach', 'Thyme', 'Onions'],
		perennial: true,
		img:
			'https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/cf0023d24be24aae9974f4cb1abf66e9.jpg',
		icon: 'https://image.flaticon.com/icons/png/512/1135/1135556.png',
	},
	{
		name: 'Watermelon',
		description:
			'The watermelon is a large fruit of a more or less spherical shape. It has an oval or spherical shape and a dark green and smooth rind, sometimes showing irregular areas of a pale green colour. It has a sweet, juicy, refreshing flesh of yellowish or reddish colour, containing multiple black, brown or white seeds.',
		plantIndoors: 30,
		daysToGerminate: 14,
		transplantDate: '2 weeks after last frost',
		daysToMaturity: 100,
		harvest:
			'Ripe watermelons sound deep and resonant when thumped, and the curled tendril opposite the melon should be brown. Wipe clean and store indoors.',
		sunRequirement: 'Full Sun',
		spacing: 34,
		companionPlants: ['Beans', 'Corn', 'Radish', 'Potatoes'],
		perennial: false,
		img:
			'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2017/09/15084644/How-to-grow-watermelon-in-pot-e1457271861238.jpg',
		icon: 'https://image.flaticon.com/icons/png/512/2224/2224249.png',
	},
	{
		name: 'Kale',
		description:
			'Kale or leaf cabbage is one of certain cultivars of cabbage grown for their edible leaves, although some are used as ornamentals. Kale plants have green or purple leaves, and the central leaves do not form a head.',
		plantIndoors: 30,
		daysToGerminate: 7,
		transplantDate: 'After Last Frost',
		daysToMaturity: 60,
		harvest:
			'Harvest leaves individually, when they are about the size of your hand.',
		sunRequirement: 'Full Sun',
		spacing: 16,
		companionPlants: [
			'Buckwheat',
			'Marigold',
			'Nasturtium',
			'Chinese Cabbage',
			'Cabbage',
			'Lavender',
		],
		perennial: false,
		img:
			'https://content.ces.ncsu.edu/media/images/bigstock-Kale-And-Cabbage-Plants-66770539.jpg',
		icon: 'https://image.flaticon.com/icons/png/512/1728/1728720.png',
	},
	{
		name: 'Oregano',
		description:
			'An aromatic perennial herb of the mint family (Lamiaceae) known for its flavourful dried leaves and flowering tops. The herb has long been an essential ingredient of Mediterranean cooking and is widely used to season many foods',
		plantIndoors: 30,
		daysToGerminate: 21,
		transplantDate: 'After last frost',
		daysToMaturity: 28,
		harvest:
			'Gather sprigs as needed in the kitchen. Gather stems for drying in early summer, just before the plants bloom.',
		sunRequirement: 'Full sun to partial afternoon shade',
		spacing: 8,
		companionPlants: ['Tomato', 'Pepper', 'Broccoli'],
		perennial: true,
		img: 'https://web.extension.illinois.edu/herbs/images/herbs/oregano.jpg',
		icon: 'https://image.flaticon.com/icons/png/512/1398/1398225.png',
	},
	{
		name: 'Catnip',
		description:
			'Catnip (Nepeta cataria) is a perennial herb that is a member of the mint family. It can grow to be up to three feet high! The chemical compound in the plant that attracts and affects cats is called nepetalactone. It is found in the leaves and stems.',
		plantIndoors: 60,
		daysToGerminate: 21,
		transplantDate: 'after last frost or can be grown indoors',
		daysToMaturity: 30,
		harvest:
			'Gather sprigs as desired for the pleasure of your cats. One small stem tip with four to eight leaves is plenty for one or two cats to enjoy. Gather stems for drying in early summer, just before the plants bloom.',
		sunRequirement: 'Full sun to partial afternoon shade',
		spacing: 14,
		companionPlants: ['Potatoes', 'Lavender', 'Rosemary', 'Sage', 'Mint'],
		perennial: true,
		img: 'https://edge.bonnieplants.com/www/uploads/20180920004156/catnip.jpg',
		icon: 'https://image.flaticon.com/icons/png/512/2372/2372974.png',
	},
	{
		name: '',
		description: '',
		plantIndoors: 0,
		daysToGerminate: 0,
		transplantDate: '',
		daysToMaturity: 0,
		harvest: '',
		sunRequirement: '',
		spacing: 0,
		companionPlants: [],
		perennial: false,
		img: '',
		icon: '',
	},
];

export default Crops;
