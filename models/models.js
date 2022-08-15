const Base=require('./base');
const Modules={
    User: function(){
        class User extends Base {
            constructor(props='user'){
                super(props);
            }
        };
        User=new User;
        return User;
    },
    Classify: function(){
        class Classify extends Base {
            constructor(props='classify'){
                super(props);
            }
        };
        Classify=new Classify;
        return Classify;
    },
    Article: function(){
        class Article extends Base {
            constructor(props='article'){
                super(props);
            }
        };
        Article=new Article;
        return Article;
    }
}
module.exports=Modules;