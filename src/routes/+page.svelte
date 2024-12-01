<script lang="ts">
	import { browser } from '$app/environment';
	import { Database } from '$lib/database';
	import drivers from '$lib/drivers';
	import type { IEntityCharacter } from '$lib/entities/character';
	import type { IEntityCompany } from '$lib/entities/company';

    let database: Database;

    let characters: IEntityCharacter[] = [];
    let companies: IEntityCompany[] = [];

    if (browser) {
        database = new Database(drivers.localStorage);
    
        characters = database.characters.list();
    }
</script>

{#if database === undefined }
    <div>
        Database not found
    </div>
{/if}

{#if characters.length === 0 }
    <div>
        No characters
    </div>
{:else}
    <ul>
        {#each characters as character }
            <li>
                {character.name} ({character.id}) - 
                <button class="bg-black text-white" on:click={() => console.log(`Hello, ${character.name}`)}>Choose</button>
            </li>
        {/each}
    </ul>
{/if}