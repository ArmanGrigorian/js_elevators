export default function replaceElevator(elevatorGates, closestElevator, level) {
	elevatorGates.forEach((gate) => {
		const a = gate.classList[1].split("--")[1];
		const b = gate.classList[2].split("--")[1];
		const c = closestElevator.className.split("--")[1];

		if (a === c && b == level) {
			closestElevator.style.transform = `translateY(0px)`;
			gate.appendChild(closestElevator);
		}
	});
}
