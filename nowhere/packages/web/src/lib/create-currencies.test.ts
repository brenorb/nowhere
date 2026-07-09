import { describe, expect, test } from 'vitest';
import { CREATE_CURRENCY_OPTIONS, normalizeCreateCurrency } from './create-currencies.js';

describe('create currencies', () => {
	test('provides the broader shared list', () => {
		expect(CREATE_CURRENCY_OPTIONS.map(({ value }) => value)).toEqual([
			'USD',
			'EUR',
			'GBP',
			'JPY',
			'CAD',
			'AUD',
			'CHF',
			'CNY',
			'BRL',
			'MXN',
			'BTC',
			'SATS'
		]);
	});

	test('normalizes known legacy casing without changing custom currencies', () => {
		expect(normalizeCreateCurrency('sats')).toBe('SATS');
		expect(normalizeCreateCurrency('brl')).toBe('BRL');
		expect(normalizeCreateCurrency('XYZ')).toBe('XYZ');
	});
});
