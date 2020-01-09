import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrootComponent } from '../components/groot/groot.component';
import { PhotosComponent } from '../components/photos/photos.component';

const routes: Routes = [
  { path: '', component: GrootComponent },
  { path: 'photos/:albumId', component: PhotosComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
