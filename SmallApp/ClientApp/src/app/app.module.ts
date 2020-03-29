import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataService } from './data.service';

const appRoutes: Routes = [
    { path: '', component: CarListComponent },
    { path: 'create', component: CarCreateComponent },
    { path: 'edit/:id', component: CarEditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ReactiveFormsModule, BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, CarListComponent, CarCreateComponent, CarEditComponent, CarFormComponent, NotFoundComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})

export class AppModule { }