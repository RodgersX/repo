<template>
    <div class="register">
        <Header></Header>
        <div class="form"> 
            <v-form>
              <h1 class="ma-3">Your Account Created</h1>
              <p class="text-center">You may proceed to the dashboard</p>
              <div class="btn">
                  <v-btn depressed dense class="btn">Go to Dashboard</v-btn>
              </div>
            </v-form>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/header3.vue'
import Footer from '../components/footer1.vue' 
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>

.ma-3 {
  margin-bottom: 20px !important;
}
.form {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 13%;
}

p {
  text-align: center;
  padding-bottom: 30px !important;
}

.btn {
  font-weight: bolder;
  width:100%;
  border-radius: 4px !important;
  background: #696969 !important;
  text-transform: capitalize !important;
  color: white;
}
</style>