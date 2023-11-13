export const productFilterFields: string[] = [
  'searchTerm',
  'name',
  'brandId',
  'categoryId',
];

export const productSearchFields: string[] = ['name', 'description'];

export const productRelationalFields: string[] = ['brandId', 'categoryId'];

export const productRelationalFieldsMapper: { [key: string]: string } = {
  brandId: 'brand',
  categoryId: 'category',
};
