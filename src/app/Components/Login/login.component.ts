import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    registerForm: FormGroup;
    apiUrl = 'http://localhost:3100';
    correctPassword: boolean = true;
    registerOk = false;
    submitted: boolean = false;
    formInvalid: boolean = false;


    constructor(
        private http: HttpClient,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService

    ) { }

    ngOnInit() {


        this.loginForm = this.fb.group({
            email: [''],
            password: ['']
        })


        this.registerForm = new FormGroup({
            name: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });


        this.loginForm.get('password').valueChanges.subscribe((response) => {
            if (this.submitted) {
                this.correctPassword = true;
            }
        })

        this.registerForm.valueChanges.subscribe(() => {
            if (this.registerForm.valid) {
                this.formInvalid = false;
            }
        });


    }


    onSubmit() {


        this.router.navigate(['/home']);


        // this.submitted=true;

        // if (this.loginForm.valid) {
        //   const user = this.loginForm.value;

        // console.log(this.loginForm);

        //   this.http.post(`${this.apiUrl}/login`, user).subscribe(
        //     (response: any) => {

        //         const userId = response.userId.user.id; // Παίρνουμε το userId από το αντικείμενο user
        //         this.userService.setUserId(userId);
        //         console.log('user id',userId);
        //         this.correctPassword=true;
        //         this.router.navigate(['/home']);
        //     },
        //     (error) => {
        //         this.correctPassword=false;
        //       console.error('Login failed', error);
        //     }
        //   );
        // }
    }


    onRegister() {
        if (this.registerForm.valid) {
            const user = this.registerForm.value;
            this.http.post(`${this.apiUrl}/register`, user).subscribe(
                (response: any) => {
                    const userId = response.userId; // Παίρνουμε το userId από την απόκριση
                    this.userService.setUserId(userId);
                    this.registerOk = true;
                    this.formInvalid = false;
                    setTimeout(() => {
                        this.router.navigate(['/home']); // Μετάβαση σε άλλη σελίδα μετά το login
                    }, 2000)
                }
            );
        }
        else {
            this.formInvalid = true;
        }
    }



















}
