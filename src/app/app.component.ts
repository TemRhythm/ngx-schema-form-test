import { Component } from '@angular/core';
import { ISchema } from 'ngx-schema-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  schemaJson: string;
  errorMessage: string;
  schema: ISchema;
  value: any;

  schemaJsonChange(schemaJson: string) {
    this.errorMessage = null;
    try {
      this.schema = JSON.parse(schemaJson);
    } catch (e) {
      this.errorMessage = e.toString();
    }
  }

  formErrorChange(err) {
    console.log(err);
    this.errorMessage = '123';
  }
}
