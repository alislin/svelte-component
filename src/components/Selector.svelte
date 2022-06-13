<script lang="ts">
    import type { SelectItem } from "./selector/SelectItem";

    export let items: SelectItem[] = [];
    export let value: any;
    export let allLabel: string = "全部";
    export let allkey: SelectItem = {
        key: allLabel,
        value: null,
    };
    export let onChange:()=>void;
</script>

<select bind:value on:change="{onChange}" >
    {#if allkey != null}
        <option value={allkey.value}>{allkey.key}</option>
    {/if}
    {#if items}
        {#each items as item}
            <option value={item.value}>{item.key}</option>
        {/each}
    {/if}
</select>
