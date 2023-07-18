import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiKey } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const SearchPage = () => {
    const navigate = useNavigate();

    const { query } = useParams();
    const [page, setPage] = useState(1)
    const { data, isLoading } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`, fetcher);
    useEffect(() => {
        setPage(1)
    }, [query])
    const movies = data ? data.results : [];
    if (data) {
        console.log(data.page);
        console.log(data.total_pages);
    }

    return (
        <main className='home-wrapper'>
            <div className='backdrop-img'>
                <img src="/bg.jpg" alt="" />
            </div>
            <div className='backdrop-overlay'></div>
            <div className='detail-contain'>
                {isLoading ? (
                    <div className='fixed inset-0 grid place-items-center z-111 bg-black bg-opacity-70'>
                        <div className='loading-icon'></div>
                    </div>
                ) : (
                    <div className='detail-content'>
                        <h3 className='text-[#3CE2E8] font-bold text-[16px] mb-2'>Kết quả tìm kiếm: </h3>
                        <div className='grid grid-cols-5 gap-5'>
                            {movies && movies.length > 0 ? movies.map((item) => (

                                <div key={item.id} className={`item-card cursor-pointer`} onClick={() => navigate(`/movie/${item.id}`)}>
                                    <div className='item-img'>
                                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                                    </div>
                                    <div className='item-label'>
                                        <h3 className='item-card-title'>{item.title}</h3>
                                    </div>
                                </div>
                            )) : null}
                        </div>
                        <div className="flex gap-4 justify-center items-center my-8">
                            <span
                                className='px-2 py-1 bg-white rounded-md cursor-pointer text-[#3CE2E8]'
                                onClick={() => {
                                    if (page > 1) {
                                        setPage(page - 1)
                                    }
                                }
                                }
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </span>
                            const length = 5;
const newArray = new Array(length).fill(null).map(() => {
  const element = document.createElement('div');
  // Tạo cấu trúc HTML tương ứng
  // Ví dụ: element.innerHTML = '<p>Some HTML structure</p>';
                            return element;
});

                            console.log(newArray); // [div, div, div, div, div]
                            Trong ví dụ này, một mảng mới với độ dài là 5 được tạo ra và mỗi phần tử trong mảng được tạo thành một cấu trúc HTML tương ứng, trong trường hợp này là các thẻ <div>.

                                Vì vậy, bạn không thể trực tiếp truyền một cấu trúc HTML vào .fill(), nhưng bạn có thể sử dụng .map() để tạo mảng và tạo cấu trúc HTML cho từng phần tử trong mảng đó.





                                User
                                onClick={() => setPage(index + 1)}, ở đây tôi muốn thêm điều kiện nếu index === 9 thì không thực hiện setPage
                                ChatGPT
                                Để thêm điều kiện vào sự kiện onClick, bạn có thể sử dụng một câu lệnh điều kiện if để kiểm tra giá trị của index trước khi gọi setPage. Nếu index bằng 9, bạn có thể bỏ qua việc gọi setPage. Dưới đây là một ví dụ cách thực hiện điều này:

                                javascript
                                Copy code
                                onClick={() => {
                                    if (index !== 9) {
                                        setPage(index + 1);
                                    }
                                }}
                                Trong ví dụ này, onClick sẽ kiểm tra nếu index không bằng 9, sau đó mới gọi setPage(index + 1). Nếu index là 9, sự kiện setPage sẽ không được gọi và không có hành động nào được thực hiện.

                                Hãy đảm bảo thay thế index trong đoạn mã trên bằng biến hoặc giá trị thực tế của index trong ngữ cảnh của bạn.





                                User
                                tôi có cấu trúc sau: {Array(data.total_pages).fill(0).map((item, index) => (
                                    <span
                                        onClick={() => setPage(index + 1)}
                                        className={`text-white rounded-md px-3 py-1 cursor-pointer ${index === (page - 1) ? "bg-[#3CE2E8]" : "bg-white bg-opacity-40"}`}
                                    >
                                        {index + 1}
                                    </span>
                                ))}

                                ở đây tôi muốn nếu có hơn 5 item thì sẽ hiển thị theo dạng [1 2 3 4 5 .... last]
                                ChatGPT
                                Để hiển thị một dạng danh sách với "..." nếu có hơn 5 mục, bạn có thể thêm một số logic để xử lý điều này. Dưới đây là một cách để thực hiện điều này:

                                javascript
                                Copy code
                                {Array(data.total_pages).fill(0).map((item, index) => {
                                    if (data.total_pages > 5) {
                                        if (index < 5 || index === data.total_pages - 1) {
                                            return (
                                                <span
                                                    key={index}
                                                    onClick={() => setPage(index + 1)}
                                                    className={`text-white rounded-md px-3 py-1 cursor-pointer ${index === (page - 1) ? "bg-[#3CE2E8]" : "bg-white bg-opacity-40"}`}
                                                >
                                                    {index === data.total_pages - 1 ? "last" : index + 1}
                                                </span>
                                            );
                                        } else if (index === 5) {
                                            return <span key={index}>...</span>;
                                        }
                                        return null;
                                    } else {
                                        return (
                                            <span
                                                key={index}
                                                onClick={() => setPage(index + 1)}
                                                className={`text-white rounded-md px-3 py-1 cursor-pointer ${index === (page - 1) ? "bg-[#3CE2E8]" : "bg-white bg-opacity-40"}`}
                                            >
                                                {index + 1}
                                            </span>
                                        );
                                    }
                                })}
                                <span
                                    className='px-2 py-1 bg-white rounded-md cursor-pointer text-[#3CE2E8]'
                                    onClick={() => {
                                        if (page < data.total_pages) {
                                            setPage(page + 1)
                                        }
                                    }
                                    }
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </div>
                        </div>
                )}
                    </div>
        </main>
    );
};

export default SearchPage;