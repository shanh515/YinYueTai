//引入模块
const mysql = require("mysql");
const express = require("express");

//2.1:引入express-session组件
const session = require("express-session");

//创建连接池
const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"yinyue"
});

//创建express对象
var server = express();

//配置session
server.use(session({
    secret:"128位字符串",   //配置密钥
    resave:false,          //每次请求是否更新数据 
    saveUninitialized:true //保存初始化数据
}));

//app.js 录制跨域配置
const cors = require("cors");
server.use(cors({
    origin:["http://127.0.0.1:8081",
    "http://localhost:8081"],
    credentials:true
}))

//监听端口
server.listen(3000);

//静态目录，保存图片
server.use(express.static("public"));


//一：首页轮播
//接收客户端发送请求
server.get("/imglist",(req,res)=>{
    //3:创建数据发送客户端
    var rows = [
      {id:1,img_url:"http://127.0.0.1:3000/img/banner01.jpg"},
      {id:2,img_url:"http://127.0.0.1:3000/img/banner02.jpg"},
      {id:3,img_url:"http://127.0.0.1:3000/img/banner03.jpg"},
      {id:4,img_url:"http://127.0.0.1:3000/img/banner04.jpg"},
      {id:5,img_url:"http://127.0.0.1:3000/img/banner05.jpg"},
      {id:6,img_url:"http://127.0.0.1:3000/img/banner06.jpg"},
  ];
    res.send({code:1,data:rows})
});

//二、用户登录
server.get("/login",(req,res)=>{
    //6.1:获取参数
    var name = req.query.name;
    var pwd = req.query.pwd;
    //6.2:创sql
    var sql = "SELECT id FROM yinyue_login";
    sql+=" WHERE name = ? AND pwd=?";
    //6.3:执行sql
    pool.query(sql,[name,pwd],(err,result)=>{
       if(err)throw err;
       //6.4:获取返回结果
       //6.5:判断结果返回 登录成功或者失败
       if(result.length==0){
         res.send({code:-1,msg:"用户名或密码有误"});
       }else{
         res.send({code:1,msg:"登录成功"})
       }
    });
  });     


//三、分类列表
  server.get("/list",(req,res)=>{
    //1:获取二个参数,只要分页功能
    //  pno      页码
    //  pageSize 页大小
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    //1.1:为参数设置默认值
    if(!pno){
      pno = 1;
    }
    if(!pageSize){
     pageSize = 3;
    }
    //1.创建变量保存发送给客户端数据
    var obj = {code:1};
    //1.2.创建变量保存进度
    var progress = 0;
    //2:sql
    var sql = "SELECT id,img_url,title,name,addr";
        sql+=" FROM yinyue_fl LIMIT ?,?";
    //2.1创建变量offset 起始行数
    var offset = (pno-1)*pageSize;
    //2.2创建变量ps 一页数据
    var ps=parseInt(pageSize);
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err)throw err;
        progress+=50;
        obj.data = result;
        //获取数据库返回结果
        //发送数据+不再发送数据
        if(progress==100){
          res.send(obj);
        }
    })
    //计算总页数
    //创建sql查询总记录数
    var sql =" SELECT count(id) AS c FROM";
        sql+=" yinyue_fl"
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      progress+=50;
      var pc =Math.ceil(result[0].c/pageSize);
      obj.pageCount = pc;
      if(progress==100){
        res.send(obj)
      }
      });

  });

  //评论列表
  server.get("/pllist",(req,res)=>{
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    if(!pno){
      pno = 1;
    }
    if(!pageSize){
      pageSize = 3;
    }
    //创建变量保存发送个客户端数据
    var obj = {code:1};
    //创建变量保存进度
    var progress = 0;
    //创建sql语句
    var sql ="SELECT id,img_url,uname,content";
        sql+=" FROM yinyue_pl LIMIT ?,?";
    //创建变量offset 起始行数
    var offset = (pno-1)*pageSize;
    //创建一个变量ps 一页数据
    var ps=parseInt(pageSize);
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err)throw err;
        progress+=50;
        obj.data = result;
        //res.send({code:1,data:result});
        if(progress==100){
          res.send(obj);
        }
    })
    //计算总页数
    //创建sql查询总记录
    var sql ="SELECT count(id) AS c FROM";
        sql+=" yinyue_pl";
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      progress+=50;
      var pc =Math.ceil(result[0].c/pageSize);
      obj.pageCount = pc;
      if(progress==100){
        res.send(obj)
      }
    });
  });
 
  //vb总榜列表
  server.get("/vb",(req,res)=>{
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    if(!pno){
      pno = 1;
    }
    if(!pageSize){
     pageSize = 3;
    }
    //1.创建变量保存发送给客户端数据
    var obj = {code:1};
    //1.2.创建变量保存进度
    var progress = 0;
    //2:sql
    var sql = "SELECT id,img_url,point,title,sname";
        sql+=" FROM yinyue_vb LIMIT ?,?";
    //2.1创建变量offset 起始行数
    var offset = (pno-1)*pageSize;
    //2.2创建变量ps 一页数据
    var ps=parseInt(pageSize);
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err)throw err;
        progress+=50;
        obj.data = result;
        //获取数据库返回结果
        //发送数据+不再发送数据
        if(progress==100){
          res.send(obj);
        }
    })
    //计算总页数
    //创建sql查询总记录数
    var sql =" SELECT count(id) AS c FROM";
        sql+=" yinyue_vb"
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      progress+=50;
      var pc =Math.ceil(result[0].c/pageSize);
      obj.pageCount = pc;
      if(progress==100){
        res.send(obj)
      }
      });

  })

  //vb内地列表
  server.get("/vb_neidi",(req,res)=>{
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    if(!pno){
      pno = 1;
    }
    if(!pageSize){
     pageSize = 3;
    }
    //1.创建变量保存发送给客户端数据
    var obj = {code:1};
    //1.2.创建变量保存进度
    var progress = 0;
    //2:sql
    var sql = "SELECT id,img_url,point,title,sname";
        sql+=" FROM yinyue_vb_neidi LIMIT ?,?";
    //2.1创建变量offset 起始行数
    var offset = (pno-1)*pageSize;
    //2.2创建变量ps 一页数据
    var ps=parseInt(pageSize);
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err)throw err;
        progress+=50;
        obj.data = result;
        //获取数据库返回结果
        //发送数据+不再发送数据
        if(progress==100){
          res.send(obj);
        }
    })
    //计算总页数
    //创建sql查询总记录数
    var sql =" SELECT count(id) AS c FROM";
        sql+=" yinyue_vb_neidi"
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      progress+=50;
      var pc =Math.ceil(result[0].c/pageSize);
      obj.pageCount = pc;
      if(progress==100){
        res.send(obj)
      }
      });

  })
