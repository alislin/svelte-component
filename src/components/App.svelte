<script lang="ts">
    import Block from "./Block.svelte";
    import Modal from "./Modal.svelte";
    let isModalShown: boolean = true;

    function showModal() {
        isModalShown = true;
    }
</script>

<main>
    <Block title="访问列表" description="加载中……" />
    <h1>组件测试页</h1>
    <button on:click={showModal}>显示弹窗</button>
    <Modal title="提示" bind:isShown={isModalShown}>
        <div class="title">Hello</div>
    </Modal>
</main>
