<script lang="ts">
    import './pool.css';

    /** @type {Props} */
    const { color, count, textColor = '#000000', label = null, size = 60 } = $props();
</script>

<div class="dtt-pool flex flex-col justify-center items-center gap-1">
    <div 
        class="pool text-xl inline-flex p-4 justify-center items-center border-2 border-solid border-black" 
        style="background-color: {color}; color: {textColor}; width: {size}px; height: {size}px;"
    >
        {count}
    </div>

    {#if label !== null }
        <div 
            class="label px-2 border-2 border-solid border-black rounded-sm" 
            style="background-color: {color}; color: {textColor};"
        >
            {label}
        </div>
    {/if}
</div>