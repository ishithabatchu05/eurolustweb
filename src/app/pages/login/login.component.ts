import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  blogin:boolean=true;
  bRegistration:boolean=false;
  bRegisterButton:boolean=false;
  correctCredentials:boolean=false;

  loginArr:any[]=[];
  loginObj:any={
    username:'',
    password:''
  };
  signinArr:any[]=[];
  signInObj:any={
    username:'',
    emailid:'',
    password:''
  };

  constructor(private router: Router){

  }
  displayLogin(){
    this.blogin=true;
    this.bRegistration=false;
  }
  onRegister(bRegisterButton:boolean){
    this.displayLogin();
    this.signinArr.push(this.signInObj);
    localStorage.setItem('signinArr',JSON.stringify(this.signinArr));
    this.signInObj={
      username:'',
      email:'',
      password:''
    };
    if(bRegisterButton)
      alert("Registration Successfull!");
  }
  displayRegistration(){
    this.onRegister(this.bRegisterButton);
    this.bRegistration=true;
    this.blogin=false;
    
  }
  ngOnInit():void{
    const localData=localStorage.getItem('signinArr');
    if(localData!=null)
    {
      this.signinArr=JSON.parse(localData);
    }
    
  }
  onLogin(){
    this.displayLogin();
    const isUserExist=this.signinArr.find(m=>m.username==this.loginObj.username && m.password==this.loginObj.password);
    if(isUserExist!=undefined)
      { this.correctCredentials=true;
        
        this.router.navigate(['Home']); 
        
        alert("User Logged in successfully");}
    else 
      alert("Wrong Credentials");
    }
    
  }
