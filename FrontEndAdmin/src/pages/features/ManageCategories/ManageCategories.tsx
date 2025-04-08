import React, { useState } from 'react';

const CategoriesTable = () => {
    const [filters, setFilters] = useState({
        name: '',
    });



    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const products = [
        {
            id: 1,
            name: 'Nhẫn cưới',
            image: 'example.jpg',
        },
        {
            id: 2,
            name: 'Nhẫn đính hôn',
            image: 'example.jpg',
        },
        // Thêm nhiều sản phẩm hơn nếu cần
    ];

    const names = ['Nhẫn cưới', 'Nhẫn đính hôn'];

    const filteredProducts = products.filter(product => {
        return (
            (filters.name === '' || product.name === filters.name) 
        );
    });

 



    return (
        <div className="">
            <div className="mb-4 flex justify-between items-center">
                <div>
                    <select
                        name="name"
                        value={filters.name}
                        onChange={handleFilterChange}
                        className="px-4 py-2 border rounded mr-2"
                    >
                        <option value="">Tất cả tên</option>
                        {names.map(name => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                   
                   
                </div>
                <button className="px-4 py-2 bg-[#262582] text-white rounded hover:opacity-70">
                    <i className="fas fa-plus"></i> Thêm danh mục
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr className='bg-gray-200'>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tên danh mục
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hình ảnh
                        </th>
                       
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                                {product.id}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                                {product.name}
                            </td>
                            <td className="px-6 py-4 flex justify-center whitespace-nowrap">
                                <img src={product.image} alt={product.name} className="w-10 h-10 object-cover" />
                            </td>
                           
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                                <button className="text-[16px] text-indigo-600 hover:text-indigo-900">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className="text-[16px] text-red-600 hover:text-red-900 ml-4">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                                <button className="text-[16px] text-green-600 hover:text-green-900 ml-4">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    );
};

export default CategoriesTable;