<template>
    <div class="HotInformation_box">
        2
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
    .HotInformation_box::-webkit-scrollbar{
        display: none;
    }
    .HotInformation_box{
        width: 100%;
        height:calc(100% - 1rem);
        overflow-x: hidden;
        overflow-y: auto;
    }

</style>