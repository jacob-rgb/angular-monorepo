import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ProductServiceProviders } from '@angular-monorepo/data-access';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(), 
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    ...ProductServiceProviders
  ],
};
