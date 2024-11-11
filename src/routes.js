import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "./components/ToDoList.vue";

const routes = [
    { path: "/", redirect:'/to-do/Addtask' },
    { path: "/to-do/:heading", component:() => ToDoList}
]
 
export const router = createRouter({
    history: createWebHistory(),
    routes
}
)