import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  services = [
    {
      "method": "get",
      "url": "http://localhost:5000/api/values",
      "body": {},
      "enabled": true,
      "online": true
    },
    {
      "method": "post",
      "url": "http://localhost:5000/api/values",
      "body": {},
      "enabled": true,
      "online": false
    },
    {
      "method": "post",
      "url": "http://localhost:5000/api/values",
      "body": {},
      "enabled": false,
      "online": false
    },
  ]

  getClass(s: any) {
    return `ripple ${s.enabled ? s.online ? 'green' : 'red' : 'gray'}`
  }
}
