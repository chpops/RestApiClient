import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Car } from '../car';

@Component({
	templateUrl: '../car-list/car-list.component.html',
	styleUrls: ['../car-list/car-list.component.css']
})

export class CarListComponent implements OnInit {

	cars: Car[];
	constructor(private dataService: DataService) { }

	ngOnInit() {
		// this.load();
		this.dataService.getCars().subscribe((data: Car[]) => this.cars = data);
	}

	// async load() {
	// 	this.dataService.getCars().subscribe((data: Car[]) => this.cars = data);
	// }

	
	delete(id: number) {
		this.dataService.deleteCar(id).subscribe(data => this.dataService.getCars().subscribe((data: Car[]) => this.cars = data));
	}

	login() {
		console.log("Test");
	}
}