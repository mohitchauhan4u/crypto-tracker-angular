import { CurrencyService } from './service/currency.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedCurrency: string = 'INR';
  constructor(
    private currencyService: CurrencyService,
    private router: Router
  ) {}

  sendCurrency(event: string) {
    console.log(event);
    this.currencyService.setCurrency(event);
  }

  navigateToHome() {
    this.router.navigate(['coin-list']);
  }
}
