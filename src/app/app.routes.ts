import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CourseComponent } from './course/course.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    // {path:'home', component: HomeComponent},
    {path:'career', component: CareerComponent},
    {path:'aboutus', component: AboutusComponent},
    {path:'course', component: CourseComponent},
    {path:'contactus', component: ContactusComponent},
    { path: '**', redirectTo: '' }
];
