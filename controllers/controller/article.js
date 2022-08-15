const Models=require('../../models/models');
const Article=new Models.Article;
const Classify=new Models.Classify;
module.exports={
  index: async function(req,res,next){
    res.locals.title="Article";
    const classify=await Classify.all();
    res.locals.classify=classify;
    let article=await Article.join("classify",".classify_id",".id");
    article=article.filter(data => {
      return data.created_at.getTime() >= new Date() - 24 * 60 * 60 * 1000 * 20;
    });
    if(req.query.classify_id){
        const classify_id=req.query.classify_id;
        try{
          data=article.filter(data => data.classify_id==classify_id);
          res.locals.article=data;
          res.render('show/article.tpl',res.locals);
        }catch(e){
          res.json({code: 0,data: e});
        };
        return
    }
    try{
        res.locals.article=article;
        res.render('show/article.tpl',res.locals);
    }catch(e){
        res.json({code: 0,data: e});
    }
  },
  show: async function(req,res,next){
    try{
      const visits=Number(req.query.visits)+1;
      const id=req.params.id;
      await Article.update(id,{visits});
      const article=await Article.join("classify",".classify_id",".id");
      data=article.filter(data => data.id==id);
      res.locals.article=data;
      const classify=await Classify.all();
      res.locals.classify=classify;
      res.locals.title="ArticleShow";
      res.render('show/articleShow.tpl',res.locals);
    }catch(e){
      res.json({code: 0,data: e});
    }
  },
}