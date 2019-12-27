import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeBlogComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoginComponent, RegisterComponent, HomeBlogComponent]
})
export class PagesModule { }
