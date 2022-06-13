<script lang="ts">
    import { Styles } from "./base/style";

    export let title: string = "";
    export let css: string = "";
    export let isFlat: boolean = false;
    export let style: Styles = Styles.Primary;
    export let isShown: boolean = true;

    $: tagStyle = getStyle(style);
    $: flatStyle = getFlatStyle();
    function getFlatStyle()
    {
        return isFlat ? "-flat" : "";
    };

    function getStyle(s: Styles): string {
        if (!s) return "";

        if (s == Styles.Primary) {
            return "tag-primary";
        }
        if (s == Styles.Success) {
            return "tag-success";
        }
        if (s == Styles.Info) {
            return "tag-info";
        }
        if (s == Styles.Warning) {
            return "tag-warning";
        }
        if (s == Styles.Danger) {
            return "tag-danger";
        }
        if (s == Styles.Light) {
            return "tag-light";
        }
        if (s == Styles.Dark) {
            return "tag-dark";
        }

        return "";
    }
</script>

{#if isShown}
    <span class="tag {tagStyle}{flatStyle} {css}" title={title}>
        <slot />
    </span>
{/if}

<style lang="scss">
    @import "../style/style-define.scss";
    .tag {
        display: inline-block;
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 2px !important;
        border: 1px solid transparent;
        padding: 4px 6px 4px 6px;
        margin-right: 6px;
    }
    .flat {
        border: 1px solid transparent;
        background-color: transparent;
    }
    .tag-primary {
        background-color: $primary;
        border-color: $primary;
        color: $primary-color;
        &-flat{
            background-color: transparent;
            border-color: $primary;
            color: $primary;
        }
    }
    .tag-success {
        background-color: $success;
        border-color: $success;
        color: $success-color;
        &-flat{
            background-color: transparent;
            border-color: $success;
            color: $success;
        }
    }
    .tag-info {
        background-color: $info;
        border-color: $info;
        color: $info-color;
        &-flat{
            background-color: transparent;
            border-color: $info;
            color: $info;
        }
    }
    .tag-warning {
        background-color: $warning;
        border-color: $warning;
        color: $warning-color;
        &-flat{
            background-color: transparent;
            border-color: $warning;
            color: $warning;
        }
    }
    .tag-danger {
        background-color: $danger;
        border-color: $danger;
        color: $danger-color;
        &-flat{
            background-color: transparent;
            border-color: $danger;
            color: $danger;
        }
    }
    .tag-light {
        background-color: $light;
        border-color: $light;
        color: $light-color;
        &-flat{
            background-color: transparent;
            border-color: $light;
            color: $light;
        }
    }
    .tag-dark {
        background-color: $dark;
        border-color: $dark;
        color: $dark-color;
        &-flat{
            background-color: transparent;
            border-color: $dark;
            color: $dark;
        }
    }

</style>
