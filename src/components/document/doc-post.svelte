<script>
    import { fade } from "svelte/transition"
    import { quintOut } from "svelte/easing"
    import CKEditor from "ckeditor5-svelte"
    import CustomEditor from "ckeditor5-miho/ckeditor"
    
    let editor = CustomEditor
    let editorInstance = null
    
    let editorConfig = {
        toolbar: {
            items: [
                'alignment',
                '|',
                'bold',
                'underline',
                'fontFamily',
                'fontSize',
                '|',
                'indent',
                'outdent',
                'numberedList',
                'bulletedList',
                'subscript',
                'superscript',
                '|',
                'horizontalLine',
                'pageBreak',
                'link',
                'imageUpload',
                'insertTable',
                '|',
                'code',
                'codeBlock',
                '|',
                'undo',
                'redo'
            ]
        },
        language: 'en',
        image: {
            toolbar: [
                'imageTextAlternative',
                'imageStyle:full',
                'imageStyle:side'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableCellProperties',
                'tableProperties'
            ]
        },
        licenseKey: '',
    }

    function onReady({detail: editor}) {
        editorInstance = editor
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
            )
    }

    const menus = [
        {
            "key": "history",
            "val": "Air Warfare History"
        },
        {
            "key": "physics",
            "val": "Aeronautical Physics"
        }
    ]
</script>

<div id="doc-post" in:fade={{easing: quintOut}}>
    <div id="selector">
        <select name="board" id="board">
            {#each menus as menu}
                <option value={menu.key}>{menu.val}</option>
            {/each}
        </select>
        <input type="submit" value="submit">
    </div>
    <CKEditor
        bind:editor
        on:ready={onReady}
        bind:config={editorConfig}
    />
</div>

<style>
    #doc-post {
        grid-template-rows: 50px 50px 1fr;
        grid-template-columns: 1fr;
        background-color: white;
        overflow: hidden;
        font-size: 30px;
        color: black;
        display: grid;
        cursor: text;
        height: 100%;
        width: 100%;
    }

    #selector {
        justify-content: space-between;
        background-color: #3060C0;
        align-items: center;
        cursor: default;
        display: flex;
        height: 100%;
        width: 100%;
    }

    select {
        font-family: "Quicksand", sans-serif;
        text-align: center;
        font-weight: 300;
        font-size: 18px;
        margin: 0 5px;
        width: 500px;
        height: 75%;
    }

    option {
        font-size: 30px;
    }

    input {
        font-family: "Quicksand", sans-serif;
        text-transform: capitalize;
        font-weight: 300;
        font-size: 18px;
        margin: 0 5px;
        width: 250px;
        height: 75%;
    }
</style>