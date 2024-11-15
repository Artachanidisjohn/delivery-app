import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
