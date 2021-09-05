class User{
    constructor(id,username,name,lastName,email,password,githubUser,type,avatar,cursos,followers){
        this.id=id,
        this.username=username,
        this.name=name,
        this.lastName=lastName,
        this.email=email,
        this.password=password,
        this.githubUser=githubUser,
        this.type=type,
        this.avatar=avatar,
        this.cursos=cursos,
        this.followers=followers     
    }    
}

module.exports=User