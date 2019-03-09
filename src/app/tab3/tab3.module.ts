import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab3Page} from './tab3.page';
import {MatCheckboxModule, MatSelectModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MatTableModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSnackBarModule,
        MDBBootstrapModule.forRoot(),
        RouterModule.forChild([{path: '', component: Tab3Page}])
    ],
    declarations: [Tab3Page]
})
export class Tab3PageModule {
}
