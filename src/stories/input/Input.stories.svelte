<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import Input from './Input.svelte';

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: 'DTT/Input',
        component: Input,
        tags: ['autodocs'],
        argTypes: {
            placeholder: { control: 'text' },
            type: { control: 'text' }
        }
    });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" />