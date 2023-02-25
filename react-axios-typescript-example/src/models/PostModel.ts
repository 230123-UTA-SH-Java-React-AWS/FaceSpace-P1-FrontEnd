export interface PostModel{
  id:number,
  writtenText:string,
  profileId:number
}

export interface ALPM{
  [x: string]: any
  Post:PostModel[]
}