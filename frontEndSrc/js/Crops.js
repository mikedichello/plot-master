const Crops = [
	{
		name: '',
		description: '',
		plantIndoors: 0, //days prior to last frost to time with transplant time
		daysToGerminate: '', //number of days it takes for seed to germinate
		transplantDate: '', //earliest date to transplant into ground outside (number of days after last frost)
		daysToMaturity: 0, //number of days (average) after transplant when plant can be harvested
		harvestDate: '', //date range to harvest based on days to maturity and last frost date
		sunRequirement: '', //Full-sun partial-sun shade
		spacing: 0, //inches needed between plants
		companionPlants: [], //grows well near these plants
		perennial: false, //false= annual true=perennial
	},
];
