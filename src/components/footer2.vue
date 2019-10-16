<template>
    <v-footer padless class="foot">
        <v-row>
            <v-col cols="20">
            <div class="left">Email or Call support</div>
            <v-spacer></v-spacer>
            
        </v-col>
        <v-col><div class="right">Copyright &copy; {{ new Date().getFullYear() }} Tejiri Productions. All rights reserved.</div></v-col>
        </v-row>
        
    </v-footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
div {
    /* width: 45%; */
}
.foot {
    text-align: center;
    margin-top: 10px !important;
}

.text-capitalize {
    text-transform: capitalize !important;
}

.left {
    display: flex;
    justify-content: flex-start;
}

.right {
    display: flex;
    justify-content: flex-end;
    margin: 0 !important;
}
</style>
