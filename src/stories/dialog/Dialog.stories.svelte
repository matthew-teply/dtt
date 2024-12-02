<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Dialog from './Dialog.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text' },
      content: { control: 'text' },
      buttonText: { control: 'text' },
    },
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" args={{ 
  title: 'Sales Report', 
  content: 'Boss, it seems while many players play our new game, they steal it by downloading a cracked version rather than buying it legally. If players don\'t buy the games they like, we will sooner or later go bankrupt.', 
  buttonText: ':-(' 
}} />