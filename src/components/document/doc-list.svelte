<script>
    import { fade } from "svelte/transition"
    import { quintOut } from "svelte/easing"

    import DocPart from "./doc-part.svelte"

    async function getData() {
        const r = await fetch("./data/doc-list.json")
        return await r.json()
    }
</script>

<div id="doc-list" in:fade="{{easing: quintOut}}">
    {#await getData() then arr}
        {#each arr as table, i}
            <DocPart
                delay = {100 * i}
                subject = {table.subject}
                date = {table.date}
                author = {table.author}
                summary = {table.summary}
            />
        {/each}
    {/await}
</div>

<style>
    #doc-list {
        background-color: #112143;
        overflow-y: scroll;
        position: relative;
        padding-top: 20px;
        height: 100%;
        width: 100%;
    }
</style>