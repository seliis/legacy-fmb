<script>
    import { fade } from "svelte/transition"
    import { quintOut } from "svelte/easing"

    import DocMenu from "../components/document/doc-menu.svelte"
    import DocMain from "../components/document/doc-main.svelte"
    import DocList from "../components/document/doc-list.svelte"
    import DocPost from "../components/document/doc-post.svelte"

    export let params = {}
</script>

<div id="document" in:fade="{{easing: quintOut}}">
    <DocMenu/>
    {#if params.chapter == null}
        <DocMain/>
    {:else if params.chapter == "posting"}
        <DocPost/>
    {:else}
        <DocList/>
    {/if}
</div>

<style>
    #document {
        grid-template-columns: 400px 1fr;
        grid-template-rows: 1fr;
        position: relative;
        overflow: hidden;
        display: grid;
        height: 100%;
        width: 100%;
    }
</style>