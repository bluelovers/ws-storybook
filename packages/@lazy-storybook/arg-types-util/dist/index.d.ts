export declare function enumToStorybookArgTypesInputType<T extends Record<any, any>>(enumVar: T): {
	options: (keyof T)[];
	mapping: T;
	control: {
		type: "select";
		labels: T;
	};
};

export {};
