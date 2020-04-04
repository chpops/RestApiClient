import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Car } from '../car';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

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
		"name": new FormControl("", Validators.required),
		"model": new FormControl("", Validators.required),
		"price": new FormControl("", Validators.required)
	});

	constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute, private fb: FormBuilder) {
		this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
	}

	async ngOnInit() {
		// this.justForm = this.fb.group({
		// 	name: [
		// 		null,
		// 		[
		// 			Validators.required,
		// 			Validators.pattern(/^[A-z0-9]*$/),
		// 			Validators.minLength(3)
		// 		]
		// 	],
		// 	model: [null, [Validators.required]],
		// 	price: [null, [Validators.required]]
		// 	// name: null,
		// 	// model: null,
		// 	// price: null
		// })

		if (this.id) {
			this.car = await this.dataService.getCar(this.id).toPromise();
			if (this.car != null) this.loaded = true;
		}
		console.log();
	}

	save(myForm) {
		console.log(myForm);
		let name = this.car.name;
		let model = this.car.model;
		let price = this.car.price;

		if (name && model && price) {
			this.dataService.updateCar(this.car).subscribe(data => this.router.navigateByUrl("/"));
			console.log("success");
		}
		else {
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