import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PaymentService } from './payment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  providers: [PaymentService,],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  payment: any = [];
  

  constructor(private fb: FormBuilder,
    private paymentService: PaymentService,
    private snake: MatSnackBar,
    private router: Router
  ) {

    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      paymentNumber: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      amount: ['', Validators.required],
      transactionId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.paymentForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   paymentNumber: ['', Validators.required],
    //   paymentMethod: ['', Validators.required],
    //   amount: ['', Validators.required],
    //   transactionId: ['', Validators.required]
    // });
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
     this.paymentService.addPayment(this.paymentForm.value).subscribe(() => {
      this.snake.open('Payment data added successful', 'Close', {
        duration: 3000
      });
      this.router.navigate(['/payment-done']);
     })
    }
  }
}