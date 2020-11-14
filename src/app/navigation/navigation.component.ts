import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    public navPoints: string[];

    constructor() {}

    ngOnInit(): void {
        this.navPoints = ['navi1', 'navi2', 'navi3', 'navi4'];
    }
}
