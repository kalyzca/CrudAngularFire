import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentslistComponent } from './pages/studentslist/studentslist.component';
import { StudentsformComponent } from './pages/studentsform/studentsform.component';

const routes: Routes = [
	{
		path: 'studentsForm',
		component: StudentsformComponent,
	},
	{
		path: 'studentsList',
		component: StudentslistComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
