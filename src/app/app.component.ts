
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, CommonModule, FooterComponent, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'neuschwanstein-hotel';
}
