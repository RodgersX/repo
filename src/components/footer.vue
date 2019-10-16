<template>
    <v-footer absolute padless class="foot">
        <v-col cols="20">Don't have an account?
            <v-btn text to="/signup" class="text-capitalize">Sign up</v-btn>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.foot {
    text-align: center;
}

.text-capitalize {
    text-transform: capitalize !important;
}
</style>
