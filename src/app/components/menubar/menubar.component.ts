import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrl: './menubar.component.scss',
})
export class MenubarComponent implements OnInit {

    items: MenuItem[] | undefined;
    ngOnInit() {

        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Cerca',
                icon: 'pi pi-search',
                items:[
                    {
                        label: 'Piattaforma',
                        icon: 'pi pi-desktop',
                    },
                    {
                        label: 'Creators',
                        icon: 'pi pi-user',
                    },
                    {
                        label: 'Sviluppatori',
                        icon: 'pi pi-code',
                    },
                ]
            },
            {
                label: 'New Release',
                icon: 'pi pi-calendar-plus'
            },
            {
                label: 'Top Games',
                icon: 'pi pi-trophy',
            },
        ];
    }

}
