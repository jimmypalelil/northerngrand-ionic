import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab4Page} from './tab4.page';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule, MatBadgeModule,
} from '@angular/material';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MatTableModule,
        MatTabsModule,
        MatMenuModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatListModule,
        MDBBootstrapModule.forRoot(),
        RouterModule.forChild([{path: '', component: Tab4Page}])
    ],
    declarations: [Tab4Page]
})
export class Tab4PageModule {
}
