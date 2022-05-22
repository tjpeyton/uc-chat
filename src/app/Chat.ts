export interface Message {
  creationDate: number,
  creationDateString: string,
  text: string,
  owner: string
}

export interface Chat {
  creationDate: number,
  creationDateString: string,
  creator: any,
  name: string,
  messages: Array<Message>
}
