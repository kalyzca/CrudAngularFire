import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentslistComponent } from './pages/studentslist/studentslist.component';
import { StudentsformComponent } from './pages/studentsform/studentsform.component';

@NgModule({
	declarations: [AppComponent, StudentslistComponent, StudentsformComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
