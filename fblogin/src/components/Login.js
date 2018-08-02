      import React from 'react';

      export default class Login extends React.Component{

        constructor(){
         super();
         this.state = {
           username:'',
           password:''
         }
        }

      onsubmit(e){
      e.preventDefault();
      console.log(this.state)
      }

      getdata(e){
       this.setState({'username':e.target.value})
      }


        render(){

          return(
            <div>
              <h2>Please enter the details to Login</h2>
                <form onSubmit={this.onsubmit.bind(this)}>
                <input type='text' name='username'
                  placeholder='username'
                  value={this.state.username}
                  onChange={this.getdata.bind(this)}

                   />
                  <br/><br/>

                <input type='password' name='password'
                  placeholder='password'
                  value={this.state.password}
                  onChange={this.getdata.bind(this)}

                />

                <br/><br/>
                <button type="submit">Login</button>
              </form>
            </div>
          );
        }
      }
