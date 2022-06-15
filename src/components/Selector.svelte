<script lang="ts">
    import type { SelectItem } from "./selector/SelectItem";
    /** 选项列表 */
    export let items: SelectItem[] = [];
    /** 选择项 */
    export let value: any;
    /** 空值选项显示名称 */
    export let allLabel: string = "全部";
    /** 空值选项（为 null 不显示） */
    export let allkey: SelectItem = {
        key: allLabel,
        value: null,
    };
    /** 选择时样式 */
    export let styleOnSelected: string = "";
    /** 选择时处理 */
    export let onChange: () => void = () => {};
    $: selectedCss = () => {
        if (!styleOnSelected || styleOnSelected == null) return "";
        if (value != allkey.value) {
            return styleOnSelected;
        }
        return "";
    };
</script>

<select bind:value on:change={onChange} class={selectedCss()}>
    {#if allkey != null}
        <option value={allkey.value}>{allkey.key}</option>
    {/if}
    {#if items}
        {#each items as item}
            <option value={item.value}>{item.key}</option>
        {/each}
    {/if}
</select>
