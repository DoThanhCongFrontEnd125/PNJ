import React, { useEffect, useState } from 'react';
import { message, Modal, Popconfirm, Drawer, Space, Button, Form, Row, Col, Input, Upload, UploadFile } from 'antd';
import {  QuestionCircleOutlined  } from '@ant-design/icons';
import { addCategory, deleteCategory, getAllCategories, getCategoryById } from '../../services/categoriesService';
import CategoryType from '../../types/categoryType';

// interface DescriptionItemProps {
//     title: string;
//     content: React.ReactNode;
//   }
//   const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
//     <div className="site-description-item-profile-wrapper">
//       <p className="site-description-item-profile-p-label">{title}:</p>
//       {content}
//     </div>
//   );  



const ManageCategories = () => {
    const [categories, setCategories] = useState<CategoryType[]>()
    const [categoryId,setCategoryId]=useState<CategoryType>()
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        name: '',
    });
    
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openResponsive, setOpenResponsive] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const [form] = Form.useForm();

    const [fileList, setFileList] = useState<UploadFile[]>([]);

  
    const showDrawer = () => {
        setOpen(true);
      };
    
    const showDrawerAdd=()=>{
        setOpenAdd(true)
    }

    const onClose = () => {
        setOpen(false);
    };

    const onCloseAdd = () => {
        setOpenAdd(false)
    };

    const success = (data:string) => {
        messageApi.open({
          type: 'success',
          content: data,
        });
      };




    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFilters({
            ...filters,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Không thể tải danh mục. Vui lòng thử lại sau.');
            }finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);


    

    const names = categories?.map(category => category.name)

    const filteredCategories = categories?.filter(category => {
        return (
            (filters.name === '' || category.name === filters.name) 
        );
    });

    const handleViewCategory =async (id:string|undefined) => {
        try {
            const categoryView=await getCategoryById(id)
            setCategoryId(categoryView)
            // setOpenResponsive(true);
            showDrawer()
        } catch (error) {
            console.log(error);
            
        }
      
    }


    const handleAddCate=async()=>{
        try {
            const token=localStorage.getItem('token')
            const valuesData = await form.validateFields();   
            if (!fileList || fileList.length === 0) {
                throw new Error("Không có hình ảnh. Vui lòng tải lên một hình ảnh.");
              }  
            const formData = new FormData();

            formData.append("name", valuesData.name);
            formData.append("slug", valuesData.slug);
            formData.append("image",fileList[0].originFileObj as File) 
            success("Thêm danh mục thành công")
            await addCategory(formData, token);
            form.resetFields(); // Xóa dữ liệu form
            setFileList([]); // Xóa danh sách file
            onCloseAdd()
            setTimeout(()=>{
                window.location.reload()
            },500)
        } catch (error) {
            console.log(error);
            
        }
    }


    const handleDeleteCate=async(id:string|undefined)=>{
        try {
            const token=localStorage.getItem('token')
            success("Xóa danh mục thành công")
            await deleteCategory(id,token)
            setCategories((prevCategories) =>
                prevCategories?.filter((category) => category._id !== id)
            );
        } catch (error) {
            console.log(error);
            
        }
    }


    // const handleUploadChange=()=>{
        
    // }



    return loading ? (
        <div className="flex items-center justify-center h-64">
            <div className="text-lg font-semibold text-gray-600">Đang tải...</div>
        </div>
    ) : (
        <div className="p-4">
            {contextHolder}
        <Drawer width={640} placement="right" closable={false} onClose={onClose} open={open}>
        <Form form={form} layout="vertical" hideRequiredMark>
        <h1 className='text-mainColor font-bold uppercase text-xl mb-10'>Chi tiết danh mục</h1>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label={<b style={{ fontSize: "16px", color: "#262582" }}>Tên danh mục</b>}
              >
                <Input value={categoryId?.name} disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
                label={<b style={{ fontSize: "16px", color: "#262582" }}>Tên Slug</b>}
            >
              <Input value={categoryId?.slug} disabled  />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label={<b style={{ fontSize: "16px", color: "#262582" }}>Hình ảnh</b>}
            >
              <img
                src={`http://localhost:8080/images/${categoryId?.image}`}
                alt={categoryId?.name}
                className="w-52 h-52 object-cover mt-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
        {
        // categoryId ? (
        //             <div className="space-y-6 px-8 py-6">
        //                 {/* Tiêu đề */}
        //                 <div className="text-center border-b border-gray-300 pb-4">
        //                     <h1 className="text-xl lg:text-2xl  font-extrabold text-mainColor">Chi tiết danh mục</h1>
        //                 </div>

        //                 {/* Thông tin chính */}
        //                 <div className="space-y-6">
        //                     <div className="flex justify-around items-center border-b border-gray-300 pb-4 flex-wrap">
        //                         <p className="text-gray-700 text-lg">
        //                             <strong className="font-semibold">ID:</strong> {categoryId._id}
        //                         </p>
        //                         <p className="text-gray-700 text-lg">
        //                             <strong className="font-semibold">Tên danh mục:</strong> {categoryId.name}
        //                         </p>
        //                     </div>
        //                     <div className="border-b border-gray-300 pb-4">
        //                         <p className="text-gray-700 text-center text-lg">
        //                             <strong className="font-semibold">Tên Slug:</strong> {categoryId.slug}
        //                         </p>
        //                     </div>
        //                 </div>

        //                 {/* Hình ảnh */}
        //                 <div className="flex flex-col items-center">
        //                     <p className="text-gray-700 mb-3 text-lg">
        //                         <strong className="font-semibold">Hình ảnh:</strong>
        //                     </p>
        //                     <img
        //                         src={`http://localhost:8080/images/${categoryId.image}`}
        //                         alt={categoryId.name}
        //                         className="w-52 h-52 object-cover mt-2 border border-gray-300 rounded-lg shadow-sm"
        //                     />
        //                 </div>
        //             </div>
        //         ) : (
        //             <div className="text-center text-red-500 py-6 text-lg font-semibold">
        //                 Không tìm thấy thông tin danh mục.
        //             </div>
        //         )
                }
   
    
      </Drawer>
      <Drawer
      title="Thêm danh mục"
      width={720}
      onClose={onCloseAdd}
      open={openAdd}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={onCloseAdd}>Hủy</Button>
          <Button onClick={handleAddCate} className='bg-mainColor text-white'>
            Thêm
          </Button>
        </Space>
      }
    >
      <Form form={form} layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label={<b style={{ fontSize: "16px",color:"#262582" }}>Tên danh mục</b>}
              rules={[{ required: true, message: "Vui lòng điền tên danh mục" }]}
            >
              <Input placeholder="Nhập tên danh mục" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="slug"
              label={<b style={{ fontSize: "16px",color:"#262582" }}>Slug</b>}
              rules={[{ required: true, message: "Vui lòng điền slug đường dẫn" }]}
            >
              <Input placeholder="Nhập slug" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="image"
              label={<b style={{ fontSize: "16px",color:"#262582" }}>Upload Ảnh</b>}
              rules={[{ required: true, message: 'Vui lòng chọn ảnh' }]}
            >
             <Upload
                  beforeUpload={(file) => {
                    setFileList([{ uid: file.uid, name: file.name, status: "done", originFileObj: file }]);
                    return false; // Không upload ngay
                  }}
                    fileList={fileList}
                    onRemove={() => setFileList([])} // Xóa file khi người dùng bấm xoá
                    listType="picture"
                    accept="image/*"
                  >
                  <Button>Chọn ảnh</Button>
                </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
            <Modal
                centered
                open={openResponsive}
                onOk={() => setOpenResponsive(false)}
                onCancel={() => setOpenResponsive(false)}
                width="50%"
                className="rounded-lg shadow-xl border border-gray-200 bg-white"
            >
                {categoryId ? (
                    <div className="space-y-6 px-8 py-6">
                        {/* Tiêu đề */}
                        <div className="text-center border-b border-gray-300 pb-4">
                            <h1 className="text-xl lg:text-2xl  font-extrabold text-mainColor">Chi tiết danh mục</h1>
                        </div>

                        {/* Thông tin chính */}
                        <div className="space-y-6">
                            <div className="flex justify-around items-center border-b border-gray-300 pb-4 flex-wrap">
                                <p className="text-gray-700 text-lg">
                                    <strong className="font-semibold">ID:</strong> {categoryId._id}
                                </p>
                                <p className="text-gray-700 text-lg">
                                    <strong className="font-semibold">Tên danh mục:</strong> {categoryId.name}
                                </p>
                            </div>
                            <div className="border-b border-gray-300 pb-4">
                                <p className="text-gray-700 text-center text-lg">
                                    <strong className="font-semibold">Tên Slug:</strong> {categoryId.slug}
                                </p>
                            </div>
                        </div>

                        {/* Hình ảnh */}
                        <div className="flex flex-col items-center">
                            <p className="text-gray-700 mb-3 text-lg">
                                <strong className="font-semibold">Hình ảnh:</strong>
                            </p>
                            <img
                                src={`http://localhost:8080/images/${categoryId.image}`}
                                alt={categoryId.name}
                                className="w-52 h-52 object-cover mt-2 border border-gray-300 rounded-lg shadow-sm"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-red-500 py-6 text-lg font-semibold">
                        Không tìm thấy thông tin danh mục.
                    </div>
                )}
            </Modal>


            <div className="mb-4 flex justify-between items-center">
                <div>
                    <select
                        name="name"
                        value={filters.name}
                        onChange={handleFilterChange}
                        className="px-4 py-2 border rounded mr-2"
                    >
                        <option value="">Tất cả tên</option>
                        {names?.map(name => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                   
                   
                </div>
                <button className="px-4 py-2 bg-[#262582] text-white rounded hover:opacity-70" onClick={showDrawerAdd}>
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
                {error && <div className="text-red-500">{error}</div>}
                
                    {filteredCategories?.map((category,index)=> (
                        <tr key={category._id}>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                                {index+1}
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap capitalize">
                                {category.name}
                            </td>
                            <td className="px-6 py-4 flex justify-center whitespace-nowrap">
                                <img src={`http://localhost:8080/images/${category.image}`} alt={category.name} className="w-20 h-20 object-cover" />
                            </td>
                           
                            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                                <button className="text-[16px] text-indigo-600 hover:text-indigo-900">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <Popconfirm
                                    title={`Xóa danh mục ${category.name}`}
                                    description="Bạn có chắc muốn xóa không?"
                                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                    onConfirm={() => handleDeleteCate(category._id)}
                                >
                                    <button className="text-[16px] text-red-600 hover:text-red-900 ml-4">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </Popconfirm>
                               
                                <button className="text-[16px] text-green-600 hover:text-green-900 ml-4" onClick={()=>handleViewCategory(category._id)} > 
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
 

export default ManageCategories;