<template>
    <div class="activities">
        <Header></Header>
            <v-row>
                <v-col cols="12" sm="6" offset-sm="3">
                <v-card flat class="text-center">
                    <v-list two-line>
                    <template v-for="(activity, index) in activities">
                        <v-subheader v-if="activity.header" :key="activity.header">{{ activity.header }}</v-subheader>
                        <v-divider v-else-if="activity.divider" :key="index"></v-divider>
                        <v-list-item v-else :key="activity.title">
                        <v-list-item-avatar size="40" color="#D3D3D3" class="pa-5">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="activity.title"></v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-subtitle v-html="activity.text"></v-list-item-subtitle>
                        </v-list-item-content>
                        
                        </v-list-item>
                    </template>
                    </v-list>
                </v-card>
                </v-col>
            </v-row>

        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/header2.vue'
import Footer from '../components/footer2.vue'
export default {
    components: {
        Header,
        Footer,
    },

    data() {
        return {
            activities: [
                {header: 'September 2019'},
                {title: 'You logged in', text: '36m'},
                {divider: true },
                {title: 'You uploaded {{ no. images }}', text: '3d'},
                {divider: true },
                {title: 'You uploaded {{ no. images }}', text: '17d'},
                {header: 'July 2019'},
                {title: 'You uploaded {{ no. images }}', text: '3d'},
                {divider: true },
                {title: 'You uploaded {{ no. images }}', text: '17d'},
                {divider: true },
                {title: 'You uploaded {{ no. images }}', text: '24d'},
                {divider: true },
                {title: 'You uploaded {{ no. images }}', text: '24d'}
            ]
        }
    }
        
    
}
</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>