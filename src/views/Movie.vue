<script setup lang="ts"></script>

<template>
<v-container 
fluid>
    <v-row
    justify="center">
        <v-col
        cols="12"
        md="4"
        v-for="i of 1"
        :key="i">
            <v-card
            height="400">
                <iframe 
                width="100%" 
                height="100%"
                src="https://www.youtube.com/embed/xcJtL7QggTI" 
                title="Sony 4K Demo: Another World" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                </iframe>
            </v-card>
        </v-col>
    </v-row>
</v-container>

</template>

<style>
/**
PC
*/

/**
Tablet
*/
@media (max-width: 1023px){
}
/**
Phone
*/
@media (max-width: 599px){
}</style>
