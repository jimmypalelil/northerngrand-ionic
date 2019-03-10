import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab3Page} from './tab3.page';
import {
    MatBottomSheetModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule, MatSortModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {UpdatelostComponent} from './updatelost/updatelost.component';
import {UpdatereturnedComponent} from './updatereturned/updatereturned.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MatTableModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSnackBarModule,
        MatBottomSheetModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatTabsModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatSortModule,
        MDBBootstrapModule.forRoot(),
        RouterModule.forChild([{path: '', component: Tab3Page}])
    ],
    declarations: [Tab3Page, UpdatereturnedComponent, UpdatelostComponent],
    entryComponents: [
        UpdatelostComponent,
        UpdatereturnedComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class Tab3PageModule {
}
