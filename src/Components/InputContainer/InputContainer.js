import React from 'react';

class InputContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={data:this.props.data};
        this.focus=this.focus.bind(this);
        this.blur=this.blur.bind(this);
        this.funcMap = {
            'text': {msg:["Please Fill the username"]},
            'email': {msg:["Invalid Email"]},
            'password': {msg:["Please Fill the password", "Password is Weak","Password is Good", "Password is Strong", "Password is Very Strong"]}
        };
    }
    blur(event){
        this.focus(event);
    }
    focus(event){
        var c=0;
        if(event.target.value===''){
            document.getElementById(this.state.data.type+"message").innerHTML=this.funcMap[this.state.data.type].msg[0];
            document.getElementById(this.state.data.datatestid).style.border="3px solid rgb(219, 0, 0)";
            document.getElementById("container").style.border="none";
            document.getElementById("container").style.boxShadow="none";
        } 
        else{
            if(this.state.data.type==='password' && c!==4){
                if(event.target.value.length>=1) c+=1;
                if(/[A-Z]/.test(event.target.value)) c+=1;
                if(/\d/.test(event.target.value)) c+=1;
                if(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(event.target.value)) c+=1;
                if(c===1){
                    document.getElementById(this.state.data.type+"message").innerHTML=this.funcMap[this.state.data.type].msg[1];
                    document.getElementById(this.state.data.datatestid).style.border="3px solid rgb(219, 0, 0)";
                }
                else if(c===2){
                    document.getElementById(this.state.data.type+"message").innerHTML=this.funcMap[this.state.data.type].msg[2];
                    document.getElementById(this.state.data.datatestid).style.border="3px solid #fca532";
                }
                else if(c===3){
                    document.getElementById(this.state.data.type+"message").innerHTML=this.funcMap[this.state.data.type].msg[3];
                    document.getElementById(this.state.data.datatestid).style.border="3px solid #53fc61";
                }
                else if(c===4){
                    // document.getElementById(this.state.data.type+"message").innerHTML=this.funcMap[this.state.data.type].msg[4];
                    document.getElementById(this.state.data.type+"message").innerHTML="";
                    document.getElementById(this.state.data.datatestid).style.border="3px solid rgb(0, 0, 0)";
                }
                document.getElementById("container").style.border="none";
                document.getElementById("container").style.boxShadow="none";
            }
            else{
                document.getElementById(this.state.data.type+"message").innerHTML="";
                document.getElementById(this.state.data.datatestid).style.border="3px solid rgb(0, 0, 0)";
                document.getElementById("container").style.border="1px solid rgb(212, 212, 212)";
                document.getElementById("container").style.boxShadow="8px 8px 5px rgb(207, 207, 207)";
            }
        }  
    }
    render(){
        return(
           <>
               <label htmlFor={this.state.data.datatestid}>{this.state.data.label}</label><br/>
               <input  type={this.state.data.type} id={this.state.data.datatestid} data-testid={this.state.data.datatestid} placeholder={this.state.data.placeholder}  onBlur={this.blur} onFocus={this.focus}/><br/>
               <span data-testid="message" className="error-message" id={this.state.data.type+"message"}></span>
           </>
        )
    }
}
export default InputContainer;
