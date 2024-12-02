<script lang="ts">
  import './button.css';

  type ButtonRole = 'primary' | 'danger' | 'success';

  interface Props {
		role?: ButtonRole;
		label: string;
		onClick?: () => void;
	}

  const { role = 'primary', label, onClick }: Props = $props();
</script>

<button
  type="button"
  class="dtt-button px-4 py-2 border-2 border-solid min-w-64"
  class:dtt-button--primary={role === 'primary'}
  class:dtt-button--danger={role === 'danger'}
  class:dtt-button--success={role === 'success'}
  onclick={onClick}
>
  <span class="text-xl">{label}</span>
</button>
