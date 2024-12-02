<script module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import Pool from './Pool.svelte';

    const { Story } = defineMeta({
        title: 'DTT/Pool',
        component: Pool,
        tags: ['autodocs'],
        argTypes: {
            color: { control: 'color' },
            textColor: { control: 'color' },
            count: { control: 'number' },
            label: { control: 'text' },
            size: { control: 'number' },
        },
        args: {
            textColor: 'black'
        }
    });
</script>

<Story name="Default" args={{ color: '#0AB8FB', count: 12, size: 60, label: 'Technology' }} />

<Story name="Without label" args={{ color: '#FAA203', count: 23, size: 60 }} />