<script>
    import { slide } from "svelte/transition"
    import { quintOut } from "svelte/easing"

    export let delay
    export let author
    export let subject
    export let date
    export let summary
</script>

<div class="doc-part" in:slide="{{delay:delay, easing: quintOut}}">
    <div class="container">
        <img src="./image/logbook/{author}.webp" alt="N/A">
        <div class="description">
            <div class="upper">
                <h1>
                    {subject}
                </h1>
                <div class="info">
                    <h2>
                        {date}
                    </h2>
                    <h3>
                        {author}
                    </h3>
                </div>
            </div>
            <h4>
                {summary}
            </h4>
        </div>
    </div>
</div>

<style>
    .doc-part {
        justify-content: center;
        align-items: center;
        position: relative;
        display: flex;
        height: 15%;
    }

    .container {
        grid-template-columns: 150px 1fr;
        background-color: #050A14;
        grid-template-rows: 1fr;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        display: grid;
        height: 95%;
        width: 95%;
    }

    .container:hover {
        transform: scale(1.01);
    }

    .description {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
        display: grid;
        height: 100%;
        width: 100%;
    }

    .upper {
        justify-content: space-between;
        padding-right: 50px;
        align-items: center;
        display: flex;
    }

    .info {
        justify-content: space-evenly;
        flex-direction: column;
        align-items: flex-end;
        display: flex;
    }

    img {
        filter: grayscale(25%) contrast(125%);
        border-radius: 50%;
        margin: auto;
        height: 70px;
        width: 70px;
    }

    h1 {
        color: #FD2F4A;
        font-weight: 700;
        font-size: 20px;
    }

    h2 {
        font-family: "Quicksand", sans-serif;
        font-weight: 700;
        font-size: 16px;
    }

    h3 {
        font-family: "Quicksand", sans-serif;
        text-transform: uppercase;
        color: #E2B640;
        font-weight: 700;
        font-size: 16px;
    }

    h4 {
        font-weight: 700;
        font-size: 16px;
    }
</style>