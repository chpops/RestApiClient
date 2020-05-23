import { Car } from "./../car";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
	templateUrl: "../car-create/car-create.component.html",
	styleUrls: ["../car-create/car-create.component.css"]
})
export class CarCreateComponent {
	car: Car = new Car();
	myForm: FormGroup = new FormGroup({
		"name":  new FormControl("", [Validators.required, Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/), Validators.minLength(1), Validators.maxLength(12)] ),
		"model": new FormControl("", [Validators.required, Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/), Validators.minLength(1), Validators.maxLength(12)] ),
		"price": new FormControl("", [Validators.required, Validators.min(1), Validators.max(999999999)] )
	});

	constructor(
		private dataService: DataService,
		private router: Router,
	) { }

	save(myForm) {
		// console.log(myForm);
		let name = this.car.name;
		let model = this.car.model;
		let price = this.car.price;

		// Дополнительная проверка при сохранении на заполненность необходимых параметров
		if (name && model && price) {
			this.dataService.createCar(this.car).subscribe(data => this.router.navigateByUrl("/"));
			console.log("create car success!");
		} else {
			if (!name) {
				console.log("- Не заполнено поле 'Марка': " + name);
			}
			else if (!model) {
				console.log("- Не заполнено поле 'Модель': " + model);
			}
			else if (!price) {
				console.log("- Не заполнено поле 'Цена': " + price);
			}
			else{
				console.log("Возникла непредвиденная ошибка при создании авто!");
				console.log("Параметры формы:");
				console.log("Марка: " + name);
				console.log("Модель: " + model);
				console.log("Цена: " + price);
			}
		}
	}
}