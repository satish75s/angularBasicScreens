import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  //template:'<h1> testing from componnet</h1>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee = {
    emp_id: 'E12345',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    dob: '1985-06-15',
    gender: 'male',
    address: '123 Main St, Cityville',
    department: 'IT',
    joining_date: '2020-05-20',
    salary: 60000
  };

  // Method to handle form submission
  onSubmit() {
    alert('Employee Data Submitted:'+this.employee.first_name);
    console.log('Employee Data Submitted:', this.employee);
    // Here you can implement logic to send the form data to the backend or perform other actions
  }
}
