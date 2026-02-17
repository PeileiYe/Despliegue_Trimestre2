import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="text-align:center; margin-top:100px;">
      <h1>Hola Mundo</h1>
      <p>Desplegado con GitHub Actions</p>
    </div>
  `
})
export class AppComponent {}
