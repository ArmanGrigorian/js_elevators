export default function calcDistance(e, elevator) {
	const distances = elevator.reduce((acc, elevator) => {
		if (elevator.dataset.busy === "false") {
			acc.push(Math.abs(e.target.offsetTop - elevator.offsetTop));
		} else {
			acc.push(Infinity);
		}

		return acc;
	}, []);

	return {
		distances,
		minDistance: Math.min(...distances),
	};
}
