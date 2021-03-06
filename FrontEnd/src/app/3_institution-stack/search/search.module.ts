import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { ExploreContainerComponentModule } from '../../0_explore-container/explore-container.module';
import { SearchInstitutionButtonComponentModule } from '../../5_search-institution-button/search-institution-button.module'
import { SearchUserButtonComponentModule } from '../../6_search-user-button/search-user-button.module'


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SearchInstitutionButtonComponentModule,
    SearchUserButtonComponentModule,
    RouterModule.forChild([{ path: '', component: SearchPage }])
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
