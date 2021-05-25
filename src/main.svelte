<script>
    import Router from "svelte-spa-router";
    import { wrap } from "svelte-spa-router/wrap"
    
    // Components
    import Header from "./components/header.svelte"

    // Pages
    import Home from "./routes/home.svelte"
    import Aviators from "./routes/aviators.svelte"
    import Training from "./routes/training.svelte"

    // Routes
    const routes = {
        "/": Home,
        "/aviators": Aviators,
        "/training": Training,
        "/document/:chapter?/:index?": wrap({
            asyncComponent: () => import("./routes/document.svelte")
        })
    }
</script>

<main>
    <Header/>
    <section>
        <Router {routes}/>
    </section>
</main>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body) {
        font-family: "Noto Sans KR", sans-serif;
        background-color: #010204;
        overflow: hidden;
        color: #D0D0D0;
        cursor: default;
        height: 100vh;
        width: 100vw;
    }

    main {
        width: 100%;
        height: 100%;
        display: grid;
        overflow: hidden;
        position: relative;
        grid-template-columns: 1fr;
        grid-template-rows: 75px 1fr;
    }

    section {
        overflow: hidden;
    }
</style>