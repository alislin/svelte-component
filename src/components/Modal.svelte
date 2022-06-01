<script lang="ts">
    import { fade } from "svelte/transition";

    /** Modal 显示状态（默认：关） */
    export let isShown: boolean = true;
    /** 标题 */
    export let title: string = "";
    /** 显示关闭按钮（默认：开） */
    export let isCloseShown: boolean = true;
    /** Modal 外点击关闭（默认：开） */
    export let isCloseByMask: boolean = true;
    export let onConfirm: () => void;

    function closeByMask() {
        if (isCloseByMask) {
            isShown = false;
        }
    }

    function close() {
        isShown = false;
    }
</script>

<main>
    {#if isShown}
        <div class="modal-wrap">
            <div
                class="mask"
                on:click={closeByMask}
                in:fade={{ delay: 250, duration: 300 }}
                out:fade={{ delay: 250, duration: 300 }}
            />
            <div
                class="modal-content"
                in:fade={{ delay: 250, duration: 300 }}
                out:fade={{ delay: 250, duration: 300 }}
            >
                <div class="header">
                    <div class="title">{title}</div>
                    <div>
                        {#if isCloseShown}
                            <button class="close" on:click={close}>
                                <svg
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="2161"
                                    width="20"
                                    height="20"
                                    ><path
                                        d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448S759.04 960 512 960zM512 128.288C300.416 128.288 128.288 300.416 128.288 512c0 211.552 172.128 383.712 383.712 383.712 211.552 0 383.712-172.16 383.712-383.712C895.712 300.416 723.552 128.288 512 128.288z"
                                        p-id="2162"
                                    /><path
                                        d="M557.056 513.376l138.368-136.864c12.576-12.416 12.672-32.672 0.256-45.248-12.416-12.576-32.704-12.672-45.248-0.256l-138.56 137.024-136.448-136.864c-12.512-12.512-32.736-12.576-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.248l136.256 136.672-137.376 135.904c-12.576 12.448-12.672 32.672-0.256 45.248 6.272 6.336 14.496 9.504 22.752 9.504 8.128 0 16.256-3.104 22.496-9.248l137.568-136.064 138.688 139.136c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.056 513.376z"
                                        p-id="2163"
                                    /></svg
                                >
                            </button>
                        {/if}
                    </div>
                </div>
                <div class="body">
                    <slot />
                </div>
                <div class="modal-foot" />
            </div>
        </div>
    {/if}
</main>

<style lang="scss">
    .modal-wrap {
        position: fixed;
        display: flex;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        justify-content: center;
        align-items: center;

        .mask {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: black;
            opacity: 0.4;
        }

        .modal-content {
            max-width: 80vw;
            z-index: 1001;
            background-color: white;
            border-radius: 3px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);

            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 15px;
                border-bottom: 1px solid #c2cad8;

                .title {
                    font-size: 130%;
                }
            }

            .body {
                position: relative;
                padding: 15px 15px;
                max-height: 80vh;
                overflow-y: auto;
            }
        }
        .close {
            padding: 0;
            margin-left: 15px;
            margin-bottom: 0;
            background-color: transparent !important;
            border: none;
            cursor: pointer;
            opacity: 0.4;
            &:hover {
                opacity: 1;
            }
        }
    }
</style>
