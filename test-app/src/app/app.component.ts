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

    logicalSUM(arr: Boolean[]): Boolean {

        var result: Boolean;

        result = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] || result) {
                return true;
            }
            else {
                return false;
            }
        }

        return result;
    }

    addItem(id: number, firstName: string, lastName: string): void {
        //var a = this.test.push(new Worker(id, firstName, lastName));
        if (id == null || firstName.trim() == "" || lastName.trim() == "") { return; }




    }

    /*var chek: Boolean;
    var chekArr: Boolean[] = [];

    chek = false;

    for (var i = 0; i < this.test.length; i++) {
        if (this.test[i].id != id) {
            chekArr.push(new Boolean(true));
        }
        else {
            chekArr.push(new Boolean(false));
        }
    }

    if (!this.logicalSUM(chekArr)) {
        this.test.push(new Worker(id, firstName, lastName));
        return;
    }
    */
    //arr.push(new Worker(id, firstName, lastName));
    /*
    overlapCheker(value: Worker, array: Worker[]) {
        if (value.id != id) {
            return true;
        }
        return false;
    }
    */


}

/*
        for (let item of this.test) {
            if (this.test.some(item => item.id == id)) {
                return;
            } else { }

        }
*/

/*
this.test.forEach(function (value: Worker, index: Number, arr: Worker[]) {

    chek = false;
    if (value.id == id) {
        chek = false;
    } else if (value.id !== id) {
        chek = true;
    }

    if (chek) {
        result = true;
    }
})
*/