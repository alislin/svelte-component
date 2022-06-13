<script lang="ts">
    import type { IPageList } from "./page-number/PageList";

    export let Value: IPageList;
    export let OnSelectedPage: (index: number) => void;
    export let MaxCount: number = 15;
    /** 开始页码 */
    let minIndex: number;
    /** 结束页码 */
    let maxIndex: number;
    /** 显示最大页码 */
    $: maxPageIndex = Value.MaxPage - 1;
    /** 是否显示分页 */
    $: showPaged = Value.Total > 0;
    $: currentIndex = Value.Page;

    $: pages = () => {
        let pages: number[] = [];
        if (showPaged) {
            if (maxPageIndex > MaxCount) {
                let midIndex = Math.round(MaxCount / 2);
                if (currentIndex < midIndex) {
                    minIndex = 0;
                    maxIndex = MaxCount;
                } else if (currentIndex > maxPageIndex - midIndex) {
                    minIndex = maxPageIndex - MaxCount + 1;
                    maxIndex = maxPageIndex;
                } else {
                    minIndex = currentIndex - midIndex + 1;
                    maxIndex = currentIndex + midIndex;
                }
            } else {
                minIndex = 0;
                maxIndex = maxPageIndex;
            }
            for (let i = minIndex; i <= maxIndex; i++) {
                pages.push(i);
            }
        }
        return pages;
    };

    function onPage(index: number) {
        if (isDisabled(index)) {
            return;
        }
        OnSelectedPage(index);
    }

    function isDisabled(index: number) {
        if (index < 0) return true;
        if (index > maxPageIndex) return true;
        if (index == currentIndex) return true;

        return false;
    }

    function isDisableIndex(index: number) {
        var disableCss = "diabled";
        if (isDisabled(index)) return disableCss;

        return "";
    }

    function isActive(index: number) {
        if (index == currentIndex) return "actived";

        return "";
    }
</script>

{#if showPaged}
    <div class="page-number">
        <div
            class="page-index {isDisableIndex(currentIndex - 1)}"
            on:click={() => onPage(currentIndex - 1)}
        >
            上一页
        </div>
        {#if minIndex > 0}
            <div
                class="page-index {isDisableIndex(0)}"
                on:click={() => onPage(0)}
            >
                1
            </div>
            <div>&nbsp;</div>
        {/if}
        {#each pages() as index}
            <div
                class="page-index {isDisableIndex(index)} {isActive(index)}"
                on:click={() => onPage(index)}
            >
                {index + 1}
            </div>
        {/each}
        {#if maxIndex != maxPageIndex}
            <div>&nbsp;</div>
            <div
                class="page-index {isDisableIndex(maxPageIndex)}"
                on:click={() => onPage(maxPageIndex)}
            >
                {maxPageIndex}
            </div>
        {/if}
        <div
            class="page-index {isDisableIndex(currentIndex + 1)}"
            on:click={() => onPage(currentIndex + 1)}
        >
            下一页
        </div>
    </div>
{/if}

<style lang="scss">
    .page-number {
        display: flex;

        .page-index {
            border: solid 1px #ccc;
            margin-right: 2px;
            padding: 3px 5px;
            cursor: pointer;
            min-width: 3rem;
            text-align: center;
        }

        .diabled {
            opacity: 0.6;
            cursor: default !important;
        }

        .actived {
            background-color: #0094ff;
            color: #fff;
        }
    }
</style>
