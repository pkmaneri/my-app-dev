import './App.css';
import Count from './counter/count';
import Create from './component/create';
import { useState } from 'react';
import List from './component/list';
import ApiCall from './component/apicall';
import CreateData from './component/createdata';
import CreateApiData from './component/createApiData';
import MemoList from './component/memo';
import CallbackUse from './component/callbackuse';
import FilterData from './component/filterdata';

function App() {
  const[userList,setUserList]=useState([])
  const callbackChange=(id)=>{
    // console.log(id)
    setUserList(userList=>[...userList,id])
    // spared operator is basicall three dot means mearge in array.

  }
  return (
    <div className="App">
      <header className="App-header">
        <Count/>
        <Create callbackChange={callbackChange}/>
        <List userList={userList}/>
        <ApiCall/>
        <CreateData/>
        <CreateApiData/>
        <MemoList/>
        <CallbackUse/>
        <FilterData/>
      </header>
    </div>
  );
}

export default App;
