<script lang="ts">
    /** 值 */
    export let value: number = 0;
    /** 样式值，确定显示样式（为空时与值相等） */
    export let valueStyle: number | null = null;
    $: valueCss = getValueCss();

    function getValueCss() {
        if (valueStyle == null) {
            valueStyle = value;
        }
        if (valueStyle > 0) {
            return "num-plus";
        }
        if (valueStyle < 0) {
            return "num-minus";
        }
        return "num-zero";
    }
</script>

<span class={valueCss}>{value}</span>

<style lang="scss">
    .num-zero {
        color: #a9a9a9;
        font-weight: 100;
    }
    .num-minus {
        color: #ff0000;
    }
    .num-plus {
        // color: #000000;
        font-weight: 600;
    }
</style>
