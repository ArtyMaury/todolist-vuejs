import axios from "axios"

const hostname = 'https://go-back-sample.appspot.com'
// const hostname = 'http://localhost:8020'

axios.defaults.baseURL = hostname

export function GetAll(callback) {
  axios.get("/tasks").then(x => callback(x.data))
}

export function Get(id, callback) {
  axios.get("/tasks/"+id).then(x => callback(x.data))
}

export function Create(obj, callback) {
  axios.post("/tasks", JSON.stringify(obj)).then(x => callback(x.data))
}

export function Update(id, obj, callback) {
  axios.put("/tasks/"+id, JSON.stringify(obj)).then(x => callback(x.data))
}

export function Delete(id) {
  axios.delete("/tasks/"+id)
}

export function DeleteAll() {
  axios.delete("/tasks")
}
