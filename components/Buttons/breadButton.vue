<template>
    <button class="btn" v-bind:class="[bgcolor]" v-bind:style="{marginLeft:margin}">{{ text }}</button>
</template>

<script>
export default {
    name : "breadButton",
    props : ['text', 'bgcolor', 'margin']
}
</script>

<style>
.btn{
    width : 155px;
    height : 50px;
    border-top-left-radius: 27px;
    border-top-right-radius: 27px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-family: 'QsMedium';
    font-size: 18px;
}
</style>