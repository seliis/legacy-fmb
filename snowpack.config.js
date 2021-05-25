module.exports = {
    mount: {
        public: {
            url: "/"
        },
        src: {
            url: "/dist"
        }
    },
    plugins: [
        "@snowpack/plugin-svelte"
    ],
    devOptions: {
        open: "none",
        hmr: true
    },
    buildOptions: {
        out: "/mnt/d/fmb/web"
    }
}