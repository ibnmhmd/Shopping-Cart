import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  categoryName: String = 'About Us';

  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      window.scroll(0, 0 );
          if(this.route.snapshot.params ['category'])
          {
            this.categoryName = this.route.snapshot.params ['category'];
          }})
  }

}
