import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab2Page } from './tab2.page';

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

import {HttpClientModule} from '@angular/common/http';
import {ListService} from '../services/list.service';
import {EnsureAuthenticatedService} from '../services/ensure-authenticated.service';
import {InspectionService} from '../services/inspection.service';
import {AuthService} from '../services/auth.service';
import {LoginRedirectService} from '../services/login-redirect.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        MatFormFieldModule,
        MatRadioModule,
        CdkTableModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatBottomSheetModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatBadgeModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
        RouterModule.forChild([{ path: '', component: Tab2Page }])
    ],
    declarations: [Tab2Page],
    providers: [ListService, AuthService, EnsureAuthenticatedService, LoginRedirectService, InspectionService],
})

export class Tab2PageModule {}
