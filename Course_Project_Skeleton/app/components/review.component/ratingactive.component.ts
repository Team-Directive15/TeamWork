import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rating-active',
    templateUrl: './ratingactive.component.html',
    styles: [
        `i {
                cursor: pointer;
            }
        `
    ]
})

export class RatingActiveComponent {
    public value: Number;
    public starClasses: string[];

    ngOnInit() {
        this.value = 1;
        this.starClasses = ['glyphicon glyphicon-star','glyphicon glyphicon-star-empty','glyphicon glyphicon-star-empty','glyphicon glyphicon-star-empty','glyphicon glyphicon-star-empty'];
    }

    rate(rating: Number) {
        this.value = rating;
        for (var i = 0; i < 5; i++) {
            if (i < this.value) {
                this.starClasses[i]= 'glyphicon glyphicon-star';
            }
            else {
                this.starClasses[i]= 'glyphicon glyphicon-star-empty';
            }
        }
    }
}