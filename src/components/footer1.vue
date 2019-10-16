<template>
    <v-footer absolute padless class="foot">
        <v-col cols="20">Have an account?
            <v-btn text to="/login" class="text-capitalize">Sign in</v-btn>
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
