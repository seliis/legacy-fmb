<script>
    import { fade } from "svelte/transition"
    import { quintOut } from "svelte/easing"

    import LogBook from "../components/logbook.svelte"

    async function getData() {
        const r = await fetch("./data/aviators.json")
        return await r.json()
    }
</script>

<div id="aviators" in:fade="{{easing: quintOut}}">
    {#await getData() then arr}
        {#each arr as table, i}
            <LogBook
                delay = {250 * i}
                name = {table.name}
                bort = {table.bort}
                time = {table.time}
                sortie = {table.sortie}
                air = {table.air}
                gnd = {table.gnd}
                dead = {table.dead}
            />
        {/each}
    {/await}
</div>

<style>
    #aviators {
        overflow-y: scroll;
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>