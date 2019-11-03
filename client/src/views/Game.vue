<template>
<div>
    <h1 class="is-size-1">
        This is the Game Page
    </h1> 

    <div class="columns">
        <div class="column is-one-quarter">
            
            <ul class="panel">
                <p class="panel-heading">
                    Player
                </p>
                <li v-for="(p, i) in game.Players " :key="i" class="panel-block is-active">
                    <span class="panel-icon">
                    <i class="fas fa-user" aria-hidden="true"></i>
                    </span>
                    {{p.name}}
                </li>
            </ul>

        </div>
        <div class="column is-one-quarter">
            
            <ul class="panel">
                <p class="panel-heading">
                    Quotes
                </p>
                <li v-for="(p, i) in server.Caption_Deck " :key="i" class="panel-block is-active">
                    <span class="panel-icon">
                    <i class="fa fa-comments" aria-hidden="true"></i>
                    </span>
                    {{p.quote}}
                </li>
            </ul>

        </div>
    </div>
    <div class="columns">
        <div class="column is-one-quarter">
            
            <ul class="panel">
                <p class="panel-heading">
                    Quotes maybe placed to side to allow for game screen
                </p>
                <li v-for="(p, i) in server.Caption_Deck " :key="i" class="panel-block is-active">
                    <span class="panel-icon">
                    <i class="fa fa-comments" aria-hidden="true"></i>
                    </span>
                    {{p.quote}}
                </li>
            </ul>

        </div>
        <div class="column">
            3rd column
        </div>
    </div>
</div>
</template>

<script>
import { Game_Client, Game_Server } from "../models/Game";

export default {
    data: ()=> ({
        game: Game_Client,
        server: Game_Server

    })
}
</script>

<style>

</style>