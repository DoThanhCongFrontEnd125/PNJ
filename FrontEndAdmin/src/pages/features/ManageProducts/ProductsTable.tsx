import React, { useState } from 'react';
import PagesBtn from '../../components/PagesBtn/PagesBtn';
import { Link } from 'react-router-dom'; 

const ProductsTable = () => {
    const [filters, setFilters] = useState({
        name: '',
        category: '',
        price: '',
        discountPrices:''
    });

    const [pages]=useState([1,2,3,4,5])

    const [currentPage, setCurrentPage] = useState(1);

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
            name: 'Sản phẩm mẫu',
            image: 'example.jpg',
            stockQuantity: 100,
            category: 'Danh mục 1',
            price: 1000000,
            discountPrices:500000
        },
        {
            id: 2,
            name: 'Sản phẩm mẫu',
            image: 'example.jpg',
            stockQuantity: 100,
            category: 'Danh mục 2',
            price: 2000000,
            discountPrices:1000000
        },
        // Thêm nhiều sản phẩm hơn nếu cần
    ];

    const names = ['Sản phẩm mẫu', 'Sản phẩm khác', 'Sản phẩm thứ ba'];
    const categories = ['Danh mục 1', 'Danh mục 2', 'Danh mục 3'];
    const prices = ['1000000', '2000000', '3000000'];

    const filteredProducts = products.filter(product => {
        return (
            (filters.name === '' || product.name === filters.name) &&
            (filters.category === '' || product.category === filters.category) &&
            (filters.price === '' || product.price <= parseFloat(filters.price)) &&
            (filters.discountPrices===''||product.discountPrices <= parseFloat(filters.discountPrices))
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
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleFilterChange}
                        className="px-4 py-2 border rounded mr-2"
                    >
                        <option value="">Tất cả danh mục</option>
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <select
                        name="price"
                        value={filters.price}
                        onChange={handleFilterChange}
                        className="px-4 py-2 border rounded mr-2"
                    >
                        <option value="">Tất cả giá</option>
                        {prices.map(price => (
                            <option key={price} value={price}>
                                {`Tối đa ${price} VND`}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="px-4 py-2 bg-[#262582] text-white rounded hover:opacity-70">
                    <Link to='/admin/products/add' >
                    <i className="fas fa-plus"></i> Thêm sản phẩm
                    </Link>
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr className='bg-gray-200'>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tên sản phẩm
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hình ảnh
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Số lượng tồn kho
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Danh mục
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Giá
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Giá giảm
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                {product.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                {product.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <img src={product.image} alt={product.name} className="w-10 h-10 object-cover" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                {product.stockQuantity}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                {product.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                {product.discountPrices.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
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
            <div className="mt-10 flex justify-end items-center space-x-2">
                {pages.map((page:number,index)=>{
                    return (
                        <PagesBtn key={index} page={page} dataPage={page} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    )
                })}
               
            </div>
        </div>
    );
};

export default ProductsTable;
