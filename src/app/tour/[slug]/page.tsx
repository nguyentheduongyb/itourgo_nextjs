'use client'
import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import { Accordion } from 'flowbite-react';
import { BiSolidStar } from 'react-icons/bi'
import { MdDinnerDining, MdLocationOn } from 'react-icons/md'
import { HiArrowRight, HiOutlineInformationCircle } from 'react-icons/hi';
import { BsMoonStars } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import TourRating from '~/components/tour/TourRating';
import TourRecommend from '~/components/tour/TourRecommend';
import Navigation from '~/components/Navigation';

const TourDetail = ({ data }: any) => {
        const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'VND',
                minimumFractionDigits: 0
        })

        const [count, setCount] = useState(1);
        var totalPrice
        const [count2, setCount2] = useState(1);
        const [price, setPrice] = useState(3000000);
        const [isSubscribed, setIsSubscribed] = useState(false);
        const handleChange = () => {

        };
        function addPas() {
                setCount(count + 1);
        }
        function delPas() {
                if (count > 1) {
                        setCount(count - 1);
                }
        }
        function addPas_2() {
                setCount2(count2 + 1);
        }
        function delPas_2() {
                if (count2 > 0) {
                        setCount2(count2 - 1);
                }
        }
        function calPrice1() {
                setPrice(5000000);
        }
        function calPrice2() {
                setPrice(4000000);
        }
        function calPrice3() {

                setPrice(3000000);
        }

        return (
                <div className="">
                        <div className="container w-full py-5 md:p-5 rounded-xl">
                                <Navigation />
                                <div className="space-y-1">
                                        <h1 className="md:mb-3 text-[color:var(--primary-color)] text-2xl md:text-4xl line-clamp-2 font-medium md:font-bold">jjjjjjjj</h1>
                                        <div className="flex gap-2 items-center">
                                                <i className='flex'>
                                                        <BiSolidStar color="yellow" />
                                                        <BiSolidStar color="yellow" />
                                                        <BiSolidStar color="yellow" />
                                                        <BiSolidStar color="yellow" />
                                                        <BiSolidStar color="yellow" />
                                                </i>
                                                <span className='font-bold text-sm'>4.5</span>
                                                <span className='underline text-xs'>(500 reviews)</span>
                                        </div>
                                        <p className='text-sm text-gray-500 line-clamp-2'>Enjoy Devon and Cornwall</p>
                                </div>

                                <div className="flex flex-col md:flex-row gap-12 mt-4">
                                        <div className="w-full md:w-2/3">
                                                <div className="w-full">
                                                        <div className="w-full bg-no-repeat bg-center bg-cover pt-[52.4%]" style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/03/15/15/ivivu-le-giang-750x390.gif")' }}></div>
                                                </div>
                                                <div className='space-y-8 mt-4'>
                                                        <div className='space-y-4'>
                                                                <h2 className='font-medium text-2xl'>Chuyến tham quan Vương quốc Anh 6 ngày tại Devon và Cornwall</h2>
                                                                <p className='line-clamp-5'>Đăng ký một cuộc phiêu lưu gió lốc trong chuyến đi nước Anh nổi tiếng này qua Devon và Cornwall. Khám phá truyền thuyết về Vua Arthur tại Lâu đài Tintagel và tìm hiểu cách các tu sĩ của Tu viện Buckfast đã sống qua nhiều thế kỷ, trước khi thưởng thức trà kem truyền thống hoặc bánh ngọt Cornish.</p>
                                                                <div className='grid grid-cols-2 gap-4'>
                                                                        <div className='border rounded p-4 drop-shadow'>
                                                                                <div className='flex items-center font-bold gap-1'>
                                                                                        <MdLocationOn />
                                                                                        Travel
                                                                                </div>
                                                                                <p className='text-sm mt-1'>6 days, 1 country and 13 cities</p>
                                                                        </div>
                                                                        <div className='border rounded p-4 drop-shadow'>
                                                                                <div className='flex items-center font-bold gap-1'>
                                                                                        <MdLocationOn />
                                                                                        Accommodation
                                                                                </div>
                                                                                <p className='text-sm mt-1'>10 nights</p>
                                                                        </div>
                                                                        <div className='border rounded p-4 drop-shadow'>
                                                                                <div className='flex items-center font-bold gap-1'>
                                                                                        <MdLocationOn />
                                                                                        Meals
                                                                                </div>
                                                                                <p className='text-sm mt-1'>5 Breakfasts, 1 Lunch, 2 Dinners</p>
                                                                        </div>
                                                                        <div className='border rounded p-4 drop-shadow'>
                                                                                <div className='flex items-center font-bold gap-1'>
                                                                                        <MdLocationOn />
                                                                                        Itinerary
                                                                                </div>
                                                                                <Link href="" className='text-sm font-medium underline text-[color:var(--primary-color)] mt-1'>View day-by-day trip itinerary</Link>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                                <p className='text-2xl font-medium'>Lộ trình hàng ngày</p>
                                                                <p className='text-sm text-gray-500'>Hành trình 6 ngày từ London đến London thăm 1 quốc gia và 13 thành phố</p>
                                                                <Accordion className="rounded border-none border-y p-0">
                                                                        <Accordion.Panel className='m-0'>
                                                                                <Accordion.Title className='hover:bg-transparent space-y-2 focus:ring-0 py-2 bg-transparent'>
                                                                                        <p className='text-xs text-gray-400'>Ngày 1</p>
                                                                                        <p className='flex md:flex-row flex-col gap-2'>
                                                                                                <span className='text-black line-clamp-2'>Khám phá Stonehenge, Exeter and Plymouth</span>
                                                                                                <span className='flex items-center gap-1 text-xs line-clamp-1'>London<HiArrowRight />Stonehenge<HiArrowRight />Exeter<HiArrowRight />Plymouth</span>
                                                                                        </p>
                                                                                </Accordion.Title>
                                                                                <Accordion.Content className='px-2'>
                                                                                        <div className='space-y-3'>
                                                                                                <Image src="/images/visit-historic-stonehenge-england-1.webp" alt="" width={1000} height={250} />
                                                                                                <p className="text-xl font-medium">
                                                                                                        Khám phá Stonehenge, Exeter and Plymouth
                                                                                                </p>
                                                                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                                                                        Bỏ lại ánh đèn rực rỡ của thủ đô nước Anh phía sau và hành trình xuyên qua phong cảnh trải dài của Wiltshire đến Di sản Thế giới được UNESCO công nhận, những tảng đá nguyên khối cổ xưa ở Stonehenge, nổi lên hùng vĩ trên Đồng bằng Salisbury, tưởng tượng một thời điểm mà những người ngoại giáo và tu sĩ sẽ tụ tập ở giữa bí ẩn của họ . Tiếp theo, hãy ghé thăm Nhà thờ lớn Saint Peter thế kỷ 15 ở Exeter. Tiếp tục đến Plymouth, Thành phố Đại dương của Anh nổi tiếng với di sản hàng hải, nơi những người hành hương từng rời bờ biển nước Anh để đến một thế giới mới chưa được biết đến. Hãy cùng Giám đốc Du lịch của bạn và những người bạn đồng hành thưởng thức Bữa tối Chào mừng vào tối nay, tại một nhà hàng địa phương.
                                                                                                </p>
                                                                                        </div>

                                                                                        <div className='mt-8 space-y-3'>
                                                                                                <div className='flex gap-2 items-center text-sm'>
                                                                                                        <BsMoonStars size="20" />
                                                                                                        <span className="font-medium">Accommodation</span>
                                                                                                        <span>Crowne Plaza Plymouth</span>
                                                                                                </div>
                                                                                                <div className='flex gap-2 items-center text-sm'>
                                                                                                        <MdDinnerDining size="20" />
                                                                                                        <span className="font-medium">Included Meals</span>
                                                                                                        <span>Dinner</span>
                                                                                                </div>
                                                                                        </div>
                                                                                </Accordion.Content>
                                                                        </Accordion.Panel>
                                                                </Accordion>
                                                        </div>

                                                        <div className='border-t-2 pt-6 flex flex-col md:flex-row gap-6'>
                                                                <div className="flex-1 space-y-3">
                                                                        <p className='text-2xl font-medium'>Về chuyến đi này</p>
                                                                        <p className='text-sm text-[#4B6B35]'>Điểm tham quan nổi bật</p>
                                                                </div>
                                                                <div className='md:w-2/3 grid md:grid-cols-2 gap-4'>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <MdLocationOn size="32" color="#4B6B35" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className='font-bold'>Discover</span>
                                                                                        <span className=''>Stonehenge, St. Ives, Plymouth, Bath, Bristol and Windsor</span>
                                                                                </p>

                                                                        </div>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <MdLocationOn size="32" color="#4B6B35" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className='font-bold'>View</span>
                                                                                        <span className=''>St. Michaels Mount, the Mayflower Steps in Plymouth, Capability Brown landscaped parkland at Longleat and Windsor Castle.</span>
                                                                                </p>

                                                                        </div>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <MdLocationOn size="32" color="#4B6B35" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className='font-bold'>Visit</span>
                                                                                        <span className=''>the ancient stone circle at Stonehenge, Exeter Cathedral, the artists colony of St. Ives, Buckfast Abbey, the Roman Baths and Royal Windsor.</span>
                                                                                </p>

                                                                        </div>
                                                                </div>

                                                        </div>
                                                        <div className='pt-6 border-t-2 flex flex-col md:flex-row gap-6'>
                                                                <div className="flex-1 space-y-3">
                                                                        <p className='text-2xl font-medium'>Du lịch nổi bật</p>
                                                                        <p className='text-sm text-green-600'>Thông tin vận chuyển có thể xem tại đây:</p>
                                                                        <button className='px-6 py-2 bg-red-700 font-bold text-white'>Vận chuyển sân bay</button>
                                                                </div>
                                                                <div className='md:w-2/3 grid md:grid-cols-2 gap-4'>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <FaCheck size="32" color="#AF3B41" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className=''>Stonehenge, St. Ives, Plymouth, Bath, Bristol and Windsor</span>
                                                                                </p>

                                                                        </div>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <FaCheck size="32" color="#AF3B41" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className=''>St. Michaels Mount, the Mayflower Steps in Plymouth, Capability Brown landscaped parkland at Longleat and Windsor Castle.</span>
                                                                                </p>

                                                                        </div>
                                                                        <div className='flex gap-3 w-full'>
                                                                                <FaCheck size="32" color="#AF3B41" />
                                                                                <p className="text-sm space-x-2 flex-1">
                                                                                        <span className=''>the ancient stone circle at Stonehenge, Exeter Cathedral, the artists colony of St. Ives, Buckfast Abbey, the Roman Baths and Royal Windsor.</span>
                                                                                </p>

                                                                        </div>
                                                                </div>

                                                        </div>
                                                        {/* <div className="bg-white rounded-sm py-4 md:p-4 md:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] mt-4">
                                                        <h2 className="text-3xl font-medium text-[#003C71]">Chương trình tour</h2>

                                                        <div className="mt-4">
                                                                <h2 className="text-xl font-medium mb-3 uppercase">NGÀY 01: HÀ NỘI - HÀ KHẨU – MÔNG TỰ - ĐẠI LÝ ( ĂN TRƯA, TỐI TỰ TÚC)</h2>
                                                                <p className="mb-3">Sáng: Xe và HDV đón đoàn tại điểm hẹn tại Hà Nội đưa đoàn lên cửa khẩu Hà Khẩu, trên đường đi đoàn dừng chân ăn sáng tại điểm dừng chân (chi phí tự túc). Đoàn tiếp tục khởi hành đi Hà Khẩu.</p>
                                                                <p className="mb-3">Sau khi làm thủ tục nhập cảnh, đoàn khởi hành đi Mông Tự.</p>
                                                                <p className="mb-3">Ăn trưa tại Mông Tự.</p>
                                                                <p className="mb-3">16:20: Quý khách đáp chuyến tàu từ Mông Tự đi Đại Lý. Quý khách tự túc chi phí dùng bữa tối trên tàu</p>
                                                                <p className="mb-3">20:29: Tầu đến ga Đại Lý, xe đón Quý khách về khách sạn nghỉ ngơi. Nghỉ đêm tại Đại Lý</p>
                                                                <p className="mb-3">(Giờ tàu tới muộn, vì thế bữa tối HDV sẽ hỗ trợ du khách gọi đồ ăn trên tàu- chi phí tự túc. Nhà hàng địa phương không phục vụ bữa tối muộn nên đoàn sẽ ăn trên tàu.)</p>
                                                                <p className="mb-3"></p>
                                                        </div>
                                                        <div className="mt-4">
                                                                <h2 className="text-xl font-medium mb-3 upercase">NGÀY 02: ĐẠI LÝ ( ĂN SÁNG, TRƯA, TỐI)</h2>
                                                                <p className="mb-3">Ăn sáng tại khách sạn, Đoàn khởi hành đi tham quan:</p>
                                                                <p className="mb-3">- Thăm Hỷ Châu Cổ Trấn (Xi Zhou) - Qúy khách có thể đi tham quan kiến trúc truyền thống của dân tộc Bạch, và thưởng thức bánh Hỷ Châu</p>
                                                                <div className="mb-3">
                                                                        <img className="w-full" src="https://cdn2.ivivu.com/2023/04/12/14/ivivu-dali.gif" alt="" />
                                                                        <p className="text-center"><em>Hỷ Châu Cổ Trấn.</em></p>
                                                                </div>
                                                                <p className="mb-3">- Thăm quan Phương Dương Áp Thôn cách Thành Cổ Đại lý 7km, làng dưới chân núi Thương Sơn, là làng thôn con đường cổ trà mã cổ đạo đi qua, ngôi nhà trong làng đấy bảo tồn cổ kính như trong phim truyện Đi Đến Nơi Có Gió, ở đây quý khách được cảm nhận cuộc sống thư giãn như người bản địa</p>
                                                                <p className="mb-3">Quý khách lên xe di chuyển đến Hồ Nhĩ Hải: Tại bờ Tây của Hồ Nhĩ Hải quý khách sẽ có một trải nghiệm, đi xe (jeep mui trần) cực ngầu, bạn có thể chụp ảnh suốt quãng đường và ghi lại khoảnh khắc đáng nhớ nhất của mình! Hãy để chuyến du lịch trở thành ký ức cả đời của bạn!</p>
                                                                <div className="mb-3">
                                                                        <img className="w-full" src="https://cdn2.ivivu.com/2023/04/12/14/ivivu-dali.gif" alt="" />
                                                                        <p className="text-center"><em>Hỷ Châu Cổ Trấn.</em></p>
                                                                </div>
                                                                <p className="mb-3">Tiếp tục hành trình đến Biển Hoa, nơi thiên đường của các tiktok. Như quả cầu thủy tinh, bàn livestream của người nổi tiếng Internet! (Quý khách ngồi 4 người 1 xe, thời gian tham quan khoảng 60 phút). </p>
                                                                <p className="mb-3">Tiếp theo đưa đoàn đi thăm quan khu du lịch cấp 4A của Trung Hoa là Thành cổ Đại Lý, phía nam thành cổ đại lý là nước xanh biếc của hồ Nhĩ Hải, phía Tây là quanh năm cây cối tươi xanh của dãy núi Thương Sơn, nơi đây chính là nơi du khách thường hay nhắc đến với cảnh Phong hoa Tuyết Nguyệt, trải nghiệp cảm giác cổ quốc Nam triếu nhã tình, bạn hoản toàn có thể buông mình và tận hưởng sự ấp áp của ánh nắng chiếu thành cổ trong làn gió nhẹ nhẹ. Thỉnh thoàng nở nụ cười trên môi với những du khách lạ có duyên ngộ đi ngược chạm vai với mình.
                                                                </p>
                                                                <div className="mb-3">
                                                                        <img className="w-full" src="https://cdn2.ivivu.com/2023/04/12/14/ivivu-dali.gif" alt="" />
                                                                        <p className="text-center"><em>Thành Cổ Đại Lý.</em></p>
                                                                </div>
                                                                <p className="mb-3">Sau đó xe đưa đoàn khởi hành đi Lệ Giang – một thành phố xinh đẹp trên Cao Nguyên Vân Nam, được thiên nhiên ban tặng nhiều cảnh quan thơ mộng & trữ tình. Đoàn tự do dạo Phố Tứ Phương ở trung tâm thành cổ, ngắm sắc màu Lệ Giang về đêm, thưởng thức âm nhạc và các điệu dân vũ.</p>
                                                                <p className="mb-3">Nghỉ đêm ở Lệ Giang</p>
                                                        </div>
                                                        <div className="mt-4">
                                                                <h2 className="text-xl font-medium mb-3 upercase">NGÀY 3: LỆ GIANG - TU VIỆN  SONGZANLINSI  - SHANGRILA ( ĂN SÁNG, TRƯA, TỐI)</h2>
                                                                <p className="mb-3">Ăn sáng tại khách sạn. đoàn khởi hành đi ShangriLa – “Vùng đất bất tử” trong tiểu thuyết Lost Horizon (chân trời đã mất), của nhà văn Anh James Hilton.</p>
                                                                <p className="mb-3">Theo ngôn ngữ của người Tây Tạng, Shangrila có nghĩa là địa điểm của vận mệnh và sự may mắn, là trung tâm của ba dòng sông lớn Dương Tử, Lan Thương - đoạn đầu của dòng Mekong và Nộ Giang.</p>
                                                                <p className="mb-3">Đến Shangrila, Đoàn tiếp tục thăm quan</p>
                                                                <p className="mb-3">- Tu viện Songzanlinsi (Tùng Tán Lâm) - Được biết đến như phiên bản thu nhỏ của Cung điện Potala tại Lhasa, Tây Tạng. Tu viện này là tu viện Phật giáo Tây Tạng lớn nhất tại vùng Vân Nam, là trụ xứ của hơn 700 tăng sĩ. Tham quan Thành cổ DuKe Zong -- Nơi tập trung sinh sống lâu đời của người Tạng có tuổi đời trên 1.300 năm được bảo tồn tốt nhất ở Trung Quốc. Tới nơi đây, du khách sẽ được chiêm ngưỡng hàng trăm căn nhà kiểu Tây Tạng cổ xưa được gìn giữ cẩn thận, được những người Tạng hiếu khách giới thiệu những nét văn hóa đặc trưng, nếp sống sinh hoạt thường ngày và nhiệt tình giúp đỡ.</p>
                                                                <div className="mb-3">
                                                                        <img className="w-full" src="https://cdn2.ivivu.com/2023/03/15/16/ivivu-shangri-la.gif" alt="" />
                                                                        <p className="text-center"><em>Tu Viện Songzanlinsi.</em></p>
                                                                </div>
                                                                <p className="mb-3">Buổi tối: Ăn tối tại nhà hàng       </p>
                                                                <p className="mb-3">Hoặc Du khách có thể lựa chọn thêm chương trình :Quý khách thưởng thức buổi biểu diễn ca múa nhạc đặc sắc nhất của Tây Tạng – (Tạng Gia Thổ Tư Yến) Trải nghiệm văn hóa ẩm thực Tây Tạng với các tiết mục ca hát nhảy múa truyền thống nguyên bản, thưởng thức ẩm thực của người Tạng với rượu lúa mạch cao nguyên, trà sữa, pho mát…( Thời gian khoảng 90 phút, tự túc chi phí ~ 280 NDT).</p>
                                                                <p className="mb-3">Nghỉ đêm tại Shangrila.</p>
                                                        </div>
                                                        <div className="mt-4">
                                                                <h2 className="text-xl font-medium mb-3 upercase">NGÀY 4: SHANGRILA -  LỆ GIANG  ( ĂN SÁNG, TRƯA, TỐI)</h2>
                                                                <p className="mb-3">Ăn sáng tại khách sạn</p>
                                                                <p className="mb-3">Quý khách lên xe đi thăm quan Công viên Pudacuo (công viên Potaso) - Trái tim xanh ở Shangri La. Nằm ở trung tâm của khu di sản tự nhiên thế giới “Tam Giang Tịnh Lưu” thuộc vùng tây bắc tỉnh Vân Nam, Trung Quốc. Nơi đây được UNESCO công nhận là một Di sản thế giới và là một trong những điểm đến du lịch thu hút nhất Trung Quốc. Cảnh sắc nơi đây mĩ lệ tuyệt trần khiến cho du khách bị mê hoặc ngay từ lúc mới đặt bước chân đầu tiên, thậm chí còn ngỡ như mình đang lạc vào tiên cảnh.</p>
                                                                <div className="mb-3">
                                                                        <img className="w-full" src="https://cdn2.ivivu.com/2023/03/15/16/ivivu-potatso.gif" alt="" />
                                                                        <p className="text-center"><em>Công Viên Pudacuo.</em></p>
                                                                </div>
                                                                <p className="mb-3">Thăm quan Hồ Bita – Bích Tháp, dạo chơi trên đồng cỏ, biển hoa, lạc bước vào vùng đất thuần khiết, thưởng ngoạn những hồ nước tuyệt đẹp trên cao nguyên tuyết phủ; ngắm nhìn khu rừng nguyên sinh rậm rạp. Cảnh sắc của Pudacuo bốn mùa đều không giống nhau, mỗi thời điểm một vẻ đẹp Cảnh sắc thiên nhiên thanh bình hòa quyện với không gian xanh của thảm thực vật đa dạng đã để lại cho du khách những ấn tượng khó phai.</p>
                                                                <p className="mb-3">Tiếp tục di thăm quan Bảo Tàng văn hóa Tạng</p>
                                                                <p className="mb-3">Sau do đoàn khởi hành về Lệ Giang,</p>
                                                                <div className="mb-3">
                                                                        <img className="w-full" src="https://cdn2.ivivu.com/2023/04/12/14/ivivu-dali.gif" alt="" />
                                                                        <p className="text-center"><em>Thành Cổ Đại Lý.</em></p>
                                                                </div>
                                                                <p className="mb-3">Đến Lệ Giang, Quý khách đi thăm quan Công Viên Hắc Long Đàm – nơi Dòng nước từ núi băng Ngọc Long đổ về nuôi sống vùng đất Lệ Giang. Từ công viên Hắc Long có thể ngắm sự hùng vĩ của núi tuyết ngàn năm, trong khung cảnh thanh bình của nước hồ phẳng lặng.</p>
                                                                <div className="mb-3">
                                                                        <img className="w-full" src="https://cdn2.ivivu.com/2023/04/12/14/ivivu-cv-hac-long-dam2.gif" alt="" />
                                                                        <p className="text-center"><em>Công Viên Hắc Long Đàm.</em></p>
                                                                </div>
                                                                <p className="mb-3">Ăn tối tại nhà hàng. Nghỉ đêm ở Lệ Giang.</p>
                                                        </div>
                                                        <div className="mt-4">
                                                                <h2 className="text-xl font-medium mb-3 upercase">NGÀY 5: LỆ GIANG ( ĂN SÁNG, TRƯA, TỐI)</h2>
                                                                <p className="mb-3">Sáng: Ăn sáng tại khách sạn.</p>
                                                                <p className="mb-3">Quý khách đi thăm quan Khu lịch Núi Tuyết Ngọc Long. Quý khách đi cáp treo nhỏ lên thăm Vân Tam Bình – độ cao 3200 m ngắm cảnh đẹp Núi tuyết Ngọc Long - ngọn núi cao 5596m tuyết phủ quanh năm. Phần băng vĩnh cửu ánh lên một màu xanh như ngọc. Lại gọi đây là núi trinh nữ vì cho đến nay con người chưa một lần chinh phục được nó. Nhiều nhà leo núi đã bỏ mạng hoặc ngậm ngùi rút lui, bất lực trước sự trinh nguyên bí ẩn của vùng núi vào loại đẹp nhất tỉnh Vân Nam này.</p>
                                                                <div className="mb-3">
                                                                        <img className="w-full" src="https://cdn2.ivivu.com/2023/03/15/17/ivivu-ngoc-long.gif" alt="" />
                                                                        <p className="text-center"><em>Khu Lịch Núi Tuyết Ngọc Long.</em></p>
                                                                </div>
                                                                <p className="mb-3">Tham quan Bạch Thủy Hà (Lam Nguyệt Đàm) – được tạo thành bởi băng tan từ núi tuyết Ngọc Long, thảo nguyên Cam Hải Tử, thăm Ngọc Thủy Trại – nơi có cảnh đẹp và thể hiện tập tục, tín ngưỡng của dân Na Xi và nền văn hóa Đông Ba. thăm Làng Naxi – đây là một ngôi làng cổ tiêu biểu của vùng Vân Nam, Trung Quốc. Điều khiến làng Naxi gây ấn tượng mạnh với du khách là do nó nằm trên một tảng đá hình cây Nấm khổng lồ. Hơn 1000 ngôi nhà nơi đây được sắp xếp rất trật tự, liên kết bởi các bậc thang đá. Người dân địa phương cũng thường lấy đá về làm bàn ghế, lò và một vài vật dụng sinh hoạt thường ngày. Trên ngọn đồi xung quanh tảng đá Nấm, du khách sẽ thấy được hình ảnh ruộng bậc thang rất tươi tốt. Một trải nghiệm thú vị không thể thiếu trong hành trình này.</p>
                                                                <div className="mb-3">
                                                                        <img className="w-full" src="https://cdn2.ivivu.com/2023/03/15/17/ivivu-bach-thuy-ha.gif" alt="" />
                                                                        <p className="text-center"><em>Bạch Thủy Hà.</em></p>
                                                                </div>
                                                                <p className="mb-3">Quý khách có thể  (tự túc chi phí) tham gia vào chương trình “ Ấn Tượng Lệ Giang” do đạo diễn lừng danh Trương Nghệ Mưu dàn dựng. Một vở nhạc kịch được biểu diễn ngoài trời, trên độ cao hơn 3.000m, với cảnh nền sân khấu chính là bầu trời và dãy núi Ngọc Long…, thật khó tưởng tượng nếu không một lần “mục sở thị”.</p>
                                                                <p className="mb-3">- Tham quan Thành cổ Lệ Giang - Thành cổ được xây dựng vào cuối đời Tống cách đây hơn 800 năm, nằm trên cao nguyên Vân Quý, ở độ cao 2.400m so với mặt nước biển, nhà cửa nơi đây có kiến trúc độc đáo pha trộn giữa các Hán, Bạch, Tạng kết hợp với phong cách truyền thống của người Nạp Tây bản địa. Không chỉ vậy, Lệ Giang còn là trung tâm thương mại sầm uất của con đường huyền thoại Trà Mã Cổ Đạo, nơi các lái buôn thực hiện việc trao đổi ngựa Tây Tạng lấy Trà Trung Hoa. Thành cổ này được UNESCO công nhận là Di sản văn hoá thế giới vào năm 1997. Một di sản văn hóa thế giới với phong cảnh đẹp đẽ xứ nước, được mệnh danh là Venice của Phương Đông, nơi đây nhà nhà đều có suối chảy qua, những cây liễu buông xuống các bậc cửa và những cây cầu nhỏ xinh xắn.</p>
                                                                <p className="mb-3">Nghỉ đêm ở Lệ Giang.</p>
                                                        </div>
                                                        <p className="text-center"><em>Thứ tự tham quan có thể thay đổi nhưng vẫn đảm bảo đầy đủ điểm trong chương trình.</em></p>
                                                </div>

                                                <div className="bg-white rounded-sm py-4 md:p-4 md:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] mt-4">
                                                        <div className="mt-4">
                                                                <div className="flex justify-between items-center">
                                                                        <h2 className="text-3xl font-medium text-[#003C71]">Trung Hoa Cổ Kính</h2>
                                                                        <div className="flex gap-3">
                                                                                <Link href="/tour/day-la-bai-viet-2" className="flex gap-1 text-white font-bold text-[12px] rounded-lg items-center px-2 py-1 bg-[#1877F2]">
                                                                                        <BiSolidLike color="white" />
                                                                                        <span>Thích</span>
                                                                                </Link>
                                                                                <Link href="/tour/day-la-bai-viet-2" className="flex gap-1 text-white font-bold text-[12px] rounded-lg items-center px-2 py-1 bg-[#1877F2]">
                                                                                        <BiShareAlt color="white" />
                                                                                        <span>Chia sẻ</span>
                                                                                </Link>
                                                                        </div>
                                                                </div>
                                                                <div className="p-3">
                                                                        <p>Nổi tiếng với những điểm đến hấp dẫn và đầy thú vị tại Tây Bắc Trung Quốc. Lệ Giang vùng đất nổi tiếng với phong cảnh đẹp như tranh vẽ, với những con đường đèo vắt eo biến tấu khúc khuỷu, những dòng sông xanh ngắt quấn quýt xuyên qua những thị trấn cổ kính, những ngọn núi cao trùng điệp mời gọi du khách đến khám phá. Đến Shangri-la chiêm ngưỡng những cảnh quan thiên nhiên độc đáo, hòa mình vào văn hóa và phong tục tập quán truyền thống của người dân địa phương. Cùng iVIVU khám phá ngay hôm nay!</p>
                                                                </div>

                                                        </div>
                                                </div>

                                                <div className="bg-white rounded-sm py-4 md:p-4 md:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] mt-4">
                                                        <div className="mt-4">
                                                                <div className="flex justify-between items-center">
                                                                        <h2 className="text-3xl font-medium text-[#003C71]">Thông tin Visa</h2>
                                                                </div>
                                                                <div className="p-3">
                                                                        <p className="mb-2">- Quý khách chỉ cần hộ Việt Nam còn nguyên vẹn và có hạn sử dụng ít nhất 6 tháng tính từ ngày kết thúc tour.</p>
                                                                        <p className="mb-2">- Quý khách phải có xác nhận tiêm ngừa Vaccine Covid-19 đủ 2 mũi trở lên. Tra cứu chứng nhận tiêm ngừa tại: https://tiemchungcovid19.gov.vn/portal</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="bg-white rounded-sm py-4 md:p-4 md:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] mt-4">
                                                        <div className="mt-4">
                                                                <div className="flex justify-between items-center">
                                                                        <h2 className="text-3xl font-medium text-[#003C71]">Hướng dẫn viên</h2>
                                                                </div>
                                                                <div className="p-3">
                                                                        <p className="mb-2">- Quý khách chỉ cần hộ Việt Nam còn nguyên vẹn và có hạn sử dụng ít nhất 6 tháng tính từ ngày kết thúc tour.</p>
                                                                        <p className="mb-2">- Quý khách phải có xác nhận tiêm ngừa Vaccine Covid-19 đủ 2 mũi trở lên. Tra cứu chứng nhận tiêm ngừa tại: https://tiemchungcovid19.gov.vn/portal</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="bg-white rounded-sm py-4 md:p-4 md:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] mt-4">
                                                        <div className="mt-4">
                                                                <div className="flex justify-between items-center">
                                                                        <h2 className="text-3xl font-medium text-[#003C71]">Chi phí dự kiến</h2>
                                                                </div>
                                                                <div>
                                                                        <div>Giá bao gồm</div>
                                                                </div>
                                                                <div className="p-3">
                                                                        <div className='mt-4'>
                                                                                <h4 className="font-medium text-lg mb-4">Vận Chuyển:</h4>
                                                                                <p className="mb-3">- Xe ô tô đưa đón theo chương trình</p>
                                                                                <p className="mb-3">- Xe điện và cáp treo nhỏ lên Vân Tam Bình ở Lệ Giang</p>
                                                                                <p className="mb-3">- Vé tàu cao tốc Mông Tự - Đại Lý; Lệ Giang - Côn Minh</p>
                                                                        </div>
                                                                        <div className='mt-4'>
                                                                                <h4 className="font-medium text-lg mb-4">Lưu Trú:</h4>
                                                                                <p className="mb-3">- Khách sạn chuẩn 4 sao địa phương, ở Lệ Giang và Shangrila phòng tiêu chuẩn 02 người/phòng, trường hợp lẻ - ghép 03 người/phòng)</p>
                                                                                <p className="mb-3">- Khách sạn ở Đại Lý chuẩn 3 sao, ở phòng tiêu chuẩn 02 người/phòng, trường hợp lẻ - ghép 03 người/phòng)</p>
                                                                        </div>
                                                                        <div className='mt-4'>
                                                                                <h4 className="font-medium text-lg mb-4">Khác:</h4>
                                                                                <p className="mb-3">- Ăn các bữa như chương trình, bữa chính gồm 8 món +1 canh, 8-10 người/ bàn mức ăn 40 NDT/ bữa (Riêng ở Đại Lý mức ăn là 50 NDT/ người/ bữa</p>
                                                                                <p className="mb-3">- Vé cửa thăm quan trong chương trình</p>
                                                                                <p className="mb-3">- Hướng dẫn viên tiếng việt theo suốt hành trình, Hướng dẫn viên địa phương nói tiếng Trung</p>
                                                                                <p className="mb-3">- Bảo hiểm trách nhiệm công ty du lịch mức đền bù 30.000USD. Đối với khách trên 70 tuổi mức bảo hiểm là 5.000USD (cho bảo hiểm do tai nạn rủi ro trong khi du lịch, không bao gồm bảo hiểm cho các loại bệnh mãn tính và bệnh phát cấp tính).</p>
                                                                                <p className="mb-3">- Nước uống trên ô tô 1 chai/người/ngày</p>
                                                                                <p className="mb-3">- Visa nhập cảnh trung quốc (Visa đoàn)</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div> */}

                                                </div>

                                        </div>
                                        {/* <div className="flex-1">
                                                <div className="w-full bg-white rounded-sm p-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-lg mb-3">
                                                        <h3 className="mb-3 text-[color:var(--primary-color)] text-xl font-bold">Lịch khởi hành & Giá</h3>
                                                        <p className="">Chọn ngày khời hành:</p>
                                                        <div className="flex justify-between mt-3">
                                                                <button className='p-3 border rounded focus:border-teal-500' onClick={calPrice1}>28/09</button>
                                                                <button className='p-3 border rounded focus:border-teal-500' onClick={calPrice2}>29/09</button>
                                                                <button className='p-3 border rounded focus:border-teal-500' onClick={calPrice3}>30/09</button>
                                                                <button className='p-3 border rounded'>Tất cả</button>
                                                        </div>


                                                        <div className='p-3 flex items-center justify-between border rounded-lg mt-3'>
                                                                <span>Người lớn</span>
                                                                <span className='text-orange-500 font-medium text-l'>{formatter.format(price * count)}</span>
                                                                <div className='flex items-center gap-3 text-l'>
                                                                        <button className='font-semibold' onClick={addPas}>+</button>
                                                                        <span>{count}</span>
                                                                        <button className='font-semibold' onClick={delPas}>-</button>
                                                                </div>





                                                        </div>
                                                        <div className='p-3 flex items-center justify-between border rounded-lg mt-3'>
                                                                <span>Trẻ em</span>
                                                                <span className='text-orange-500 font-medium text-l'> {formatter.format(price * count2 / 2)} </span>
                                                                <div className='flex items-center gap-3 text-l'>
                                                                        <button className='font-semibold' onClick={addPas_2}>+</button>
                                                                        <span>{count2}</span>
                                                                        <button className='font-semibold' onClick={delPas_2}>-</button>
                                                                </div>
                                                        </div>
                                                        <p className='flex items-center mt-3 gap-3 text-[color:var(--primary-color)]'><HiOutlineInformationCircle /><span>Liên hệ để xác nhận chỗ</span></p>
                                                        <div className="mt-3">
                                                                <p className="flex justify-between mt-2 items-center">
                                                                        <input type="checkbox" onChange={handleChange} />
                                                                        <span>Phụ thu phòng đơn</span>
                                                                        <span className="text-orange-500">{formatter.format(2000000)}</span>
                                                                </p>
                                                                <p className="flex justify-between mt-2 items-center">
                                                                        <input type="checkbox" id="promo" checked />
                                                                        <span>Giảm giá</span>
                                                                        <span className="text-orange-500">-{formatter.format(1000000)}</span>
                                                                </p>
                                                                <p className="flex justify-between mt-2 items-center">
                                                                        <span className="font-medium text-xl">Tổng cộng</span>
                                                                        <span className="font-medium text-2xl text-orange-500">{totalPrice = !isSubscribed ? formatter.format(price * (count + count2 / 2) - 1000000) : formatter.format(price * (count + count2 / 2) + 1000000)}</span>
                                                                </p>
                                                        </div>
                                                        <div className="flex grid grid-cols-2 gap-4 mt-5">
                                                                <Link className="border border-[color:var(--primary-color)] bg-white p-3 text-center text-[color:var(--primary-color)] rounded font-bold text-lg" href="/user/payment">Đặt cọc</Link>
                                                                <Link className="bg-[color:var(--primary-color)] p-3 text-center text-white rounded font-bold text-lg" href={{
                                                                        pathname: "/user/payment",
                                                                        query: {
                                                                                totalPrice: totalPrice,
                                                                                quantity1: count,
                                                                                quantity2: count2,
                                                                                price: price,
                                                                                isSubscribed: isSubscribed
                                                                        },
                                                                }}>Yêu cầu đặt</Link>

                                                        </div>
                                                </div>
                                        </div> */}
                                </div>


                        </div >
                        <TourRecommend />
                        <TourRating />
                </div>
        )
}

export default TourDetail
