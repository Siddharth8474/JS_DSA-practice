// const { response } = require('express');
// const { header } = require('express/lib/request');
// const fetch=require('node-fetch');
//import { json } from "express/lib/response";
import fetch from "node-fetch";
const Api = 'https://reqres.in/api/users';

const SendData = ()=>{

    const datas={
        name:"siddhart",
        job:"developer"
    }

   fetch(Api,{
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(datas)
   })
   .then(response=>response.json())
   .then(result=>{
    console.log("response from server",result)
   }).catch(err=>{
    console.log("error",err)
   })

}

SendData()