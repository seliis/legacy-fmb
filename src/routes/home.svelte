<script>
    import { fade } from "svelte/transition"
    import { quintOut } from "svelte/easing"
</script>

<div id="home" in:fade="{{easing: quintOut}}">
    <img id="front" src="./image/home/1.webp" alt="">
    <div class="container" style="height: 50%;">
        <i id="anchor" class="fas fa-anchor"></i>
        <h1>welcome aboard</h1>
    </div>
    <div class="container lh" style="height: 50%;">
        <h1 style="color: #FD2F4A;">Who we are?</h1>
        <p>
            VFA-314 Full Metal Bitches 는
            전투항공 시뮬레이터를 통해 군사 비행과 전술을 연구합니다.
            실제의 전투조종사가 거치는 일련의 훈련과정 그리고
            전투 환경에서 이들이 겪는 한계와 어려움을
            모사함으로써 실제에 근접한 전투 비행 경험을
            공유하는 것이 우리의 궁극적인 목표입니다.
        </p>
    </div>
    <img id="team" src="./image/home/2.webp" alt="">
    <div class="container" style="height: 100%;">
        <h2>
            우리는 철저히 팀으로서의 목표를 추구합니다.
        </h2>
    </div>
    <div class="container rh" style="height: 50%;">
        <h1 style="color: #FD2F4A;">
            How to Join?
        </h1>
        <p>
            VFA-314 Full Metal Bitches 는 체계적이고 효과적인
            비행 전술을 연구하고자 하는 모든 가상 파일럿에게 열려 있습니다.
            비행대 참여를 위해서는 조종 훈련 교범을 바탕으로
            진행되는 정규의 교육 과정을 수료해야 합니다.
        </p>
    </div>
    <div class="container lh" style="height: 50%;">
        <h1 style="color: #FD2F4A;">
            Flight Training Course
        </h1>
        <p>
            전투 비행 훈련은 2단계로 분리 운영됩니다.
            정확하고 효율적인 기체 제어를 위한 기초 비행 훈련 과정이 선행되며,
            이후 화기 운용 및 편대간 전술 운영을 위한 전투 비행 훈련을 진행합니다.
        </p>
    </div>
    <img id="launch" src="./image/home/3.webp" alt="">
    <div class="container" style="height: 100%;">
        <h3>
            screw me if you can
        </h3>
    </div>
</div>

<style>
    #home {
        overflow-y: scroll;
        position: relative;
        height: 100%;
        width: 100%;
    }

    #front {
        filter: grayscale(25%) contrast(125%) opacity(90%);
        object-position: 37.5% center;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    #team {
        filter: grayscale(75%) contrast(150%) opacity(50%);
        object-position: 25% 45%;
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: -1;
    }

    #launch {
        filter: grayscale(75%) contrast(150%) opacity(50%);
        object-position: 87.5% 70%;
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: -1;
    }

    #anchor {
        color: #E2B640;
        font-size: 75px;
        padding: 10px;
    }

    .container {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 0 25%;
        display: flex;
    }

    .lh {
        align-items: flex-start;
    }

    .rh {
        align-items: flex-end;
    }

    h1 {
        font-family: "Quicksand", sans-serif;
        text-transform: capitalize;
        font-weight: 100;
        font-size: 50px;
        padding: 10px 0;
    }

    h2 {
        text-shadow: 3px 3px 5px #010204;
        font-weight: 400;
        font-size: 50px;
    }

    h3 {
        text-shadow: 3px 3px 5px #010204;
        font-family: "Tangerine", cursive;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 100px;
    }

    p {
        text-align: justify;
        color: #A2A3A3;
        font-weight: 400;
        font-size: 30px;
    }

    @media only screen and (max-width: 1600px) {
        #anchor {
            font-size: 50px;
        }

        .container {
            margin: 0 10%;
        }

        h1 {
            font-size: 25px;
        }

        h2 {
            font-size: 20px;
        }

        h3 {
            font-size: 30px;
        }

        p {
            font-size: 15px;
        }
    }
</style>