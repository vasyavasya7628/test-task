import { Component } from '@angular/core';


class Worker {
    id: number;
    firstName: string;
    lastName: string;


    constructor(id: number, firstName: string, lastName: string) {

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

@Component({
    selector: 'worker-manager',
    styleUrls: ['./app.component.scss'],
    template: `<div class="page-header">
        <h1> Список сотрудников </h1>
    </div>

    <!-- Button to trigger modal -->
                    <button data-target="#myModal" role="button" class="btn" data-toggle="modal">Launch demo modal</button>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input type="number" class="form-control" [(ngModel)]="id" placeholder = "id" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-8">
                    <input type="string" class="form-control" [(ngModel)]="firstName" placeholder = "Имя" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="string" class="form-control" [(ngModel)]="lastName" placeholder="Фамилия" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(id, firstName, lastName)">Добавить сотрудника</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                </tr>
            </thead>
            
            <tbody>
                <tr *ngFor="let Worker of test">
                    <td>{{Worker.id}}</td>
                    <td>{{Worker.firstName}}</td>
                    <td>{{Worker.lastName}}</td>
                    <td class="btn btn-default" data-target="#staticBackdrop">1</td>
                    <td class="btn btn-default" data-target="#staticBackdrop">2</td>
                </tr>
            </tbody>
        </table>
       
    </div>`
})
export class AppComponent {
    id: number;
    firstName: string;
    lastName: string;
    title = "Компетенции"
    appTitle = "Компетенции";

    //var as todo array elements
    test: Worker[] = [
        { id: 1, firstName: 'Vasya', lastName: 'Bell' },
        { id: 2, firstName: 'Vasya', lastName: 'Bell' },
        { id: 3, firstName: 'Vasya', lastName: 'Bell' },
        { id: 4, firstName: 'Vasya', lastName: 'Bell' }

    ]

    addItem(id: number, firstName: string, lastName: string): void {

        if (id == null || firstName.trim() == "" || lastName.trim() == "")
            return;
        this.test.push(new Worker(id, firstName, lastName));


    }
}


