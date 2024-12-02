<script lang="ts">
    import './input.css';

    interface Props {
        placeholder?: string;
        type?: string;
        onInput?: () => void;
        onChange?: () => void;
	}

    const { placeholder = 'Type...', type = 'text', onInput, onChange }: Props = $props();
</script>

<input 
    type={type} 
    placeholder={placeholder} 
    class="dtt-input text-lg bg-white border-2 border-solid px-2 py-1"
    oninput={onInput}
    onchange={onChange}
>