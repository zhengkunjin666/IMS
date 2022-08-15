const Models=require('../models/models');
const Article=new Models.Article;
module.exports={
    index: async function(req,res,next){
        try{
            const data=await Article.join("classify",".classify_id",".id");
            let index=1;
            data.forEach(data => {
                data.index=index;
                index++;
            });
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    show: async function(req,res,next){
        const id=req.params.id;
        try{
            const article=await Article.join("classify",".classify_id",".id");
            data=article.filter(data => data.id==id);
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    insert: async function(req,res,next){
        const title=req.body.title;
        const content=req.body.content;
        const classify_id=req.body.classify_id;
        const visits=0;
        const created_at=new Date();
        if(!title || !content || !classify_id){
            res.json({code: 0,data: "缺少参数！"});
            return
        };
        try{
            const data=await Article.insert({title,content,classify_id,visits,created_at});
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    update: async function(req,res,next){
        const id=req.params.id;
        const title=req.body.title;
        const content=req.body.content;
        const classify_id=req.body.classify_id;
        const updated_at=new Date();
        if(!id || !title || !content || !classify_id){
            res.json({code: 0,data: "缺少参数！"});
            return
        }
        try{
            const data=await Article.update(id,{title,content,classify_id,updated_at});
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
            const data=await Article.delete(id);
            res.json({code: 200,data: data});
        }catch(e){
            res.json({code: 0,data: e});
        }
    }
}