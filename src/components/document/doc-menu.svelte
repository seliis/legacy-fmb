<script>
    function Navigate(url) {
        window.location.href="#/document" + url
    }

    const menus = [
        {
            "name": "intro page",
            "url": ""
        },
        {
            "name": "air warfare history",
            "url": "/history"
        },
        {
            "name": "aeronautical physics",
            "url": "/physics"
        }
    ]
</script>

<div id="doc-menu">
    <h1 on:click={() => Navigate("/posting")}>
        posting
    </h1>
    <ul>
        {#each menus as menu}
            <li on:click={() => Navigate(menu.url)}>
                {menu.name}
            </li>
        {/each}
    </ul>
</div>

<style>
    #doc-menu {
        font-family: "Quicksand", sans-serif;
        background-color: #050A14;
        position: relative;
        height: 100%;
        width: 100%;
    }

    h1 {
        background: linear-gradient(0deg, #050A14 0%, #0C1C2F 50%, #16354A 100%);
        text-shadow: 1px 1px 3px #010204;
        text-transform: uppercase;
        margin: 30px 30px 0 30px;
        letter-spacing: 3px;
        border-radius: 10px;
        text-align: center;
        position: relative;
        font-weight: 500;
        color: #D0D0D0;
        cursor: pointer;
        font-size: 16px;
        padding: 30px;
    }

    h1:hover {
        background: linear-gradient(180deg, #FD2F4A 0%, #C71230 50%, #92001D 100%);
        color: #010204;
    }

    ul {
        position: relative;
        font-size: 30px;
        padding: 30px;
    }

    li {
        text-transform: capitalize;
        list-style: none;
        font-weight: 500;
        cursor: pointer;
        padding: 5px;
    }

    li:hover {
        color: #FD2F4A;
    }
</style>