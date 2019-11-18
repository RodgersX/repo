<template>
<div class="main">
  <Header></Header>
  <div class="form"> 
      <form @submit.prevent="login">
        <h1 class="ma-3">Log in to Dashboard</h1>
        <div>
          <v-text-field v-model="email" outlined dense type="email" placeholder="you@domain.com"></v-text-field>
        </div>
        
        <div>
          <v-text-field v-model="password" outlined dense placeholder="password" type="password"></v-text-field>
        </div>

        <div>
          <v-btn depressed class="btn" type="submit">Continue</v-btn>
        </div>
      </form>
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

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login: function() {
      let email = this.email
      let password = this.password

      this.$store.dispatch('login', {email, password})
      .then(() => {
        this.$router.push('/overview')
      })
      .catch((err) => {
        return err
      })
    }
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