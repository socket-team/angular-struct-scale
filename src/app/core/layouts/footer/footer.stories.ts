import { storiesOf } from '@storybook/angular';

import { withKnobs } from '@storybook/addon-knobs';
import { FooterComponent } from './footer.component';
storiesOf('LAYOUTS | FOOTER', module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        return {
            moduleMetadata: {
                declarations: [FooterComponent]
            },
            template: `<app-footer></app-footer>`
        }
    });


