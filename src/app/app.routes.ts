import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { HowToGetHereComponent } from './how-to-get-here/how-to-get-here.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { ShopComponent } from './shop/shop.component';
import { TheHotelComponent } from './the-hotel/the-hotel.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SpecialOccasionsComponent } from './special-occasions/special-occasions.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'activities', component: ActivitiesComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'howtogethere', component: HowToGetHereComponent},
  { path: 'layouts', component: LayoutsComponent},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'seasons', component: SeasonsComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'special-occasions', component: SpecialOccasionsComponent},
  { path: 'the-hotel', component: TheHotelComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'nav', component: NavComponent}
];
