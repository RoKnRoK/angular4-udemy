import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list-section/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '"Hello Angular app"';
  name = '';

  courseProject = false;
  selectedTab: string = 'recipe';

  setSelectedTab(tabType: string) {
    this.selectedTab = tabType;
  }
}
