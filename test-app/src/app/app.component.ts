import { Component } from '@angular/core';
import { element } from 'protractor';
import { worker } from 'cluster';


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
    templateUrl: './app.component.html'
    //Здесь был HTML код
})
export class AppComponent {
    id: number;
    firstName: string;
    lastName: string;
    title = "Компетенции"
    appTitle = "Компетенции";




    //var as todo array elements
    test: Worker[] = [
        { id: 0, firstName: 'Vasya', lastName: 'Bell' },
        { id: 1, firstName: 'Vasya', lastName: 'Bell' },
        { id: 2, firstName: 'Vasya', lastName: 'Bell' },
        { id: 3, firstName: 'Vasya', lastName: 'Bell' }

    ]

    addItem(id: number, firstName: string, lastName: string): void {
        //var a = this.test.push(new Worker(id, firstName, lastName));
        if (id == null || firstName.trim() == "" || lastName.trim() == "") return;
        for (let item of this.test) {
            if (this.test.some(item => item.id == id)) {
                return;
            } else { }

        }
        this.test.push(new Worker(id, firstName, lastName));
    }
}