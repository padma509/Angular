import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// for(var i=0;i<=10;i++){
//   console.log(i);
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
