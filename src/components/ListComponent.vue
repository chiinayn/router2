<template>
    <div v-for="(a,i) in blogs" :key="a">
        <router-link to="/detail/1" :blogs="blogs"><h5>{{ blogs[i].title }}</h5></router-link>
        <!-- <h5 @click="$router.push('/detail/i')" :blogs="blogs">{{ blogs[i].title }}</h5> -->
        <!-- <h5>{{ blogs[i].title }}</h5> -->
        <p>{{ blogs[i].content }}</p>
        <!-- <h5>{{ blogs[0] }}</h5> -->

    </div>
</template>

<script>
export default {
    name : 'listComponent',
    props : {
        blogs : Array,
    }

}
</script>

<style>

</style>