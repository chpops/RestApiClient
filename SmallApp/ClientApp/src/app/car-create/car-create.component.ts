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
	justForm: FormGroup;

	myForm: FormGroup = new FormGroup({
		"name": new FormControl("", Validators.required),
		"model": new FormControl("", Validators.required),
		"price": new FormControl("", Validators.required)
	});

	constructor(
		private dataService: DataService,
		private router: Router,
		// private fb: FormBuilder
	) { }

	ngOnInit() {
		// this.initForm();
	}

	// private initForm(): void {
	// 	this.justForm = this.fb.group({
	// 		name: ["",
	// 			[
	// 				Validators.required,
	// 				Validators.pattern(/^[A-z0-9]*$/),
	// 				Validators.minLength(3)
	// 			]
	// 		],
	// 		model: [null, [Validators.required]],
	// 		price: [null, [Validators.required]]
	// 		// name: null,
	// 		// model: null,
	// 		// price: null
	// 	});
	// }

	save(myForm) {
		console.log(myForm);
		let name = this.car.name;
		let model = this.car.model;
		let price = this.car.price;

		if (name && model && price) {
			this.dataService
				.createCar(this.car)
				.subscribe(data => this.router.navigateByUrl("/"));
			console.log("success");
		} else {
			if (!name) {
				console.log("- Не заполнено поле 'Марка': " + name);
			}

			if (!model) {
				console.log("- Не заполнено поле 'Модель': " + model);
			}

			if (!price) {
				console.log("- Не заполнено поле 'Цена': " + price);
			}
		}
	}
}