import React from 'react'

class  Learn extends React.Component{
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
   },


 ],
  data:'',
	names:[]
   }
 }



 addMore(e){
        this.setState({'data':e.target.value});
 }
add(e){
var getvalue = this.state.data;

var ss = this.state.datas.find(res => res.name == getvalue)
if(ss == undefined){
	this.state.datas.push({'name':this.state.data} );
	this.setState({'data':e.target.value})
}
else {alert('Item already exists')}



	//this.state.names = this.state.datas
 //this.setState({names:this.state.datas});

		// this.state.datas.map((res,index)=> {
		//
		// 		if(this.state.names.indexOf(res.name) === -1)
		// 			return this.state.datas.push({'name':this.state.data} );
		//
		// 			else
		// 			return <p>Item already exists</p>
		// })


  // this.state.datas.push({'name':this.state.data} );
	// this.setState({'data':e.target.value}) this.state.datas.push({'name    ':this.state.data});
}
ss(){

  return(
    this.state.datas.map((res,index)=>{
				return <li key={index}>
					{res.name}
				</li>
    })

  )

}

  render(){

  	return(
  	<div>
    <h2>Learn</h2>
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
export default Learn;
