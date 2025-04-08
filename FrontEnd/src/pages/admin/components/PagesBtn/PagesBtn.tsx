
    const PagesBtn = ({ page, currentPage,dataPage ,setCurrentPage }: { page: number, currentPage: number, dataPage:number,setCurrentPage: (page: number) => void }) => {
        
  
        const hanlderPages=()=>{            
            setCurrentPage(page)
        }

        return (
            <button 
                className={`px-4 py-2 border rounded-lg hover:bg-[#262582] hover:text-white ${
                    currentPage === page ? "bg-[#262582] text-white" : ""
                }`}
                onClick={hanlderPages}
    >
                {page}
            </button>
        );
    };

    export default PagesBtn;
