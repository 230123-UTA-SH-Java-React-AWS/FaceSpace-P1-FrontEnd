export interface PostModel{
  id:number,
  writtenText:string,
  profileId:number
}

export interface PostModel3{
  Post:{step:PostModel[]}
}