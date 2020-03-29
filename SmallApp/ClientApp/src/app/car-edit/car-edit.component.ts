import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Car } from '../car';

@Component({
	templateUrl: '../car-edit/car-edit.component.html',
	styleUrls: ['../car-edit/car-edit.component.css']
})
export class CarEditComponent implements OnInit {

	id: number;
	car: Car = new Car();
	loaded: boolean = false;

	constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
		this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
	}

	async ngOnInit() {
		if (this.id) {
			this.car = await this.dataService.getCar(this.id).toPromise();
			if (this.car != null) this.loaded = true;
		}
		console.log();
	}

	save() {
		let name = this.car.name;
		let model = this.car.model;
		let price = this.car.price;

		if (name && model && price) {
			this.dataService.updateCar(this.car).subscribe(data => this.router.navigateByUrl("/"));
			console.log("success");
		}
		else {
			console.log("Ошибка - Один из параметров не заполнен");
			console.log("Name: " + name);
			console.log("Model: " + model);
			console.log("Price: " + price);
		}
	}
}