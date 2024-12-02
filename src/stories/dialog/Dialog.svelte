<script lang="ts">
    import Button from '../button/Button.svelte';
    import './dialog.css';

    interface Props {
        title: string;
        children: any;
        buttonLabel?: string;
        onClick?: () => void;
    }

    const { title, children, buttonLabel, onClick }: Props = $props();
</script>

<div class="dtt-dialog text-center p-2 border-4 border-solid max-w-screen-sm">
    <h1 class="title text-center text-4xl px-12 pb-1 border-b-2 border-solid">{title}</h1>

    <section class="text-left content px-4 py-6">
        {@render children?.()}
    </section>

    {#if buttonLabel !== undefined }
        <section>
            <Button label={buttonLabel} onClick={onClick} />
        </section>
    {/if}
</div>