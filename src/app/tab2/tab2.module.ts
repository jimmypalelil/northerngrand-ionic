import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab2Page } from './tab2.page';
import {
    MatBottomSheetModule,
    MatCheckboxModule, MatDatepickerModule,
    MatExpansionModule, MatFormFieldModule, MatInputModule, MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule, MatSortModule,
    MatTableModule, MatTabsModule
} from '@angular/material';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
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
        RouterModule.forChild([{path: '', component: Tab2Page}])
    ],
    declarations: [Tab2Page],
    schemas: [NO_ERRORS_SCHEMA]
})

export class Tab2PageModule {}
