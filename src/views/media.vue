<template>
    <div class="library-media">
        <Header></Header>

        <div class="pa-12 text-center">
            Drop files here or select files from computer
        </div>

        <div class="library">
            <v-tabs  v-model="tab" class="elevation-2" right color="#FF0000">
                <v-spacer></v-spacer>
                <v-tab v-for="i in tabs" :key="i" :href="`#tab-${i.name}`" class="text">
                    {{ i.name }}
                </v-tab>

                <v-tab-item v-for="i in tabs" :key="i" :value="'tab-' + i.name" class="item">
                    <v-card flat>
                        <v-layout row class="pa-4">
                            <v-flex v-for="(card, index) in cards" :key="index">
                            <v-card  flat :height="height" :width="width" class="ma-3">
                                <v-img :height="height" :width="width" :src="card.src"></v-img>
                            </v-card>
                            </v-flex>
                        </v-layout>
                        <v-card-actions>
                            <v-btn icon @click="show = !show" color="#FF0000" class="pa-10">
                                See More
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="show">
                                <v-layout row class="pa-4">
                                    <v-flex v-for="(card, index) in hidden" :key="index">
                                        <v-card  flat :height="height" :width="width" class="ma-3">
                                            <v-img :height="height" :width="width" :src="card.src"></v-img>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </div>
        
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/header2.vue'
import Footer from '../components/footer2.vue'
export default 
{
  components: {
    Header,
    Footer
  },

  data() 
  {
      return {
        height: 150,
        width: 150,
        show:false,


        tab: null,
        text: 'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tabs: [
            {name:'Image View'},
            {name:'Folder View'}
        ],

         cards: [
            {name: 'image1', src: '/kip.jpg'},
            {name: 'image2', src: '/kip.jpg'},
            {name: 'image3', src: '/kip.jpg'},
            
        ],

        hidden: [
            {name: 'image5', src: '/kip.jpg'},
            {name: 'image6', src: '/kip.jpg'},
            {name: 'image6', src: '/kip.jpg'},
            {name: 'image6', src: '/kip.jpg'},
            {name: 'image6', src: '/kip.jpg'},
            {name: 'image6', src: '/kip.jpg'},
            {name: 'image6', src: '/kip.jpg'}
        ]


        }

    }
}

</script>

<style scoped>
.pa-4 {
    padding: 4rem !important;
}

.pa-12 {
    border: 2px dashed #D3D3D3;
    width: 45% !important;
    height: 8rem !important;
    margin: 40px !important;
    padding: 10px 15px !important;
    text-align: center;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    left: 22%;
    color: #D3D3D3;
}

.pa-10 {
    /* padding-left: 3rem !important; */
    display: flex;
    justify-content: flex-start;
}

.library {
    width: 50% !important;  
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    left: 23%;
    border: 1px solid #D3D3D3;
    box-shadow: 3px #D3D3D3;
} 

.text {
    text-transform: capitalize !important;
    display: flex;
}

.item {
    margin: 5px !important;
}

.ma-3 {
    margin:10px 0 !important;
}
</style>