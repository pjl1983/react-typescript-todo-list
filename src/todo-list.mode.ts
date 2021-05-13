export interface AppProps {
  handler: Function
}

export interface AppState {
  list: List[];
}

export interface List {
  title: string,
  completed: boolean
}
