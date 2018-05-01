import { Routes } from '@angular/router';
import { SlidePageComponent } from './pages/slide-page/slide-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { UploadProductComponent } from './pages/upload-product/upload-product.component';


export const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },    
    { path: 'slide-page', component: SlidePageComponent },
    { path: 'upload-product', component: UploadProductComponent },

]
