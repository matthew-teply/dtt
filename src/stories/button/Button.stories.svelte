<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'DTT/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      label: { control: 'text' }
    },
  });
</script>

<Story name="Default" args={{ role: 'primary', label: 'Button' }} />

<Story name="Primary" args={{ role: 'primary', label: 'Primary' }} />

<Story name="Danger" args={{ role: 'danger', label: 'Danger' }} />

<Story name="Success" args={{ role: 'success', label: 'Success' }} />
