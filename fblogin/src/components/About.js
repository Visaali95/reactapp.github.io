import React from 'react'

class  About extends React.Component{
 constructor(){
   super();
   this.state={
     datas:[
       {
         'name':'abc',
         'id':'0',
     },
     {
       'name':'xyz',
            'id':'1',
   }

     ]
   }
 }



 addMore(e){
        this.setState({'data':e.target.value});
 }
add(e){
  this.state.datas.push({'name':this.state.data});
this.setState({'data':e.target.value})
}
ss(){
  return(
    this.state.datas.map((res,index)=>{
      return(
        <li key={index}>{res.name}</li>

      )
    })

  )

}

  render(){

  	return(
  	<div>
    <h2>About</h2>
    <input type='text'name='list' value={this.state.data}
       onChange={this.addMore.bind(this)}
        placeholder='enter items'/>
    <button  onClick={this.add.bind(this)}>Add</button>
    <ul>

      {
        this.ss()
      }
    </ul>
  </div>
  );
 }
}
export default About;
