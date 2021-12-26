
export function enumToStorybookArgTypesInputType<T extends Record<any, any>>(enumVar: T)
{
	return {
		options: Object.keys(enumVar) as (keyof T)[],
		mapping: enumVar as T,
		control: {
			type: 'select' as const,
			labels: enumVar as T,
		},
	}
}
