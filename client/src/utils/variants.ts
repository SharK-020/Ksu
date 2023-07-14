const baseCardVar = {
	offscreen: {
		y: 100,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1.5,
		},
	},
};

const sectionVar = {
	offscreen: {
		//  x: 100,
		scale: 0.9,
		opacity: 0,
	},
	onscreen: {
		//  x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			duration: 1.5,
		},
	},
};

const animVariants = {
    baseCard: baseCardVar,
    section: sectionVar
};

export default animVariants;