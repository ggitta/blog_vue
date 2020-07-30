<template>
    <div class="d-flex flex-row">
        <Left></Left>
        <Pagecenter></Pagecenter>
        <div>
            <div>
                <router-link to="/home">home</router-link>
            </div>
            <div>
                <router-link to="/blogs">blogs</router-link>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
import Left from "@/components/page/left";
import Pagecenter from "@/components/page/center";
export default {
    name: "index",
    components: {Left, Pagecenter},
}
</script>

<style scoped>

</style>
