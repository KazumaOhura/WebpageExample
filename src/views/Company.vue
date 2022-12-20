<script setup lang="ts">
const list=[
    {
        name:"会社名",
        value:"○○株式会社"
    },
    {
        name:"設立日",
        value:"yyyy/mm/dd"
    },
    {
        name:"資本金",
        value:"xxx万円"
    },
    {
        name:"本社所在地",
        value:"東京都港区○○ビル○階"
    }
]
</script>

<template>
    <v-container>
    <v-row 
    justify="center">
    <v-col 
    cols="10"
    md="6">
    <v-table
    class="justify-center d-flex">
        <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr
             v-for="item in list"
             :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </tbody>
    </v-table>
    </v-col>
    </v-row>
    </v-container>
</template>

<style scoped>

/**
Tablet
*/
@media (max-width: 1023px){

}
/**
Phone
*/
@media (max-width: 599px){

}
</style>
