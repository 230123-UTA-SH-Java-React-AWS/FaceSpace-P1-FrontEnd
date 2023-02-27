export interface PostModel{
  id:number,
  writtenText:string,
  profileId:number
}

export interface ALPM{
  Post:PostModel[]
}