<template>
    <div>
        <div
        v-for="item in list"
        :key="item.id"
        @click="qg(item.collect_id,item.teacher_id)"
        >
        {{item.teacher_name}}
        </div>
    </div>
</template>

<script>
import {  } from '@/utils/api'
export default {
    data() {
        return {
            list:[]
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
}
</script>
<style lang="scss" scoped>
    
</style>