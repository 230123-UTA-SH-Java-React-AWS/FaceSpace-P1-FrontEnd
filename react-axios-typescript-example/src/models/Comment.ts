export interface Comment{
  id: number,
  writtenText: string,
  profileId: number,
  postId: number
}

export interface Comment2{
  Comments:{step:Comment[]}
}