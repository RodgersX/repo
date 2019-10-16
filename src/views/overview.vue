<template>
    <div class="overview">
        <Header></Header>

        <v-divider></v-divider>

        <!-- username and editing functions -->
        <v-card class="mx-auto" max-width="344" flat>
          <v-list-item>
            <v-list-item-avatar size="68" color="#D3D3D3" class="pa-5"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Username</v-list-item-title>
              <v-btn text color="#FF0000" class="btn">Edit Details</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-divider class="ma-10"></v-divider>

        <!-- website name and manage -->
        <v-card max-width="300"  class="flexed" outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ webname }}</v-list-item-title>
              <v-list-item-title class="text-center">Status</v-list-item-title>
              <v-list-tile-sub-title class="font-italic"><v-icon color="#64DD17">mdi-circle</v-icon>Online</v-list-tile-sub-title>
            </v-list-item-content>

          </v-list-item>
        </v-card>


        <!-- manage and visit website buttons -->
        <v-card max-width="250" class="mx-auto card1" flat>
          <v-form>
            <div max-width="200">
              <v-btn color="#696969" dark depressed class="buttons">Visit Website</v-btn>
            </div>
            <div>
              <v-btn color="#E3F2FD" depressed class="buttons">Manage Content
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
            </div>
          </v-form>
        </v-card>

        <!-- Recent activities -->
        <v-card max-width="250" class="mx-auto card2" color="transparent" flat>
          <v-list>
            <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="index"></v-divider>
            <v-list-item v-else :key="item.title">
              <v-list-item-avatar size="40" color="#D3D3D3" class="pa-5">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
              </v-list-item-content>
              <v-list-tile-content>
                <v-list-item-subtitle v-html="item.text"></v-list-item-subtitle>
              </v-list-tile-content>
            </v-list-item>
          </template>
            <v-spacer></v-spacer>
            <v-btn text color="#FF0000" class="btn">View all activities</v-btn>
          </v-list>
        </v-card>

        <!-- track current log in period -->
        <v-card flat class="card3">
          <v-list v-for="(track, index) in tracks" :key="index">
            <v-list-item>
              <v-list-item-title v-html="track.title"></v-list-item-title>
              <v-list-item-subtitle v-html="track.text"></v-list-item-subtitle>
            </v-list-item>
          </v-list>

        </v-card>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/header2.vue'
import Footer from '../components/footer2.vue'
export default {
  components: {
    Header,
    Footer
  },

  data() {
    return {
      webname: '{{ website name }}',

      //list items for recent activity
      items: [
          {header: 'Recent Activity'},
          {divider: true},
          { icon: true, title: 'You logged in', text: '36m'},
          {divider: true},
          { title: 'You uploaded {{ no. images }}', text: '3d' },
          {divider: true},
          { title: 'You uploaded {{ no. images }}', text: '17d' }
        ],

        tracks: [
          {title: 'You logged in', text: '36m'}
        ]        
    }
    

  }
}
</script>

<style scoped>
Header {
  margin: 6px 0 !important;
}

.pa-5 {
  margin: 10px !important;
}

.headline {
  margin-left: 80px !important;
}

.btn {
  text-transform: capitalize !important;
}

.mx-auto {
  display: flex;
  position: relative;
  margin-top: 3%;
  margin-left: 10%;
}

.ma-10 {
  margin-top: 70px !important;
}

.flexed {
  display: flex;
  position: relative;
  margin-top: -2%;
  margin-left: 12%;
}

.buttons {
  text-transform: capitalize !important;
  width: 100%;
  margin: 5px 0 !important;
}

.font-weight-bold {
  font-weight: bolder !important;
  font-size: 1.5rem !important; 
}

.card1 {
  max-width: 250px !important;
  display: flex;
  position: relative;
  margin-top: 2%;
  margin-left: 16%;
}

.card2 {
  max-width: 300px !important;
  display: flex;
  position: relative;
  margin-top: -17.9%;
  margin-left: 60%;
}

.card3 {
  width: 300px !important;
  display: flex;
  position: relative;
  margin-top: 8%;
  margin-left: 85%;
}

.pa-5 {
  margin: 0 5px !important;
}

.font-weight-bold {
  width: 100% !important;
}

</style>