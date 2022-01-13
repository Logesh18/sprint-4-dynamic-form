import React from 'react';
import InputContainer from "src/Components/InputContainer/InputContainer"
class Input extends React.Component{
    inputList = [
        {
            type : "text",
            label : "Enter your username",
            placeholder : "your Username",
            datatestid : 'username'
        },
        {
            type : "email",
            label : "Enter your email",
            placeholder : "Your Email",
            datatestid : 'email',
        },
        {
            type : "password",
            label : "Enter your password",
            placeholder : "your Password",
            datatestid : 'password'
        },
    ]
    render(){
        return(
            <>
                <center><h1>Dynamic Form</h1></center>
                <div id="container">
                    <div id="inner-content">
                        {(()=>{
                            var inputs=[];
                            for(let i=0;i<this.inputList.length;i++){
                                inputs.push(<div key={i.toString()}><InputContainer data={this.inputList[i]}/></div>);
                            } 
                            return inputs;
                        })()}
                    </div>
                 </div>
            </>
        )
    }
}
export default Input;
