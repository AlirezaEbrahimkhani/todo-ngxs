import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({ disabled: !environment.production }),
  ],
  exports: [NgxsModule],
})
export class CoreModule {}
