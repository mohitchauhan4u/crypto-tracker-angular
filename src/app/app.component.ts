import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto-tracker-angular'
  currencyArray: string[] = ['INR', 'USD']
  selectedCurrency: string = 'INR'
  constructor () {}
  changeCurrency (event: string) {
    console.log(event)
  }
}
