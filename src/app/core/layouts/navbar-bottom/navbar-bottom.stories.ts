import { storiesOf } from '@storybook/angular';

import { withKnobs } from '@storybook/addon-knobs';
import { RouterModule } from '@angular/router';
import { NavbarBottomComponent } from './navbar-bottom.component';
import { RouterTestingModule } from '@angular/router/testing';
storiesOf('LAYOUTS | NAVBAR', module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        return {
            moduleMetadata: {
                imports: [RouterModule,RouterTestingModule.withRoutes([{
                    path: '**',component: NavbarBottomComponent
                }])],
                declarations: [ NavbarBottomComponent ]
            },
            template: `<app-navbar-bottom></app-navbar-bottom>`
        }
    })

