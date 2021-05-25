<script>
    import { fade } from "svelte/transition"
    import { quintOut } from "svelte/easing"
</script>

<div id="doc-main" in:fade="{{easing: quintOut}}">
    <img src="./image/document/star.webp" alt="">
    <h1>hello miho</h1>
</div>

<style>
    #doc-main {
        background: linear-gradient(180deg, #050A14 0%, #0C1C2F 50%, #16354A 100%);
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
    }

    img {
        filter: drop-shadow(3px 3px 3px #050A14);
        mix-blend-mode: luminosity;
        border-radius: 50px;
        height: 512px;
        width: 512px;
    }

    h1 {
        font-family: "Raleway", sans-serif;
        text-transform: capitalize;
        padding-top: 50px;
        font-weight: 100;
        font-size: 50px;
        opacity: 0.75;
    }
</style>