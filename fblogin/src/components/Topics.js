import React from 'react'

class  Topic extends React.Component{
  constructor(){
    super();
      this.state = {
        datas :[
          {'name':'first',id:0},
          {'name':'second',id:1},
        ],
        data:'',


      }
    }
    componentDidMount(){
    //  let ff = this.state.datas[1];
    //  console.log(ff)



    }

     addMore(e){
            this.setState({'data':e.target.value});
     }

  add(e){

    this.state.datas.push({'name':this.state.data});
    this.setState({'data': e.target.value})

  }

  listAdd(){
    return(
      this.state.datas.map((res,index)=>{
        return(
          <li key={index}  onClick={this.show.bind(this, res)}> {res.id} {res.name}  </li>
        )
      })
    )
  }

 show(dwe){
   // console.log(dwe.name)
   // this.setState({'data':dwe.name})
//   this.state.datas[dwe.id].name=this.state.data

  // console.log(this.state)
 }




  render(){

   return(
   <div>
    <h2>Topic</h2>
    <input type='text'name='list' value={this.state.data}
       onChange={this.addMore.bind(this)}
        placeholder='enter items'/>

    <button  onClick={this.add.bind(this)}>Add</button>
    <ul>


      {
        this.listAdd()
      }

    </ul>
  </div>
  );
 }
}


export default Topic;
