<script lang="ts">
	import { beforeUpdate } from "svelte";

	/** 标题 */
	export let title: string = "";
	/** 说明 */
	export let description: string = "";
	/** 是否显示 */
	export let isShown: boolean = false;
	/** 是否全屏 */
	export let isFull: boolean = false;

	beforeUpdate(() => {
		setBlockBody();
	});

	function setBlockBody() {
		if (isShown) {
			document.body.style.overflow = "auto";
		}

		if (isFull) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}

	function fullCss() {
		return isFull ? "block-full" : "";
	}
</script>

<div class="block-wrap">
	{#if isShown}
		<div class="block {fullCss()}">
			<div class="mask" />
			<div class="content">
				<div class="lds-ring">
					<div />
					<div />
					<div />
					<div />
				</div>
				<div class="content-text">
					<div class="title">{title}</div>
					<div class="description">{description}</div>
				</div>
			</div>
		</div>
	{/if}
	<slot />
</div>

<style lang="scss">
	$load-width: 24px;
	$font-color: #333333;

	.lds-ring {
		display: inline-block;
		position: relative;
		width: $load-width;
		height: $load-width;

		div {
			box-sizing: border-box;
			display: block;
			position: absolute;
			width: calc($load-width - 3px);
			height: calc($load-width - 3px);
			margin: 3px;
			border: 3px solid $font-color;
			border-radius: 50% !important;
			animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
			border-color: $font-color transparent transparent transparent;

			&:nth-child(1) {
				animation-delay: -0.45s;
			}

			&:nth-child(2) {
				animation-delay: -0.3s;
			}

			&:nth-child(3) {
				animation-delay: -0.15s;
			}
		}
	}

	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
	.block-wrap {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.block-full {
		position: fixed!important;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.block {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 998;

		// border: 1px solid black;

		.mask {
			background-color: white;
			opacity: 0.8;
			width: 100%;
			height: 100%;
			position: absolute;
		}

		.content {
			display: flex;
			justify-content: center;
			align-items: center;
			/*border: solid 1px black;*/
			border: solid #cdd3fb 1px;
			background-color: #d7d7d7;
			padding: 5px 24px;
			color: $font-color;
			border-radius: 3px;
			box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
			z-index: 999;
			.content-text {
				display: flex;
				flex-direction: column;
				justify-content: start;
				align-items: start;
				margin-left: 15px;
				.title {
					font-size: 1rem;
					margin-bottom: 1px;
				}
				.description {
					font-size: 0.9rem;
					color: #333333;
				}
			}
		}
	}
</style>
