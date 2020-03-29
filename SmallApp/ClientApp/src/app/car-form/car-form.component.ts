import { Component, Input } from '@angular/core';
import { Car } from '../car';

@Component({
	selector: "car-form",
	templateUrl: '../car-form/car-form.component.html',
	styleUrls: ['../car-form/car-form.component.css']
})

export class CarFormComponent {
	@Input() car: Car;
}