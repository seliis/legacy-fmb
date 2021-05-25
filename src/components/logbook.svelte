<script>
    import { slide } from "svelte/transition"
    import { quintOut } from "svelte/easing"

    export let delay
    export let name
    export let bort
    export let time
    export let sortie
    export let air
    export let gnd
    export let dead
</script>

<div class="logbook" in:slide="{{delay:delay, easing: quintOut}}">
    <div class="container">
        <div class="wrap">
            <img src="./image/logbook/{name}.webp" alt="N/A">
        </div>
        <div class="info">
            <div class="upper">
                <h1>{name}#{bort}</h1>
                <p>
                    {Math.trunc(time/60)}H {time%60}M
                </p>
            </div>
            <div class="lower">
                <div class="stat">
                    <i class="fas fa-plane-departure"></i>
                    <h2>{sortie}</h2>
                </div>
                <div class="stat">
                    <i class="fas fa-crosshairs"></i>
                    <h2>{air}</h2>
                </div>
                <div class="stat">
                    <i class="fas fa-bomb"></i>
                    <h2>{gnd}</h2>
                </div>
                <div class="stat">
                    <i class="fas fa-skull"></i>
                    <h2>{dead}</h2>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .logbook {
        font-family: "Quicksand", sans-serif;
        justify-content: center;
        align-items: center;
        position: relative;
        display: flex;
        height: 25%;
    }

    .container {
        background: linear-gradient(315deg, #C31432, #240B36);
        filter: grayscale(25%) opacity(100%) contrast(125%);
        grid-template-columns: 15% 1fr;
        grid-template-rows: 1fr;
        padding-right: 25px;
        border-radius: 10px;
        overflow: hidden;
        display: grid;
        height: 95%;
        width: 95%;
    }

    .info {
        grid-template-rows: 50% 1fr;
        grid-template-columns: 1fr;
        display: grid;
    }

    .upper, .lower {
        justify-content: space-between;
        align-items: center;
        display: flex;
    }

    .stat {
        opacity: 0.75;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .wrap {
        justify-content: center;
        align-items: center;
        display: flex;
    }

    img {
        filter: drop-shadow(3px 3px 25px #FD2F4A) opacity(75%);
        mix-blend-mode:luminosity;
        border-radius: 50%;
        height: 150px;
        width: 150px;
        z-index: -1;
    }

    h1 {
        text-transform: uppercase;
        font-weight: 300;
        color: #FD2F4A;
        font-size: 36px;
    }

    i {
        font-size: 50px;
    }

    h2 {
        font-family: "Roboto Mono", monospace;
        padding-left: 25px;
        font-weight: 100;
        font-size: 50px;
    }

    p {
        color: #010204;
        font-weight: 300;
        font-size: 36px;
    }

    @media only screen and (max-width: 1600px) {
        .logbook {
            height: 50%;
        }

        .container {
            background: linear-gradient(0deg, #C31432, #240B36);
            grid-template-columns: 100%;
            grid-template-rows: 55% 1fr;
            padding-right: 0;
        }

        .info {
            grid-template-rows: 25% 1fr;
        }

        .upper {
            justify-content: center;
            flex-direction: column;
        }

        .lower {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            display: grid;
        }

        .stat {
            justify-content: center;
        }

        h1 {
            font-weight: 700;
            font-size: 20px;
        }

        h2 {
            font-weight: 400;
            font-size: 20px;
        }

        i {
            font-size: 18px;
        }

        p {
            font-weight: 700;
            font-size: 18px;
        }
    }
</style>