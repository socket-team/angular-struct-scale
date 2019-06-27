import { storiesOf } from '@storybook/angular';

import { withKnobs } from '@storybook/addon-knobs';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule  } from '@angular/router/testing';
storiesOf('LAYOUTS | HEADER', module)
    .addDecorator(withKnobs)
    .add('Home-PC', () => {
        return {
            moduleMetadata: {
                imports: [RouterModule],
                declarations: [HeaderComponent]
            },
            template: `<app-header [device]="'PC'"></app-header>`
        }
    })
    .add('Home-SP',()=>{
        return {
            moduleMetadata: {
                imports: [RouterModule],
                declarations: [HeaderComponent]
            },
            template: `<app-header [device]="'SP'"></app-header>`
        }
    })

storiesOf('LAYOUTS | HEADER',module)
    .addDecorator(withKnobs)
    .add('Default',() => {
        return {
            moduleMetadata: {
                imports: [RouterModule,RouterTestingModule.withRoutes([
                    { path: '**',component: HeaderComponent }
                ])],
                declarations: [HeaderComponent],
            },
            template: `<app-header [device]="'OTHER'"></app-header>`
        }
    })


