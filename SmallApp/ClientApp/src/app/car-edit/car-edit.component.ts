import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Car } from '../car';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
	templateUrl: '../car-edit/car-edit.component.html',
	styleUrls: ['../car-edit/car-edit.component.css']
})

export class CarEditComponent implements OnInit {
	id: number;
	car: Car = new Car();
	loaded: boolean = false;
	justForm: FormGroup;

	myForm: FormGroup = new FormGroup({
		"name":  new FormControl("", [Validators.required, Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/), Validators.minLength(1), Validators.maxLength(12)] ),
		"model": new FormControl("", [Validators.required, Validators.pattern(/[а-яА-ЯёЁa-zA-Z0-9]+$/), Validators.minLength(1), Validators.maxLength(12)] ),
		"price": new FormControl("", [Validators.required, Validators.min(1), Validators.max(999999999)] )
	});

	constructor(
		private dataService: DataService,
		private router: Router,
		activeRoute: ActivatedRoute
		) { 
			this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
	}

	async ngOnInit() {
		if (this.id) {
			this.car = await this.dataService.getCar(this.id).toPromise();
			if (this.car != null) 
				this.loaded = true;
			else
				console.log("Объект Car = null");
		}
		else{
			console.log("Невозможно получить параметр Id из activeRoute");
		}
	}

	save(myForm) {
		// console.log(myForm);
		let name = this.car.name;
		let model = this.car.model;
		let price = this.car.price;

		// Дополнительная проверка при сохранении на заполненность необходимых параметров
		if (name && model && price) {
			this.dataService.updateCar(this.car).subscribe(data => this.router.navigateByUrl("/"));
			console.log("car change success");
		}
		else {
			if (!name ) {
				console.log("- Не заполнено поле 'Марка': " + name);
			}
			else if (!model) {
				console.log("- Не заполнено поле 'Модель': " + model);
			}
			else if (!price) {
				console.log("- Не заполнено поле 'Цена': " + price);
			}
			else{
				console.log("Возникла непредвиденная ошибка при редактировании авто!");
				console.log("Параметры формы:");
				console.log("Марка: " + name);
				console.log("Модель: " + model);
				console.log("Цена: " + price);
			}
		}
	}
}