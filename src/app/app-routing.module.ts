/*
 * Title: auth-layout.component.ts
 * Author: Jennifer Hoitenga
 * Date: September 20, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: Layout Pages video by Professor Krasso (https://www.youtube.com/watch?v=9AsogopS9YM)
 * Angular Tutorial for Beginners: Reactive Forms video by Professor Krasso (https://www.youtube.com/watch?v=OFBL4bKno_s)
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

// Define the application routes.
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent, // Use the BaseLayoutComponent as the layout.
    children: [
      {
        path: '', // Child route, empty path.
        component: HomeComponent, // Render the HomeComponent in the layout.
      },
    ],
    // Apply the SignInGuard to this route.
    canActivate: [SignInGuard],
  },
  {
    path: 'session', // Path for a separate session layout.
    component: AuthLayoutComponent, // Use the AuthLayoutComponent for this layout.
    children: [
      {
        path: 'not-found', // Child route under 'session'.
        component: NotFoundComponent, // Render the NotFoundComponent in the session layout.
      },
      {
        path: 'sign-in', // Child route for the sign-in page.
        component: SignInComponent, // Render the SignInComponent in the session layout.
      },
    ],
  },
  {
    path: '**', // This will catch all other routes.
    redirectTo: 'session/not-found', // Redirect to the 'not-found' route in the session layout.
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
