<template>
    <div class="library-media">
        <Header></Header>

        <div class="pa-12 text-center">
            Drop files here or select files from computer
        </div>

        <div class="library">
            <v-card>

                <!-- tab names and reference ids -->
                <v-tabs v-model="tab" color="#FF0000" centered text>
                    <v-tabs-slider></v-tabs-slider>
                    <div class="media-lib">Media Library</div>
                    <v-spacer></v-spacer>
                    <v-tab href="#tab-1">
                        Image View
                    </v-tab>

                    <v-tab href="#tab-2">
                        Folder View
                    </v-tab>
                </v-tabs>

                <!-- image view tab items -->
                <v-tabs-items v-model="tab">
                    <v-tab-item id="tab-1">
                        <v-card flat>
                            <v-layout row class="pa-4">
                                <v-flex v-for="(card, index) in cards" :key="index">
                                <v-card flat :height="height" :width="width" class="ma-3">
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

                    <!-- folder view items -->
                    <v-tab-item id="tab-2">
                        <v-card flat>
                            <v-layout row class="pa-4">
                                <v-flex v-for="(folder, index) in folders" :key="index">
                                <v-card :height="height" :width="width" class="ma-3">
                                    <v-icon x-large class="folder">mdi-folder</v-icon>
                                    <v-card-actions>
                                        <v-card-text class="display-4">{{ folder.name }}</v-card-text>
                                        <v-spacer></v-spacer>

                                        <!-- dropdown menu for the context menu -->
                                        <v-menu v-model="value" close-on-click close-on-content-click offset-y>
                                            <template v-slot:activator="{ on }">
                                                <v-btn color="#ffff" depressed v-on="on">
                                                    <v-icon @click="index = !index">mdi-dots-vertical</v-icon>
                                                </v-btn>
                                            </template>
                                            <v-list>
                                                <v-list-item v-for="(item, index) in dmenu" :key="index">
                                                    <v-list-item-title v-if="!index">{{ item.title }}</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-card-actions>
                                </v-card>
                                
                                </v-flex>

                                <!-- add folder functoinality -->
                                <div class="add-folder">
                                    <v-icon color="#D3D3D3" class="folder folder-plus">mdi-folder-plus</v-icon>
                                    Create Folder
                                </div>
                            </v-layout>
                            <v-card-actions>
                                
                            </v-card-actions>                                                        
                        </v-card>
                    </v-tab-item>   
                </v-tabs-items>
            </v-card>            
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
        width: 200,
        show:false,
        tab: null,
        text: 'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

        dmenu: [
            { title: 'Give Permissions' },
            { title: 'Settings' },
            { title: 'Delete' }
        ],

        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
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
        ],

        folders: [
            {name: 'Lorem Ipsum'},
            {name: 'Lorem Dolor'},
            {name: 'Lorem Dolor'},
            {name: 'Lorem Ipsum'}
        ]
      }
    }
}

</script>

<style scoped>

.pa-4 {
    padding: 5rem !important;
}

.media-lib {
    display: flex;
    align-items: center;
    color: black;
    padding-left: 10px;
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

.folder {
    width: 9.4rem !important;
    height: 5.6rem !important;
    font-size: 5.6rem !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-folder {
    height: 9.9rem;
    border: 2px dashed #E0E0E0;
    color: #E0E0E0;
    width: 12.5rem;
    text-align: center;
    margin-top: 5px;
    padding-top: 3px;
}

.folder-plus {
    margin-bottom: 1.3rem !important;
}

.display-4 {
    font-size: 12px;
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