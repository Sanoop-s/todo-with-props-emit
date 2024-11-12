<script setup>
import { router } from '../routes';

const onRouteTodo = () => {
    router.push({
        name: "todo"
    })
}
</script>
<template>
    <div>
        <h3>Home page</h3>
    </div>
    <div>
        <button type="button" @click="onRouteTodo">Manage todo list</button>
    </div>
</template>