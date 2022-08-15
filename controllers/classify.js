const Models=require('../models/models');
const Classify=new Models.Classify;
module.exports={
    index: async function(req,res,next){
        try{
            const data=await Classify.all();
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    insert: async function(req,res,next){
        const name=req.body.name;
        if(!name){
            res.json({code: 0,data: "缺少参数！"});
            return
        };
        try{
            const classify=await Classify.select({name});
            if(classify[0]){
                res.json({code: 0,data: "此分类名称已存在，请换个名称尝试！"});
                return
            };
            const data=await Classify.insert({name});
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    update: async function(req,res,next){
        const id=req.params.id;
        const name=req.body.name;
        if(!id || !name){
            res.json({code: 0,data: "缺少参数！"});
            return
        }
        try{
            const classify=await Classify.select({name});
            if(classify[0] && classify[0].id != id){
                res.json({code: 0,data: "此分类名称已存在，请换个名称尝试！"});
                return
            };
            const data=await Classify.update(id,{name});
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
            const data=await Classify.delete(id);
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    }
}