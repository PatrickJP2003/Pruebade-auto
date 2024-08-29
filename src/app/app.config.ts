import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-73fee","appId":"1:24265147371:web:50cdbe61380f5f486a4fae","storageBucket":"app-pokemon-73fee.appspot.com","apiKey":"AIzaSyBUqbbhQLqfrMiD8jPFYEoW0jTaXVnpsqk","authDomain":"app-pokemon-73fee.firebaseapp.com","messagingSenderId":"24265147371","measurementId":"G-LRDCT6S6HM"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
  ]
};
