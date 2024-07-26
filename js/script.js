import { elements } from "./data.js";
import { calcDistance, replaceElevator } from "./utils/index.js";

elements.buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		const { distances, minDistance } = calcDistance(e, elements.elevators);
		const indexOfClosestElevator = distances.indexOf(minDistance);
		const closestElevator = elements.elevators[indexOfClosestElevator];
		const level = e.target.textContent.split(" ")[1];

		const action =
			e.target.offsetTop < closestElevator.offsetTop
				? `translateY(-${minDistance}px)`
				: `translateY(${minDistance}px)`;

		closestElevator.style.transform = action;

		closestElevator.addEventListener("transitionstart", (e) => {
			closestElevator.dataset.busy = "true";
			closestElevator.style.backgroundColor = "yellow";
		});

		closestElevator.addEventListener("transitionend", (e) => {
			closestElevator.dataset.busy = "false";
			closestElevator.style.backgroundColor = "";
			replaceElevator(elements.elevatorGates, closestElevator, level);
		});
	});
});
