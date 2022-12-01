import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'searched-comic',
    loadChildren: () => import('./searched-comic/searched-comic.module').then( m => m.SearchedComicPageModule)
  },
  {
    path: 'searched-comic-page2',
    loadChildren: () => import('./searched-comic-page2/searched-comic-page2.module').then( m => m.SearchedComicPage2PageModule)
  },
  {
    path: 'collectionitem1',
    loadChildren: () => import('./collectionitem1/collectionitem1.module').then( m => m.Collectionitem1PageModule)
  },
  {
    path: 'collectionitem3',
    loadChildren: () => import('./collectionitem3/collectionitem3.module').then( m => m.Collectionitem3PageModule)
  },
  {
    path: 'marvel-page',
    loadChildren: () => import('./marvel-page/marvel-page.module').then( m => m.MarvelPagePageModule)
  },
  {
    path: 'dccomics',
    loadChildren: () => import('./dccomics/dccomics.module').then( m => m.DccomicsPageModule)
  },
  {
    path: 'darkhorse',
    loadChildren: () => import('./darkhorse/darkhorse.module').then( m => m.DarkhorsePageModule)
  },
  {
    path: 'image',
    loadChildren: () => import('./image/image.module').then( m => m.ImagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
