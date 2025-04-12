import CategoryType from "../types/categoryType";

export const getAllCategories = async () => {
    try {
        const response = await fetch(`http://localhost:8080/categories`);
        if (!response.ok) {
            throw new Error('Lỗi lấy dữ liệu danh mục');
        }
        const data:CategoryType[]=await response.json();
        return data;
    } catch (error) {
        console.log(error);
        
    }
}

export const getCategoryById=async(id:string|undefined)=>{
    try {
        const response= await fetch(`http://localhost:8080/categories/${id}`)
        if (!response.ok) {
            throw new Error('Lỗi lấy dữ liệu danh mục');
        }
        const data:CategoryType=await response.json();
        return data;
    } catch (error) {
        console.log(error);
        
    }
}


export const addCategory=async(formCate:FormData,token:string|null)=>{
    try {
        const response= await fetch(`http://localhost:8080/categories/createCate`,
            {
                method:"POST",
                headers:{
                'Authorization': `Bearer ${token}`,
                },
                body:formCate
            }
            
        )

        if (!response.ok) {
            throw new Error('Lỗi thêm danh mục');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
        
    }
}

export const deleteCategory = async (id: string | undefined, token: string|null) => {
    try {
        const response = await fetch(`http://localhost:8080/categories/deleteCate/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Lỗi xóa danh mục');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};