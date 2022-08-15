const knex=require('./knex');
class Base{
    constructor(props){
        this.table=props;
    }
    all(){
        return knex(this.table).select()
    }
    select(params){
        return knex(this.table).select().where(params)
    }
    insert(params){
        return knex(this.table).insert(params)
    }
    update(id,params){
        return knex(this.table).where('id','=',id).update(params)
    }
    delete(id){
        return knex(this.table).where('id','=',id).del()
    }
    filterAll(id,params){
        if(params == "%%"){
            return knex(this.table).whereNull(id).orWhere(id,"")
        }
        return knex(this.table).where(id,'like',params)
    }
    join(tabel,first,second){
        return knex(tabel).join(this.table,this.table+first,'=',tabel+second).select()
    }
}
module.exports=Base;