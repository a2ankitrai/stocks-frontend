import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payconiq-stock-frontend';

  constructor(private router: Router,
    private route: ActivatedRoute) {

  }

  getAllStocks() {
    this.router.navigate(['/stocks'], { relativeTo: this.route });
  }

  openCreateStock(){
    this.router.navigate(['/create-stock'], { relativeTo: this.route });
  }
}
