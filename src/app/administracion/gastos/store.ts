import { writable } from 'svelte/store';
import type { Bill } from './interfaces';


export let storeBills = writable<Bill[]>([]);

export let totalByMonth = writable('0,00');