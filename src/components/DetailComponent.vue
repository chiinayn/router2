<template>
    <!-- {{ $route.params.id }} -->
    <div>
        <h4>詳細ページです。</h4>
        <h5>{{ blogs[$route.params.id].title }} </h5>
        <p>{{ blogs[$route.params.id].content }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props : {
        blogs : Array,
    }

}
</script>

<style>

</style>