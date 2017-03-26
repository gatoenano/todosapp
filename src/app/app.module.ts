// Core modules
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// App modules
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { PendingsPage } from '../pages/pendings/pendings';
import { FinishedPage } from '../pages/finished/finished';
import { AddPage } from '../pages/add/add';
import { ListDetailsPage } from '../pages/list-details/list-details';
// App services
import { TodoList } from '../providers/todo-list';
// App pipes
import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { PendingsPipe } from './pipes/pendings.pipe';

@NgModule({
  declarations: [
    MyApp,
    PendingsPage,
    FinishedPage,
    TabsPage,
    AddPage,
    ListDetailsPage,
    PlaceholderPipe,
    PendingsPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendingsPage,
    FinishedPage,
    TabsPage,
    AddPage,
    ListDetailsPage
  ],
  providers: [
    TodoList,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
