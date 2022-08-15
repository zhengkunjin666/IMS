const Models=require('../models/models');
const { use } = require('../routes');
const User=new Models.User;
const authCodeFunc=require('../utils/authCode')

module.exports={
    login: async function(req,res,next){
        const phone=req.body.phone;
        const password=req.body.password;
        if(!phone || !password){
            res.json({code: 0,data: "缺少参数！"});
            return
        } 
        try{
            const users=await User.select({phone,password});
            const user=users[0];
            if(user){
                let auth_Code=phone+'\t'+password+'\t'+user.name+'\t'+user.id;
                const token=authCodeFunc(auth_Code,'ENCODE');
                const userInfo={"id": user.id,"name": user.name,phone,password};
                res.json({code: 200,data: {message: "登录成功！",token,userInfo}});
            }else{
                res.json({code: 0,data: "登录失败，手机号密码错误！"});
            }
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    index: async function(req,res,next){
        try{
            const data=await User.all();
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    insert: async function(req,res,next){
        const name=req.body.name;
        const phone=req.body.phone;
        const password=req.body.password;
        const created_at=new Date();
        if(!name || !phone || !password){
            res.json({code: 0,data: "缺少参数！"});
            return
        };
        try{
            const user=await User.select({phone});
            if(user[0]){
                res.json({code: 0,data: "此号码已存在，请换个号码尝试！"});
                return
            };
            const data=await User.insert({name,phone,password,created_at});
            res.json({code: 200,data: data})
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    update: async function(req,res,next){
        const id=req.params.id;
        const name=req.body.name;
        const phone=req.body.phone;
        const password=req.body.password
        const updated_at=new Date();
        if(!id || !name || !phone || !password){
            res.json({code: 0,data: "缺少参数！"});
            return
        }
        try{
            const user=await User.select({phone});
            if(user[0].id != id){
                res.json({code: 0,data: "此号码已存在，请换个号码尝试！"});
                return
            };
            const data=await User.update(id,{name,phone,password,updated_at});
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    delete: async function(req,res,next){
        const id=req.params.id;
        if(!id){
            res.json({code: 0,data: "缺少参数！"});
            return
        }
        try{
            const data=await User.delete(id);
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    }
}