import {Routes} from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { SearchSortComponent } from './components/search-sort/search-sort.component';
export const routes:Routes=[
  {path:'',component:AddComponent},
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent},
  {path:'search-sort',component:SearchSortComponent}

];
