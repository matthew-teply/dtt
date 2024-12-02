<script lang="ts">
    import './dialog.css';
    import Button from '../button/Button.svelte';

    /**
     * @typedef {Object} Props
     * @property {string} title Dialog's title
     * @property {string} content Dialog's content
     * @property {string} buttonText Text displayed inside the action button
     */

    /** @type {Props} */
    const { title, content, buttonText } = $props();
</script>

<div class="dtt-dialog text-center p-2 border-4 border-solid max-w-screen-sm">
    <h1 class="title text-center text-4xl px-12 pb-1 border-b-2 border-solid">{title}</h1>

    <section class="text-left content px-4 py-6">
        {content}
    </section>

    <Button label={buttonText} />
</div>