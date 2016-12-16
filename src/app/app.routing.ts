// 3d party imports
import { RouterModule, Routes } from '@angular/router';

// app imports
import { HomeComponent } from './home/home.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ContactComponent } from './contact/contact.component';
import { ChartsComponent } from './charts/charts.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'repos', component: RepositoriesComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'charts', component: ChartsComponent}
];

export const routing = RouterModule.forRoot(routes);
