<script>
    const menus = [
        "aviators",
        "training",
        "campaign",
        "document",
        "database"
    ]

    let active = false

    function ChangePage(Target) {
        active = !active
        window.location.href = "#/" + Target
    }

    function LoadHome() {
        if (active) {
            active = !active
        }
        window.location.href = "#"
    }
</script>

<header>
    <h1 on:click={LoadHome}>
        full metal bitches
    </h1>
    <ul class:active>
        {#each menus as menu}
            <li on:click={() => ChangePage(menu)}>
                {menu}
            </li>
        {/each}
    </ul>
    <button class:active on:click={() => active = !active}>
        <svg width="25" height="25" viewBox="0 0 100 100">
            <path id="top" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
            <path id="mid" d="M 20,50 H 80"/>
            <path id="btm" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
        </svg>
    </button>
</header>

<style>
    header {
        font-family: "Raleway", sans-serif;
        justify-content: space-between;
        background-color: #010204;
        align-items: center;
        padding: 0 7.5%;
        display: flex;
        z-index: 2;
    }

    h1 {
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 700;
        font-size: 20px;
        cursor: pointer;
    }

    ul {
        left: 0;
        top: 75px;
        width: 100%;
        height: 100%;
        display: none;
        padding: 7.5% 0;
        position: absolute;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        background-color: #010204;
    }

    ul.active {
        display: flex;
    }

    li {
        text-transform: uppercase;
        letter-spacing: 2.5px;
        border-radius: 5px;
        text-align: left;
        list-style: none;
        font-weight: 100;
        cursor: pointer;
        font-size: 50px;
        padding: 10px;
        width: 85%;
    }

    li:hover {
        background-color: rgba(255, 3, 62, 0.75);
        color: #010204;
    }

    button {
        background-color: transparent;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        border: none;
    }

    path {
        fill: none;
        stroke-width: 5;
        stroke: #D0D0D0;
        transition: stroke-dasharray 1000ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 1000ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    #top {
        stroke-dasharray: 60 207;
        stroke-width: 5;
    }

    #mid {
        stroke-dasharray: 60 60;
        stroke-width: 5;
    }
    
    #btm {
        stroke-dasharray: 60 207;
        stroke-width: 5;
    }

    .active #top {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 5;
    }

    .active #mid {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 5;
    }

    .active #btm {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 5;
    }

    @media only screen and (max-width: 1600px) {
        header {
            flex-direction: row-reverse;
        }

        h1 {
            letter-spacing: 2.5px;
            font-size: 14px;
        }

        li {
            font-size: 28px;
        }
    }
</style>