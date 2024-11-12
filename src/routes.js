import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "./components/ToDoList.vue";
import Home from "./components/Home.vue";

const routes = [
    { path: "/",component:Home, name:"home" },
    { path: "/to-do", component:() => ToDoList,name:'todo'}
]
 
export const router = createRouter({
    history: createWebHistory('todo-with-props-emit'),
    routes
}
)