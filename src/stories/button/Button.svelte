<script lang="ts">
  import './button.css';

  type ButtonRole = 'primary' | 'danger';

  interface Props {
		role?: ButtonRole;
		size?: 'small' | 'medium' | 'large';
		label: string;
		onClick?: () => void;
	}

  const { role = 'primary', size = 'medium', label, onClick }: Props = $props();
</script>

<button
  type="button"
  class={[
    'dtt-button border-2 border-solid min-w-72', 
    `dtt-button--${size}`].join(' ')
  }
  class:dtt-button--primary={role === 'primary'}
  class:dtt-button--danger={role === 'danger'}
  onclick={onClick}
>
  <span class="text-xl">{label}</span>
</button>
