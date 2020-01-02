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
        spacing: 20, //inches needed between plants
        companionPlants: ["Marigold", "Broccoli", "Chives", "Mint", "Borage", "Parsley", "Basil", "Pepper", "Asparagus", "Monarda", "Lettuce", "Garlic", "Dill", "Calendula"], //grows well near these plants
        perennial: false, //false= annual true=perennial
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
        spacing: 8,
        companionPlants: ['Tomato', 'Pepper', 'Lettuce'],
        perennial: false, 
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
        spacing: 14,
        companionPlants: ['Basil', "Marjoram", 'Oregano', 'Carrot', "Tomato", 'Borage','Dill'],
        perennial: false, 
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
    },

];

export default Crops;
