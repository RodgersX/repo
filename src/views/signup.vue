<template>
<div class="main">
  <Header></Header>
    <div class="form">
      <form @submit.prevent="signup">
        <h1 class="ma-3">Sign up to Dashboard</h1>
        <div>
          <v-text-field v-model="fname" outlined dense placeholder="First name" required></v-text-field>
        </div>
        <div>
          <v-text-field v-model="lname" outlined dense placeholder="last name" required></v-text-field>
        </div>
        <div>
          <v-text-field v-model="email" outlined dense placeholder="you@domain.com" type="email" required></v-text-field>
        </div>
        <div>
          <v-text-field v-model="password" outlined dense placeholder="password" type="password"></v-text-field>
        </div>
        <div>
          <v-text-field v-model="confirmPassword" outlined dense placeholder="confirm password" type="password"></v-text-field>
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
import Footer from '../components/footer1.vue'
export default {

  //AUTHENTICATION WITH VUEX
  props: ['nextURL'],
  components: {
    Header,
    Footer
  },

  data() {
    return {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },

  methods: {
    signup:function() {
      let data = {
        firstname: this.fname,
        lastname: this.lname,
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('register', data)
      .then(() => {
        this.$router.push('/register')
      }) .catch((err) => {
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
  margin-top: 5%;
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