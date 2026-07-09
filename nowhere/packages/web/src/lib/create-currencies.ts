export const CREATE_CURRENCY_OPTIONS = [
	{ value: 'USD', label: 'USD ($)' },
	{ value: 'EUR', label: 'EUR (€)' },
	{ value: 'GBP', label: 'GBP (£)' },
	{ value: 'JPY', label: 'JPY (¥)' },
	{ value: 'CAD', label: 'CAD ($)' },
	{ value: 'AUD', label: 'AUD ($)' },
	{ value: 'CHF', label: 'CHF' },
	{ value: 'CNY', label: 'CNY (¥)' },
	{ value: 'BRL', label: 'BRL (R$)' },
	{ value: 'MXN', label: 'MXN ($)' },
	{ value: 'BTC', label: 'BTC' },
	{ value: 'SATS', label: 'BTC (sats)' }
] as const;

const CREATE_CURRENCY_VALUES = new Set<string>(CREATE_CURRENCY_OPTIONS.map(({ value }) => value));

export function normalizeCreateCurrency(value: string): string {
	const normalized = value.toUpperCase();
	return CREATE_CURRENCY_VALUES.has(normalized) ? normalized : value;
}
