export interface PostModel{
  id:number,
  writtenText:string,
  profileId:number
}

export interface PostModelArray{
  Post:PostModel[]
}