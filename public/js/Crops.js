const Crops = [
    {
        name: 'Tomato',
        description: 'Top crop of choice for home gardens. Produces beautiful and tasty red fleshy fruit. Used for slicing, salads, or cooking into sauces. Warmer climates may allow for 2nd season in fall',
        plantIndoors: 42, //days prior to last frost to time with transplant time
        daysToGerminate: 14, //number of days it takes for seed to germinate
        transplantDate: '1 week after last frost', //earliest date to transplant into ground outside (number of days after last frost)
        daysToMaturity: 70, //number of days (average) after transplant when plant can be harvested
        harvest: 'Pick regularly as soon as the fruits turn color but are still firm. Store at room temperature.', //harvest tips
        sunRequirement: 'Full-Sun', //Full-sun partial-sun shade
        spacing: 24, //inches needed between plants
        companionPlants: ["Marigold", "Broccoli", "Chives", "Mint", "Borage", "Parsley", "Basil", "Pepper", "Asparagus", "Monarda", "Lettuce", "Garlic", "Dill", "Calendula"], //grows well near these plants
        perennial: false, //false= annual true=perennial
        img: 'https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg', //image of plant
        icon: '' // icon of plant
    },
    {
        name: 'Basil',
        description: 'Culinary herb, highly prized for its strong flavor. Used in a lot of Italian dishes such as Pesto.',
        plantIndoors: 21, 
        daysToGerminate: 14, 
        transplantDate: '2 weeks after last frost', 
        daysToMaturity: 30,
        harvest: 'Harvest leaves a few at a time as you need them in the kitchen. In midsummer, cut plants back by half to stimulate new growth, and make big batches of pesto with the trimmings.', 
        sunRequirement: 'Full Sun', 
        spacing: 12,
        companionPlants: ['Tomato', 'Pepper', 'Lettuce'],
        perennial: false, 
        img: 'https://www.miraclegro.com/sites/g/files/oydgjc111/files/styles/scotts_asset_image_720_440/public/asset_images/basil1.png?itok=PsMbxblv', //image of plant
        icon: '' // icon of plant
    },
    {
        name: 'Bell Peppers',
        description: 'Produces bright red fruit that can be eaten raw or cooked. Great with Ranch dip.',
        plantIndoors: 56, 
        daysToGerminate: 20, 
        transplantDate: '1 week after last frost when ground warms up.', 
        daysToMaturity: 75,
        harvest: 'Peppers can be harvested when they are still green, though their flavor improves as they ripen to red, yellow, or orange.', 
        sunRequirement: 'Full Sun', 
        spacing: 12,
        companionPlants: ['Basil', "Marjoram", 'Oregano', 'Carrot', "Tomato", 'Borage','Dill'],
        perennial: false, 
        img: 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/03/iStock-530253685-400x267.jpg', //image of plant
        icon: '' // icon of plant
    },
    {
        name: 'Wild Garden Lettuce Mix',
        description: 'More than 60 different varieties of lettuce. A huge variety of colors, shapes, sizes, and textures. Great for salads!',
        plantIndoors: 30, 
        daysToGerminate: 6, 
        transplantDate: '2 weeks before last frost or sew directly after last frost', 
        daysToMaturity: 45,
        harvest: 'You can pick individual leaves, use scissor or a knife to harvest handfuls of baby lettuce, or grow plants at proper spacing to get large, loose heads.', 
        sunRequirement: 'Partial Shade', 
        spacing: 4,
        companionPlants: ["Garlic", "Beet", "Dill", 'Chives', 'Basil', 'Carrot', 'Strawberry', 'Radish', 'Spinach', 'Lettuce', 'Cabbage', 'Scallions', 'Onion' ],
        perennial: false, 
        img: 'https://www.wildgardenseed.com/images/WildGardenLettuce.jpg', //image of plant
        icon: '' // icon of plant
    },
    {
        name: 'Eggplant',
        description: 'Plant produces plump purple fruit. Great for frying, pickling, or pureeing',
        plantIndoors: 56, 
        daysToGerminate: 14, 
        transplantDate: '2 weeks after last frost', 
        daysToMaturity: 65,
        harvest: 'Use pruning shears to cut fruits from the stem. Perfect fruits have shiny skins and only a few immature seeds inside.', 
        sunRequirement: 'Full sun', 
        spacing: 16,
        companionPlants: ['Catnip', 'Marigold', 'Beans', 'Pepper'],
        perennial: false, 
        img: 'https://s3.eu-west-2.amazonaws.com/growinginteractive/blog/eggplant-patio-baby-CREDIT-All-America-Selections-2x.jpg', //image of plant
        icon: '' // icon of plant

    },
    {
        name: 'Carrot',
        description: 'The famous sweet orange root veggie that grows in cool weather, early spring and fall months, and even through winter in warm climates.',
        plantIndoors: 'n/a', 
        daysToGerminate: 5, 
        transplantDate: 'Direct sow outdoors', 
        daysToMaturity: 65,
        harvest: 'Can be harvested over a long period, but the longer plants are left in the ground, the more likely they are to be injured by insects or animals.', 
        sunRequirement: 'Sun with partial afternoon shade', 
        spacing: 4,
        companionPlants: ['Chives', 'Potatoes', 'Leek', 'Lettuce', 'Peas', 'Radish', 'Rosemary', 'Sage', 'Tomato', 'Onion'],
        perennial: false, 
        img: 'https://www.promixgardening.com/sites/promix/files/inline-images/PromixGardening_How%20To%20Grow%20Carrots_03_1.jpg', //image of plant
        icon: '' // icon of plant
    },
    {
        name: 'Sugar Snap Peas',
        description: 'Pod producing vines containing sweet green peas. Quick growing, high producing.',
        plantIndoors: 14, 
        daysToGerminate: 7, 
        transplantDate: 'As soon as soil can be worked.',
        daysToMaturity: 70,
        harvest: 'Gather snap peas when the pods become plump yet are still glossy and filled with sweet-tasting peas.', 
        sunRequirement: 'Full Sun', 
        spacing: 4,
        companionPlants: ['Chives', 'Mint', 'Alyssum', 'Carrot', 'Corn', 'Cucumber', 'Radish', 'Turnip', 'Beans'],
        perennial: false, 
        img: 'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dwa65e45a7/Images/Product%20Images/prod000793/prod000793.jpg?sw=320&sh=378&sm=fit', //image of plant
        icon: '' // icon of plant
    },
    {
        name: 'Garlic',
        description: 'Aromatic bulbs grown underground. Essential for most cuisine. Planted in fall and harvested in following spring/summer',
        plantIndoors: 'n/a', 
        daysToGerminate: 'n/a', 
        transplantDate: 'Direct sow in fall', 
        daysToMaturity: 300,
        harvest: 'Dig up bulbs in summer when one third of the leaves become dry and lose their green color. Shake off soil, and cure whole plants dry in a warm, shady place for two weeks before trimming and storing the garlic bulbs.', 
        sunRequirement: 'Sunny', 
        spacing: 6,
        companionPlants: ['Tomato', 'Apple', 'Apricot', 'Plum', 'Cherry', 'Pear', 'Peach', 'Raspberry'],
        perennial: false, 
        img: 'https://gardenerspath.com/wp-content/uploads/2019/12/How-to-Grow-Garlic-FB-Image.jpg', 
        icon: '' 
    },
    {
        name: 'Chives',
        description: 'Grow indoors or outdoors for year-round onion flavoring. Use chopped leaves and young flowers to add flavor and decorative garnish to salads.',
        plantIndoors: 60, 
        daysToGerminate: 14, 
        transplantDate: 'After last frost, or grow indoors', 
        daysToMaturity: 80,
        harvest: 'Use scissors to gather handfuls of leaves from early spring onward. Rinse, pat dry, and snip or cut into smaller pieces.', 
        sunRequirement: 'Full Sun to partial afternoon shade', 
        spacing: 8,
        companionPlants: ['Carrot', 'Apple', 'Garlic', 'Onion'],
        perennial: false, 
        img: 'https://d1nw62gticy6e9.cloudfront.net/uploads/Organic-Standard-Chives.jpg', 
        icon: '' 
    },
    {
        name: 'Cilantro',
        description: 'Widely used in cuisines from around the world. Plants are most often harvested in the leafy stage of their development (cilantro) or the mature seed stage (coriander). Roots, flowers, and mmature seeds are also tasty. Plant monthly successions. Difficult to start in hot weather- sow in shade, or keep soil covered and cool until seedlings emerge. Self-sows in cool weather',
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
        icon: '' 
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
        icon: '' 
    },

];

export default Crops;
