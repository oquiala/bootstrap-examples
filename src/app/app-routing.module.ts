import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductComponent } from './components/product/product.component';
import { FeaturesComponent } from './components/features/features.component';
import { AlbumComponent } from './components/album/album.component';
import { BlogComponent } from './components/blog/blog.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

const routes: Routes = [
  { path: '', redirectTo: 'carousel', pathMatch:'full' },
  { path: 'carousel', component: CarouselComponent },
  { path: 'product', component: ProductComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'jumbotron', component: JumbotronComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
