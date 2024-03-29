import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    public navPoints: string[] = [];

    constructor() {}

    ngOnInit(): void {
        this.navPoints = ['nav1', 'nav2', 'nav3', 'nav4'];
    }
}
