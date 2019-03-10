import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import {
    MatBottomSheetModule,
    MatCheckboxModule, MatDatepickerModule,
    MatExpansionModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatRadioModule,
    MatSelectModule,
    MatSnackBarModule, MatSortModule,
    MatTableModule, MatTabsModule
} from '@angular/material';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MatTableModule,
        MatMenuModule,
        MatRadioModule,
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
        RouterModule.forChild([{ path: '', component: Tab1Page }])
    ],
    declarations: [Tab1Page],
    schemas: [NO_ERRORS_SCHEMA]
})
export class Tab1PageModule {}
