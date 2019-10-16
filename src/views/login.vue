<template>
<div class="main">
  <Header></Header>
    <div class="form"> 
        <v-form>
          <h1 class="ma-3">Log in to Dashboard</h1>
          <div>
            <v-text-field outlined dense placeholder="you@domain.com"></v-text-field>
          </div>
          
          <div>
            <v-text-field outlined dense placeholder="password"></v-text-field>
          </div>
          <div>
            <v-btn depressed class="btn">Continue</v-btn>
          </div>
        </v-form>
    </div>
  <Footer></Footer>
  
</div>
  
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
  components: {
    Header,
    Footer
  },

  data: () => {

  }
}
</script>

<style scoped>
.ma-3 {
  margin-bottom: 30px !important;
}

.form {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 10%;
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